import React from 'react'
import Panel from './Panel'

import './ExecutionPanel.css'
import { InterpreterInterface } from '../interpreter/interpJS/interface/interface'

class ExecutionPanel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            compiledExpression : null,
            frames : [],
            info : {
                compResult : "uncompiled",
                type : "undefined",
                msg : ""
            },
            showinfo : false
        }
        this.getCode = this.props.getCode;

        this.shell = null;
        this.prepared = false;
        this.running = false;
    }

    render() {
        var frames = []

        for(var idx in this.state.frames) {
            var fm = new StackFrame({frame : this.state.frames[idx]})
            frames.push(fm.render())
        }

        var infoFrame = this.state.showinfo ? new InfoFrame(this.state.info).render() : null;

        return (
            <Panel>
                <div className="ButtonRow">
                    <Button label="Compile" onClick={e => this.onCompile()}></Button>
                    <Button label="Next"    onClick={e => this.onNext()}></Button>
                </div>
                <div className="ExeStackPanel">
                    {infoFrame}
                    {frames}
                </div>
            </Panel>
        )
    }
    
    onCompile() {    
        var code = this.getCode()
        this.shell = new InterpreterInterface(code);

        this.prepared = false;
        this.running = false;

        this.setState({frames:[]})

        var compmsg = ""

        // compile 
        var success = this.shell.compile((msg) => {compmsg = msg});

        if(!success) {
            this.setState({
                info : {
                    compResult : "Failed",
                    type : "undefined",
                    msg : compmsg
                },
                showinfo : true
            })
            return;
        }

        // typecheck
        var ty = this.shell.typeCheck()
        if(!ty) {
            this.setState({
                info : {
                    compResult : "Succeeded",
                    type : "null",
                    msg : "Type error"
                },
                showinfo : true
            })
            return;
        }

        // preparing
        this.setState({
            info : {
                compResult : "Succeeded",
                type : ty.toString(),
                msg : "null"
            },
            showinfo : true
        })

        this.shell.prepare()
        this.prepared = true;
    }

    onNext() {
        if(!this.prepared) {
            return;
        }

        this.setState({showinfo : false})

        if(!this.running) {
            this.running = true;
            this.setState({
                frames : this.shell.getWebpageStack()
            })
            return;
        }

        this.shell.oneStep();
        this.setState({
            frames : this.shell.getWebpageStack()
        })
    }

}

class Button extends React.Component {
    render() {
        return (
            <div className="ExeButton" onClick={this.props.onClick}>
                {this.props.label}
            </div>
        )
    }
}

class InfoFrame extends React.Component {
    render() {
        return (
            <div className="ExeInfoPanel">
                <MsgBar item="Parsing" value={this.props.compResult}></MsgBar>
                <MsgBar item="Type" value={this.props.type}></MsgBar>
                <MsgBar item="Error msg" value={this.props.msg}></MsgBar>
            </div>
        )
    }
}

class MsgBar extends React.Component {
    render() {
        return (
            <div className="ExeEnvBar">
                <div className="EnvVar">{this.props.item}</div>
                <div className="EnvArrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>
                <div className="EnvValue">{this.props.value}</div>
            </div>
        )
    }
}

class StackFrame extends React.Component {
    render() {
        var envbars = []
        for(var varib in this.props.frame.env) {
            envbars.push(
                <EnvBar varib={varib} value={this.props.frame.env[varib]}></EnvBar>
            )
        }
        this.panel = (
            <div className="ExeFramePanel">
                <ExprBar expr={this.props.frame.expr}></ExprBar>
                {envbars}
            </div>
        )
        return this.panel
    }
}

class ExprBar extends React.Component {
    render() {
        return (
            <div className="ExeExprBar">
                {this.props.expr}
            </div>
        )
    }
}

class EnvBar extends React.Component {
    render() {
        return (
            <div className="ExeEnvBar">
                <div className="EnvVar">{this.props.varib}</div>
                <div className="EnvArrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>
                <div className="EnvValue">{this.props.value}</div>
            </div>
        )
    }
}

export default ExecutionPanel;
