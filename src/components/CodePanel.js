import React from 'react'
import Panel from './Panel'
import './CodePanel.css'

// import rangy from 'rangy/lib/rangy-selectionsaverestore'

class CodePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            linenum : 1
        }
        this.codeeditor = new CodeEditor();
        this.handler = props.handler ? props.handler() : null;
    }

    render() {
        return (
            <Panel>
                <h3>Simple Typed Lambda</h3>
                <div className="CodePanel" onKeyUp={e => this.keyUp(e)}>
                    <CodeLineBar linenum={this.state.linenum}></CodeLineBar>
                    {this.codeeditor.render()}
                </div>
            </Panel>
        )
    }

    keyUp(e) {
        this.setState({
            linenum : this.codeeditor.countLineNum()
        })
    }

    getCode() {
        return this.codeeditor.getText()
    }
}

class CodeLineBar extends React.Component {
    constructor(porps) {
        super(porps);
        this.state = {
            maxnum : 1
        }
    }

    render() {
        var numlist = []
        for(var i = 0; i < this.props.linenum; i++) {
            numlist.push(<div className="CodeLineNo"></div>)
        }

        var div = (
            <div className="CodeLineBar">
                {numlist}
            </div>
        )

        return div;
    }
}

class CodeEditor extends React.Component {
    render() {
        this.div = (
            <div className="CodeEditor"
                contentEditable
                ref={ref => this.editor = ref}>
                    Code starts here.
            </div>
        );

        return this.div;
    }

    getText() {
        return this.editor.innerText;
    }

    countLineNum() {
        var text = this.getText();
        var count = 1;
        for(var i = 1; i < text.length; i++) {
            if(i === 0) continue;
            if(text[i - 1] === '\n') {
                i++
                count++;
            }
        }
        return count;
    }
}

export default CodePanel;
