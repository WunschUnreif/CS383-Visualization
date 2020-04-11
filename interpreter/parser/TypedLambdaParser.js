// Generated from TypedLambda.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TypedLambdaListener = require('./TypedLambdaListener').TypedLambdaListener;
var TypedLambdaVisitor = require('./TypedLambdaVisitor').TypedLambdaVisitor;

var grammarFileName = "TypedLambda.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003.\u0099\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0003\u0002\u0007\u0002\u0012\n\u0002\f\u0002\u000e\u0002\u0015",
    "\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004G\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "]\n\u0004\f\u0004\u000e\u0004`\u000b\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0007\u0007r\n\u0007\f\u0007\u000e\u0007u\u000b\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007~\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u008c",
    "\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u0094\n",
    "\b\f\b\u000e\b\u0097\u000b\b\u0003\b\u0002\u0004\u0006\u000e\t\u0002",
    "\u0004\u0006\b\n\f\u000e\u0002\u0006\u0003\u0002\u0017\u0019\u0003\u0002",
    "\u0015\u0016\u0003\u0002\u001a\u001e\u0003\u0002\u001f \u0002\u00ac",
    "\u0002\u0013\u0003\u0002\u0002\u0002\u0004\u0018\u0003\u0002\u0002\u0002",
    "\u0006F\u0003\u0002\u0002\u0002\ba\u0003\u0002\u0002\u0002\nc\u0003",
    "\u0002\u0002\u0002\f}\u0003\u0002\u0002\u0002\u000e\u008b\u0003\u0002",
    "\u0002\u0002\u0010\u0012\u0005\u0004\u0003\u0002\u0011\u0010\u0003\u0002",
    "\u0002\u0002\u0012\u0015\u0003\u0002\u0002\u0002\u0013\u0011\u0003\u0002",
    "\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0016\u0003\u0002",
    "\u0002\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0016\u0017\u0005\u0006",
    "\u0004\u0002\u0017\u0003\u0003\u0002\u0002\u0002\u0018\u0019\u0007(",
    "\u0002\u0002\u0019\u001a\u0007\u0010\u0002\u0002\u001a\u001b\u0007-",
    "\u0002\u0002\u001b\u001c\u0007\u001e\u0002\u0002\u001c\u001d\u0005\u000e",
    "\b\u0002\u001d\u001e\u0007)\u0002\u0002\u001e\u0005\u0003\u0002\u0002",
    "\u0002\u001f \b\u0004\u0001\u0002 G\u0005\b\u0005\u0002!G\u0005\f\u0007",
    "\u0002\"#\u0007\"\u0002\u0002#G\u0005\u0006\u0004\u0010$%\u0007!\u0002",
    "\u0002%G\u0005\u0006\u0004\u000f&G\u0005\n\u0006\u0002\'(\u0007\u000b",
    "\u0002\u0002()\u0005\u0006\u0004\u0002)*\u0007\f\u0002\u0002*+\u0005",
    "\u0006\u0004\u0002+,\u0007\r\u0002\u0002,-\u0005\u0006\u0004\u0006-",
    "G\u0003\u0002\u0002\u0002./\u0007\u000e\u0002\u0002/0\u0005\b\u0005",
    "\u000201\u0007\u001e\u0002\u000212\u0005\u0006\u0004\u000223\u0007\u000f",
    "\u0002\u000234\u0005\u0006\u0004\u00054G\u0003\u0002\u0002\u000256\u0007",
    "\u0011\u0002\u000267\u0005\u0006\u0004\u000278\u0007\u0012\u0002\u0002",
    "89\u0007\u0006\u0002\u00029:\u0007\u0013\u0002\u0002:;\u0005\u0006\u0004",
    "\u0002;<\u0007\u0014\u0002\u0002<=\u0007-\u0002\u0002=>\u0007\t\u0002",
    "\u0002>?\u0007-\u0002\u0002?@\u0007\u0013\u0002\u0002@A\u0005\u0006",
    "\u0004\u0004AG\u0003\u0002\u0002\u0002BC\u0007&\u0002\u0002CD\u0005",
    "\u0006\u0004\u0002DE\u0007\'\u0002\u0002EG\u0003\u0002\u0002\u0002F",
    "\u001f\u0003\u0002\u0002\u0002F!\u0003\u0002\u0002\u0002F\"\u0003\u0002",
    "\u0002\u0002F$\u0003\u0002\u0002\u0002F&\u0003\u0002\u0002\u0002F\'",
    "\u0003\u0002\u0002\u0002F.\u0003\u0002\u0002\u0002F5\u0003\u0002\u0002",
    "\u0002FB\u0003\u0002\u0002\u0002G^\u0003\u0002\u0002\u0002HI\f\r\u0002",
    "\u0002IJ\t\u0002\u0002\u0002J]\u0005\u0006\u0004\u000eKL\f\f\u0002\u0002",
    "LM\t\u0003\u0002\u0002M]\u0005\u0006\u0004\rNO\f\u000b\u0002\u0002O",
    "P\t\u0004\u0002\u0002P]\u0005\u0006\u0004\fQR\f\n\u0002\u0002RS\t\u0005",
    "\u0002\u0002S]\u0005\u0006\u0004\u000bTU\f\t\u0002\u0002UV\u0007\t\u0002",
    "\u0002V]\u0005\u0006\u0004\tWX\f\u0007\u0002\u0002X]\u0005\u0006\u0004",
    "\bYZ\f\u000e\u0002\u0002Z[\u0007\b\u0002\u0002[]\u0007\u0003\u0002\u0002",
    "\\H\u0003\u0002\u0002\u0002\\K\u0003\u0002\u0002\u0002\\N\u0003\u0002",
    "\u0002\u0002\\Q\u0003\u0002\u0002\u0002\\T\u0003\u0002\u0002\u0002\\",
    "W\u0003\u0002\u0002\u0002\\Y\u0003\u0002\u0002\u0002]`\u0003\u0002\u0002",
    "\u0002^\\\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_\u0007\u0003",
    "\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002ab\u0007-\u0002\u0002b\t",
    "\u0003\u0002\u0002\u0002cd\u0007\u0007\u0002\u0002de\u0005\b\u0005\u0002",
    "ef\u0007\n\u0002\u0002fg\u0005\u000e\b\u0002gh\u0007\b\u0002\u0002h",
    "i\u0005\u0006\u0004\u0002i\u000b\u0003\u0002\u0002\u0002j~\u0007\u0003",
    "\u0002\u0002k~\u0007\u0004\u0002\u0002l~\u0007\u0005\u0002\u0002mn\u0007",
    "*\u0002\u0002ns\u0005\u0006\u0004\u0002op\u0007,\u0002\u0002pr\u0005",
    "\u0006\u0004\u0002qo\u0003\u0002\u0002\u0002ru\u0003\u0002\u0002\u0002",
    "sq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tv\u0003\u0002\u0002",
    "\u0002us\u0003\u0002\u0002\u0002vw\u0007+\u0002\u0002w~\u0003\u0002",
    "\u0002\u0002xy\u0007\u0006\u0002\u0002yz\u0007&\u0002\u0002z{\u0005",
    "\u000e\b\u0002{|\u0007\'\u0002\u0002|~\u0003\u0002\u0002\u0002}j\u0003",
    "\u0002\u0002\u0002}k\u0003\u0002\u0002\u0002}l\u0003\u0002\u0002\u0002",
    "}m\u0003\u0002\u0002\u0002}x\u0003\u0002\u0002\u0002~\r\u0003\u0002",
    "\u0002\u0002\u007f\u0080\b\b\u0001\u0002\u0080\u008c\u0007-\u0002\u0002",
    "\u0081\u008c\u0007#\u0002\u0002\u0082\u008c\u0007$\u0002\u0002\u0083",
    "\u0084\u0007(\u0002\u0002\u0084\u0085\u0005\u000e\b\u0002\u0085\u0086",
    "\u0007)\u0002\u0002\u0086\u008c\u0003\u0002\u0002\u0002\u0087\u0088",
    "\u0007&\u0002\u0002\u0088\u0089\u0005\u000e\b\u0002\u0089\u008a\u0007",
    "\'\u0002\u0002\u008a\u008c\u0003\u0002\u0002\u0002\u008b\u007f\u0003",
    "\u0002\u0002\u0002\u008b\u0081\u0003\u0002\u0002\u0002\u008b\u0082\u0003",
    "\u0002\u0002\u0002\u008b\u0083\u0003\u0002\u0002\u0002\u008b\u0087\u0003",
    "\u0002\u0002\u0002\u008c\u0095\u0003\u0002\u0002\u0002\u008d\u008e\f",
    "\u0006\u0002\u0002\u008e\u008f\u0007%\u0002\u0002\u008f\u0094\u0005",
    "\u000e\b\u0006\u0090\u0091\f\u0005\u0002\u0002\u0091\u0092\u0007\u0017",
    "\u0002\u0002\u0092\u0094\u0005\u000e\b\u0006\u0093\u008d\u0003\u0002",
    "\u0002\u0002\u0093\u0090\u0003\u0002\u0002\u0002\u0094\u0097\u0003\u0002",
    "\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002",
    "\u0002\u0002\u0096\u000f\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002",
    "\u0002\u0002\u000b\u0013F\\^s}\u008b\u0093\u0095"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'true'", "'false'", "'nil'", "'\\'", "'.'", 
                     "'::'", "':'", "'if'", "'then'", "'else'", "'let'", 
                     "'in'", "'using'", "'case'", "'of'", "'=>'", "'|'", 
                     "'+'", "'-'", "'*'", "'/'", "'%'", "'<'", "'<='", "'>'", 
                     "'>='", "'='", "'and'", "'or'", "'not'", "'~'", "'Bool'", 
                     "'Int'", "'->'", "'('", "')'", "'['", "']'", "'{'", 
                     "'}'", "','" ];

var symbolicNames = [ null, "INT", "TRUE", "FALSE", "NIL", "ABS", "DOT", 
                      "CONS", "OF", "IF", "THEN", "ELSE", "LET", "IN", "USING", 
                      "CASE", "CASE_OF", "CASE_YIELD", "CASE_OR", "ADD", 
                      "SUB", "MUL", "DIV", "MOD", "LT", "LTE", "GT", "GTE", 
                      "EQ", "OP_AND", "OP_OR", "OP_NOT", "MIN", "T_BOOL", 
                      "T_INT", "T_ARROW", "OPEN_PAR", "CLOSE_PAR", "OPEN_MID", 
                      "CLOSE_MID", "OPEN_BRACE", "CLOSE_BRACE", "COMMA", 
                      "IDENTIFIER", "WS" ];

var ruleNames =  [ "program", "using", "expr", "variable", "abstraction", 
                   "literal", "type" ];

function TypedLambdaParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TypedLambdaParser.prototype = Object.create(antlr4.Parser.prototype);
TypedLambdaParser.prototype.constructor = TypedLambdaParser;

Object.defineProperty(TypedLambdaParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TypedLambdaParser.EOF = antlr4.Token.EOF;
TypedLambdaParser.INT = 1;
TypedLambdaParser.TRUE = 2;
TypedLambdaParser.FALSE = 3;
TypedLambdaParser.NIL = 4;
TypedLambdaParser.ABS = 5;
TypedLambdaParser.DOT = 6;
TypedLambdaParser.CONS = 7;
TypedLambdaParser.OF = 8;
TypedLambdaParser.IF = 9;
TypedLambdaParser.THEN = 10;
TypedLambdaParser.ELSE = 11;
TypedLambdaParser.LET = 12;
TypedLambdaParser.IN = 13;
TypedLambdaParser.USING = 14;
TypedLambdaParser.CASE = 15;
TypedLambdaParser.CASE_OF = 16;
TypedLambdaParser.CASE_YIELD = 17;
TypedLambdaParser.CASE_OR = 18;
TypedLambdaParser.ADD = 19;
TypedLambdaParser.SUB = 20;
TypedLambdaParser.MUL = 21;
TypedLambdaParser.DIV = 22;
TypedLambdaParser.MOD = 23;
TypedLambdaParser.LT = 24;
TypedLambdaParser.LTE = 25;
TypedLambdaParser.GT = 26;
TypedLambdaParser.GTE = 27;
TypedLambdaParser.EQ = 28;
TypedLambdaParser.OP_AND = 29;
TypedLambdaParser.OP_OR = 30;
TypedLambdaParser.OP_NOT = 31;
TypedLambdaParser.MIN = 32;
TypedLambdaParser.T_BOOL = 33;
TypedLambdaParser.T_INT = 34;
TypedLambdaParser.T_ARROW = 35;
TypedLambdaParser.OPEN_PAR = 36;
TypedLambdaParser.CLOSE_PAR = 37;
TypedLambdaParser.OPEN_MID = 38;
TypedLambdaParser.CLOSE_MID = 39;
TypedLambdaParser.OPEN_BRACE = 40;
TypedLambdaParser.CLOSE_BRACE = 41;
TypedLambdaParser.COMMA = 42;
TypedLambdaParser.IDENTIFIER = 43;
TypedLambdaParser.WS = 44;

TypedLambdaParser.RULE_program = 0;
TypedLambdaParser.RULE_using = 1;
TypedLambdaParser.RULE_expr = 2;
TypedLambdaParser.RULE_variable = 3;
TypedLambdaParser.RULE_abstraction = 4;
TypedLambdaParser.RULE_literal = 5;
TypedLambdaParser.RULE_type = 6;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TypedLambdaParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ProgramContext.prototype.using = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UsingContext);
    } else {
        return this.getTypedRuleContext(UsingContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TypedLambdaParser.ProgramContext = ProgramContext;

TypedLambdaParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TypedLambdaParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TypedLambdaParser.OPEN_MID) {
            this.state = 14;
            this.using();
            this.state = 19;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 20;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UsingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TypedLambdaParser.RULE_using;
    return this;
}

UsingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsingContext.prototype.constructor = UsingContext;

UsingContext.prototype.OPEN_MID = function() {
    return this.getToken(TypedLambdaParser.OPEN_MID, 0);
};

UsingContext.prototype.USING = function() {
    return this.getToken(TypedLambdaParser.USING, 0);
};

UsingContext.prototype.IDENTIFIER = function() {
    return this.getToken(TypedLambdaParser.IDENTIFIER, 0);
};

UsingContext.prototype.EQ = function() {
    return this.getToken(TypedLambdaParser.EQ, 0);
};

UsingContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

UsingContext.prototype.CLOSE_MID = function() {
    return this.getToken(TypedLambdaParser.CLOSE_MID, 0);
};

UsingContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterUsing(this);
	}
};

UsingContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitUsing(this);
	}
};

UsingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitUsing(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TypedLambdaParser.UsingContext = UsingContext;

TypedLambdaParser.prototype.using = function() {

    var localctx = new UsingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TypedLambdaParser.RULE_using);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.match(TypedLambdaParser.OPEN_MID);
        this.state = 23;
        this.match(TypedLambdaParser.USING);
        this.state = 24;
        this.match(TypedLambdaParser.IDENTIFIER);
        this.state = 25;
        this.match(TypedLambdaParser.EQ);
        this.state = 26;
        this.type(0);
        this.state = 27;
        this.match(TypedLambdaParser.CLOSE_MID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TypedLambdaParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function E_addsubContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_addsubContext.prototype = Object.create(ExprContext.prototype);
E_addsubContext.prototype.constructor = E_addsubContext;

TypedLambdaParser.E_addsubContext = E_addsubContext;

E_addsubContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

E_addsubContext.prototype.ADD = function() {
    return this.getToken(TypedLambdaParser.ADD, 0);
};

E_addsubContext.prototype.SUB = function() {
    return this.getToken(TypedLambdaParser.SUB, 0);
};
E_addsubContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_addsub(this);
	}
};

E_addsubContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_addsub(this);
	}
};

E_addsubContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_addsub(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_notContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_notContext.prototype = Object.create(ExprContext.prototype);
E_notContext.prototype.constructor = E_notContext;

TypedLambdaParser.E_notContext = E_notContext;

E_notContext.prototype.OP_NOT = function() {
    return this.getToken(TypedLambdaParser.OP_NOT, 0);
};

E_notContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
E_notContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_not(this);
	}
};

E_notContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_not(this);
	}
};

E_notContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_not(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_caseContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_caseContext.prototype = Object.create(ExprContext.prototype);
E_caseContext.prototype.constructor = E_caseContext;

TypedLambdaParser.E_caseContext = E_caseContext;

E_caseContext.prototype.CASE = function() {
    return this.getToken(TypedLambdaParser.CASE, 0);
};

E_caseContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

E_caseContext.prototype.CASE_OF = function() {
    return this.getToken(TypedLambdaParser.CASE_OF, 0);
};

E_caseContext.prototype.NIL = function() {
    return this.getToken(TypedLambdaParser.NIL, 0);
};

E_caseContext.prototype.CASE_YIELD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TypedLambdaParser.CASE_YIELD);
    } else {
        return this.getToken(TypedLambdaParser.CASE_YIELD, i);
    }
};


E_caseContext.prototype.CASE_OR = function() {
    return this.getToken(TypedLambdaParser.CASE_OR, 0);
};

E_caseContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TypedLambdaParser.IDENTIFIER);
    } else {
        return this.getToken(TypedLambdaParser.IDENTIFIER, i);
    }
};


E_caseContext.prototype.CONS = function() {
    return this.getToken(TypedLambdaParser.CONS, 0);
};
E_caseContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_case(this);
	}
};

E_caseContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_case(this);
	}
};

E_caseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_case(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_consContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_consContext.prototype = Object.create(ExprContext.prototype);
E_consContext.prototype.constructor = E_consContext;

TypedLambdaParser.E_consContext = E_consContext;

E_consContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

E_consContext.prototype.CONS = function() {
    return this.getToken(TypedLambdaParser.CONS, 0);
};
E_consContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_cons(this);
	}
};

E_consContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_cons(this);
	}
};

E_consContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_cons(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_uminusContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_uminusContext.prototype = Object.create(ExprContext.prototype);
E_uminusContext.prototype.constructor = E_uminusContext;

TypedLambdaParser.E_uminusContext = E_uminusContext;

E_uminusContext.prototype.MIN = function() {
    return this.getToken(TypedLambdaParser.MIN, 0);
};

E_uminusContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
E_uminusContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_uminus(this);
	}
};

E_uminusContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_uminus(this);
	}
};

E_uminusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_uminus(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_conditionalContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_conditionalContext.prototype = Object.create(ExprContext.prototype);
E_conditionalContext.prototype.constructor = E_conditionalContext;

TypedLambdaParser.E_conditionalContext = E_conditionalContext;

E_conditionalContext.prototype.IF = function() {
    return this.getToken(TypedLambdaParser.IF, 0);
};

E_conditionalContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

E_conditionalContext.prototype.THEN = function() {
    return this.getToken(TypedLambdaParser.THEN, 0);
};

E_conditionalContext.prototype.ELSE = function() {
    return this.getToken(TypedLambdaParser.ELSE, 0);
};
E_conditionalContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_conditional(this);
	}
};

E_conditionalContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_conditional(this);
	}
};

E_conditionalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_conditional(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_muldivContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_muldivContext.prototype = Object.create(ExprContext.prototype);
E_muldivContext.prototype.constructor = E_muldivContext;

TypedLambdaParser.E_muldivContext = E_muldivContext;

E_muldivContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

E_muldivContext.prototype.MUL = function() {
    return this.getToken(TypedLambdaParser.MUL, 0);
};

E_muldivContext.prototype.DIV = function() {
    return this.getToken(TypedLambdaParser.DIV, 0);
};

E_muldivContext.prototype.MOD = function() {
    return this.getToken(TypedLambdaParser.MOD, 0);
};
E_muldivContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_muldiv(this);
	}
};

E_muldivContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_muldiv(this);
	}
};

E_muldivContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_muldiv(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_abstractionContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_abstractionContext.prototype = Object.create(ExprContext.prototype);
E_abstractionContext.prototype.constructor = E_abstractionContext;

TypedLambdaParser.E_abstractionContext = E_abstractionContext;

E_abstractionContext.prototype.abstraction = function() {
    return this.getTypedRuleContext(AbstractionContext,0);
};
E_abstractionContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_abstraction(this);
	}
};

E_abstractionContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_abstraction(this);
	}
};

E_abstractionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_abstraction(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_logicContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_logicContext.prototype = Object.create(ExprContext.prototype);
E_logicContext.prototype.constructor = E_logicContext;

TypedLambdaParser.E_logicContext = E_logicContext;

E_logicContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

E_logicContext.prototype.OP_AND = function() {
    return this.getToken(TypedLambdaParser.OP_AND, 0);
};

E_logicContext.prototype.OP_OR = function() {
    return this.getToken(TypedLambdaParser.OP_OR, 0);
};
E_logicContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_logic(this);
	}
};

E_logicContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_logic(this);
	}
};

E_logicContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_logic(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_variableContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_variableContext.prototype = Object.create(ExprContext.prototype);
E_variableContext.prototype.constructor = E_variableContext;

TypedLambdaParser.E_variableContext = E_variableContext;

E_variableContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
E_variableContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_variable(this);
	}
};

E_variableContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_variable(this);
	}
};

E_variableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_variable(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_groupContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_groupContext.prototype = Object.create(ExprContext.prototype);
E_groupContext.prototype.constructor = E_groupContext;

TypedLambdaParser.E_groupContext = E_groupContext;

E_groupContext.prototype.OPEN_PAR = function() {
    return this.getToken(TypedLambdaParser.OPEN_PAR, 0);
};

E_groupContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

E_groupContext.prototype.CLOSE_PAR = function() {
    return this.getToken(TypedLambdaParser.CLOSE_PAR, 0);
};
E_groupContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_group(this);
	}
};

E_groupContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_group(this);
	}
};

E_groupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_group(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_applicationContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_applicationContext.prototype = Object.create(ExprContext.prototype);
E_applicationContext.prototype.constructor = E_applicationContext;

TypedLambdaParser.E_applicationContext = E_applicationContext;

E_applicationContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
E_applicationContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_application(this);
	}
};

E_applicationContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_application(this);
	}
};

E_applicationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_application(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_literalContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_literalContext.prototype = Object.create(ExprContext.prototype);
E_literalContext.prototype.constructor = E_literalContext;

TypedLambdaParser.E_literalContext = E_literalContext;

E_literalContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
E_literalContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_literal(this);
	}
};

E_literalContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_literal(this);
	}
};

E_literalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_literal(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_letContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_letContext.prototype = Object.create(ExprContext.prototype);
E_letContext.prototype.constructor = E_letContext;

TypedLambdaParser.E_letContext = E_letContext;

E_letContext.prototype.LET = function() {
    return this.getToken(TypedLambdaParser.LET, 0);
};

E_letContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

E_letContext.prototype.EQ = function() {
    return this.getToken(TypedLambdaParser.EQ, 0);
};

E_letContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

E_letContext.prototype.IN = function() {
    return this.getToken(TypedLambdaParser.IN, 0);
};
E_letContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_let(this);
	}
};

E_letContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_let(this);
	}
};

E_letContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_let(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_compareContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_compareContext.prototype = Object.create(ExprContext.prototype);
E_compareContext.prototype.constructor = E_compareContext;

TypedLambdaParser.E_compareContext = E_compareContext;

E_compareContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

E_compareContext.prototype.LT = function() {
    return this.getToken(TypedLambdaParser.LT, 0);
};

E_compareContext.prototype.LTE = function() {
    return this.getToken(TypedLambdaParser.LTE, 0);
};

E_compareContext.prototype.GT = function() {
    return this.getToken(TypedLambdaParser.GT, 0);
};

E_compareContext.prototype.GTE = function() {
    return this.getToken(TypedLambdaParser.GTE, 0);
};

E_compareContext.prototype.EQ = function() {
    return this.getToken(TypedLambdaParser.EQ, 0);
};
E_compareContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_compare(this);
	}
};

E_compareContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_compare(this);
	}
};

E_compareContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_compare(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E_tuple_projContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E_tuple_projContext.prototype = Object.create(ExprContext.prototype);
E_tuple_projContext.prototype.constructor = E_tuple_projContext;

TypedLambdaParser.E_tuple_projContext = E_tuple_projContext;

E_tuple_projContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

E_tuple_projContext.prototype.DOT = function() {
    return this.getToken(TypedLambdaParser.DOT, 0);
};

E_tuple_projContext.prototype.INT = function() {
    return this.getToken(TypedLambdaParser.INT, 0);
};
E_tuple_projContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterE_tuple_proj(this);
	}
};

E_tuple_projContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitE_tuple_proj(this);
	}
};

E_tuple_projContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitE_tuple_proj(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TypedLambdaParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, TypedLambdaParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TypedLambdaParser.IDENTIFIER:
            localctx = new E_variableContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 30;
            this.variable();
            break;
        case TypedLambdaParser.INT:
        case TypedLambdaParser.TRUE:
        case TypedLambdaParser.FALSE:
        case TypedLambdaParser.NIL:
        case TypedLambdaParser.OPEN_BRACE:
            localctx = new E_literalContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 31;
            this.literal();
            break;
        case TypedLambdaParser.MIN:
            localctx = new E_uminusContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 32;
            this.match(TypedLambdaParser.MIN);
            this.state = 33;
            this.expr(14);
            break;
        case TypedLambdaParser.OP_NOT:
            localctx = new E_notContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 34;
            this.match(TypedLambdaParser.OP_NOT);
            this.state = 35;
            this.expr(13);
            break;
        case TypedLambdaParser.ABS:
            localctx = new E_abstractionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 36;
            this.abstraction();
            break;
        case TypedLambdaParser.IF:
            localctx = new E_conditionalContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 37;
            this.match(TypedLambdaParser.IF);
            this.state = 38;
            this.expr(0);
            this.state = 39;
            this.match(TypedLambdaParser.THEN);
            this.state = 40;
            this.expr(0);
            this.state = 41;
            this.match(TypedLambdaParser.ELSE);
            this.state = 42;
            this.expr(4);
            break;
        case TypedLambdaParser.LET:
            localctx = new E_letContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 44;
            this.match(TypedLambdaParser.LET);
            this.state = 45;
            this.variable();
            this.state = 46;
            this.match(TypedLambdaParser.EQ);
            this.state = 47;
            this.expr(0);
            this.state = 48;
            this.match(TypedLambdaParser.IN);
            this.state = 49;
            this.expr(3);
            break;
        case TypedLambdaParser.CASE:
            localctx = new E_caseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 51;
            this.match(TypedLambdaParser.CASE);
            this.state = 52;
            this.expr(0);
            this.state = 53;
            this.match(TypedLambdaParser.CASE_OF);
            this.state = 54;
            this.match(TypedLambdaParser.NIL);
            this.state = 55;
            this.match(TypedLambdaParser.CASE_YIELD);
            this.state = 56;
            this.expr(0);
            this.state = 57;
            this.match(TypedLambdaParser.CASE_OR);
            this.state = 58;
            this.match(TypedLambdaParser.IDENTIFIER);
            this.state = 59;
            this.match(TypedLambdaParser.CONS);
            this.state = 60;
            this.match(TypedLambdaParser.IDENTIFIER);
            this.state = 61;
            this.match(TypedLambdaParser.CASE_YIELD);
            this.state = 62;
            this.expr(2);
            break;
        case TypedLambdaParser.OPEN_PAR:
            localctx = new E_groupContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 64;
            this.match(TypedLambdaParser.OPEN_PAR);
            this.state = 65;
            this.expr(0);
            this.state = 66;
            this.match(TypedLambdaParser.CLOSE_PAR);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 92;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 90;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new E_muldivContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, TypedLambdaParser.RULE_expr);
                    this.state = 70;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 71;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TypedLambdaParser.MUL) | (1 << TypedLambdaParser.DIV) | (1 << TypedLambdaParser.MOD))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 72;
                    this.expr(12);
                    break;

                case 2:
                    localctx = new E_addsubContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, TypedLambdaParser.RULE_expr);
                    this.state = 73;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 74;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===TypedLambdaParser.ADD || _la===TypedLambdaParser.SUB)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 75;
                    this.expr(11);
                    break;

                case 3:
                    localctx = new E_compareContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, TypedLambdaParser.RULE_expr);
                    this.state = 76;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 77;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TypedLambdaParser.LT) | (1 << TypedLambdaParser.LTE) | (1 << TypedLambdaParser.GT) | (1 << TypedLambdaParser.GTE) | (1 << TypedLambdaParser.EQ))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 78;
                    this.expr(10);
                    break;

                case 4:
                    localctx = new E_logicContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, TypedLambdaParser.RULE_expr);
                    this.state = 79;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 80;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===TypedLambdaParser.OP_AND || _la===TypedLambdaParser.OP_OR)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 81;
                    this.expr(9);
                    break;

                case 5:
                    localctx = new E_consContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, TypedLambdaParser.RULE_expr);
                    this.state = 82;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 83;
                    this.match(TypedLambdaParser.CONS);
                    this.state = 84;
                    this.expr(7);
                    break;

                case 6:
                    localctx = new E_applicationContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, TypedLambdaParser.RULE_expr);
                    this.state = 85;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 86;
                    this.expr(6);
                    break;

                case 7:
                    localctx = new E_tuple_projContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, TypedLambdaParser.RULE_expr);
                    this.state = 87;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 88;
                    this.match(TypedLambdaParser.DOT);
                    this.state = 89;
                    this.match(TypedLambdaParser.INT);
                    break;

                } 
            }
            this.state = 94;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TypedLambdaParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.IDENTIFIER = function() {
    return this.getToken(TypedLambdaParser.IDENTIFIER, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TypedLambdaParser.VariableContext = VariableContext;

TypedLambdaParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, TypedLambdaParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.match(TypedLambdaParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AbstractionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TypedLambdaParser.RULE_abstraction;
    return this;
}

AbstractionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AbstractionContext.prototype.constructor = AbstractionContext;

AbstractionContext.prototype.ABS = function() {
    return this.getToken(TypedLambdaParser.ABS, 0);
};

AbstractionContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

AbstractionContext.prototype.OF = function() {
    return this.getToken(TypedLambdaParser.OF, 0);
};

AbstractionContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

AbstractionContext.prototype.DOT = function() {
    return this.getToken(TypedLambdaParser.DOT, 0);
};

AbstractionContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AbstractionContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterAbstraction(this);
	}
};

AbstractionContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitAbstraction(this);
	}
};

AbstractionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitAbstraction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TypedLambdaParser.AbstractionContext = AbstractionContext;

TypedLambdaParser.prototype.abstraction = function() {

    var localctx = new AbstractionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TypedLambdaParser.RULE_abstraction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(TypedLambdaParser.ABS);
        this.state = 98;
        this.variable();
        this.state = 99;
        this.match(TypedLambdaParser.OF);
        this.state = 100;
        this.type(0);
        this.state = 101;
        this.match(TypedLambdaParser.DOT);
        this.state = 102;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TypedLambdaParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;


 
LiteralContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function L_nilContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

L_nilContext.prototype = Object.create(LiteralContext.prototype);
L_nilContext.prototype.constructor = L_nilContext;

TypedLambdaParser.L_nilContext = L_nilContext;

L_nilContext.prototype.NIL = function() {
    return this.getToken(TypedLambdaParser.NIL, 0);
};

L_nilContext.prototype.OPEN_PAR = function() {
    return this.getToken(TypedLambdaParser.OPEN_PAR, 0);
};

L_nilContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

L_nilContext.prototype.CLOSE_PAR = function() {
    return this.getToken(TypedLambdaParser.CLOSE_PAR, 0);
};
L_nilContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterL_nil(this);
	}
};

L_nilContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitL_nil(this);
	}
};

L_nilContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitL_nil(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function L_intContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

L_intContext.prototype = Object.create(LiteralContext.prototype);
L_intContext.prototype.constructor = L_intContext;

TypedLambdaParser.L_intContext = L_intContext;

L_intContext.prototype.INT = function() {
    return this.getToken(TypedLambdaParser.INT, 0);
};
L_intContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterL_int(this);
	}
};

L_intContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitL_int(this);
	}
};

L_intContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitL_int(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function L_tupleContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

L_tupleContext.prototype = Object.create(LiteralContext.prototype);
L_tupleContext.prototype.constructor = L_tupleContext;

TypedLambdaParser.L_tupleContext = L_tupleContext;

L_tupleContext.prototype.OPEN_BRACE = function() {
    return this.getToken(TypedLambdaParser.OPEN_BRACE, 0);
};

L_tupleContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

L_tupleContext.prototype.CLOSE_BRACE = function() {
    return this.getToken(TypedLambdaParser.CLOSE_BRACE, 0);
};

L_tupleContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TypedLambdaParser.COMMA);
    } else {
        return this.getToken(TypedLambdaParser.COMMA, i);
    }
};

L_tupleContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterL_tuple(this);
	}
};

L_tupleContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitL_tuple(this);
	}
};

L_tupleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitL_tuple(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function L_falseContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

L_falseContext.prototype = Object.create(LiteralContext.prototype);
L_falseContext.prototype.constructor = L_falseContext;

TypedLambdaParser.L_falseContext = L_falseContext;

L_falseContext.prototype.FALSE = function() {
    return this.getToken(TypedLambdaParser.FALSE, 0);
};
L_falseContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterL_false(this);
	}
};

L_falseContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitL_false(this);
	}
};

L_falseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitL_false(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function L_trueContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

L_trueContext.prototype = Object.create(LiteralContext.prototype);
L_trueContext.prototype.constructor = L_trueContext;

TypedLambdaParser.L_trueContext = L_trueContext;

L_trueContext.prototype.TRUE = function() {
    return this.getToken(TypedLambdaParser.TRUE, 0);
};
L_trueContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterL_true(this);
	}
};

L_trueContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitL_true(this);
	}
};

L_trueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitL_true(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TypedLambdaParser.LiteralContext = LiteralContext;

TypedLambdaParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, TypedLambdaParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.state = 123;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TypedLambdaParser.INT:
            localctx = new L_intContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 104;
            this.match(TypedLambdaParser.INT);
            break;
        case TypedLambdaParser.TRUE:
            localctx = new L_trueContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 105;
            this.match(TypedLambdaParser.TRUE);
            break;
        case TypedLambdaParser.FALSE:
            localctx = new L_falseContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 106;
            this.match(TypedLambdaParser.FALSE);
            break;
        case TypedLambdaParser.OPEN_BRACE:
            localctx = new L_tupleContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 107;
            this.match(TypedLambdaParser.OPEN_BRACE);
            this.state = 108;
            this.expr(0);
            this.state = 113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TypedLambdaParser.COMMA) {
                this.state = 109;
                this.match(TypedLambdaParser.COMMA);
                this.state = 110;
                this.expr(0);
                this.state = 115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 116;
            this.match(TypedLambdaParser.CLOSE_BRACE);
            break;
        case TypedLambdaParser.NIL:
            localctx = new L_nilContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 118;
            this.match(TypedLambdaParser.NIL);
            this.state = 119;
            this.match(TypedLambdaParser.OPEN_PAR);
            this.state = 120;
            this.type(0);
            this.state = 121;
            this.match(TypedLambdaParser.CLOSE_PAR);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TypedLambdaParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;


 
TypeContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function T_groupContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

T_groupContext.prototype = Object.create(TypeContext.prototype);
T_groupContext.prototype.constructor = T_groupContext;

TypedLambdaParser.T_groupContext = T_groupContext;

T_groupContext.prototype.OPEN_PAR = function() {
    return this.getToken(TypedLambdaParser.OPEN_PAR, 0);
};

T_groupContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

T_groupContext.prototype.CLOSE_PAR = function() {
    return this.getToken(TypedLambdaParser.CLOSE_PAR, 0);
};
T_groupContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterT_group(this);
	}
};

T_groupContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitT_group(this);
	}
};

T_groupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitT_group(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function T_arrowContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

T_arrowContext.prototype = Object.create(TypeContext.prototype);
T_arrowContext.prototype.constructor = T_arrowContext;

TypedLambdaParser.T_arrowContext = T_arrowContext;

T_arrowContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};

T_arrowContext.prototype.T_ARROW = function() {
    return this.getToken(TypedLambdaParser.T_ARROW, 0);
};
T_arrowContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterT_arrow(this);
	}
};

T_arrowContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitT_arrow(this);
	}
};

T_arrowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitT_arrow(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function T_tupleContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

T_tupleContext.prototype = Object.create(TypeContext.prototype);
T_tupleContext.prototype.constructor = T_tupleContext;

TypedLambdaParser.T_tupleContext = T_tupleContext;

T_tupleContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};

T_tupleContext.prototype.MUL = function() {
    return this.getToken(TypedLambdaParser.MUL, 0);
};
T_tupleContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterT_tuple(this);
	}
};

T_tupleContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitT_tuple(this);
	}
};

T_tupleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitT_tuple(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function T_listContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

T_listContext.prototype = Object.create(TypeContext.prototype);
T_listContext.prototype.constructor = T_listContext;

TypedLambdaParser.T_listContext = T_listContext;

T_listContext.prototype.OPEN_MID = function() {
    return this.getToken(TypedLambdaParser.OPEN_MID, 0);
};

T_listContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

T_listContext.prototype.CLOSE_MID = function() {
    return this.getToken(TypedLambdaParser.CLOSE_MID, 0);
};
T_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterT_list(this);
	}
};

T_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitT_list(this);
	}
};

T_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitT_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function T_intContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

T_intContext.prototype = Object.create(TypeContext.prototype);
T_intContext.prototype.constructor = T_intContext;

TypedLambdaParser.T_intContext = T_intContext;

T_intContext.prototype.T_INT = function() {
    return this.getToken(TypedLambdaParser.T_INT, 0);
};
T_intContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterT_int(this);
	}
};

T_intContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitT_int(this);
	}
};

T_intContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitT_int(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function T_usingContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

T_usingContext.prototype = Object.create(TypeContext.prototype);
T_usingContext.prototype.constructor = T_usingContext;

TypedLambdaParser.T_usingContext = T_usingContext;

T_usingContext.prototype.IDENTIFIER = function() {
    return this.getToken(TypedLambdaParser.IDENTIFIER, 0);
};
T_usingContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterT_using(this);
	}
};

T_usingContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitT_using(this);
	}
};

T_usingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitT_using(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function T_boolContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

T_boolContext.prototype = Object.create(TypeContext.prototype);
T_boolContext.prototype.constructor = T_boolContext;

TypedLambdaParser.T_boolContext = T_boolContext;

T_boolContext.prototype.T_BOOL = function() {
    return this.getToken(TypedLambdaParser.T_BOOL, 0);
};
T_boolContext.prototype.enterRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.enterT_bool(this);
	}
};

T_boolContext.prototype.exitRule = function(listener) {
    if(listener instanceof TypedLambdaListener ) {
        listener.exitT_bool(this);
	}
};

T_boolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TypedLambdaVisitor ) {
        return visitor.visitT_bool(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TypedLambdaParser.prototype.type = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TypeContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, TypedLambdaParser.RULE_type, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TypedLambdaParser.IDENTIFIER:
            localctx = new T_usingContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 126;
            this.match(TypedLambdaParser.IDENTIFIER);
            break;
        case TypedLambdaParser.T_BOOL:
            localctx = new T_boolContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 127;
            this.match(TypedLambdaParser.T_BOOL);
            break;
        case TypedLambdaParser.T_INT:
            localctx = new T_intContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 128;
            this.match(TypedLambdaParser.T_INT);
            break;
        case TypedLambdaParser.OPEN_MID:
            localctx = new T_listContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 129;
            this.match(TypedLambdaParser.OPEN_MID);
            this.state = 130;
            this.type(0);
            this.state = 131;
            this.match(TypedLambdaParser.CLOSE_MID);
            break;
        case TypedLambdaParser.OPEN_PAR:
            localctx = new T_groupContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 133;
            this.match(TypedLambdaParser.OPEN_PAR);
            this.state = 134;
            this.type(0);
            this.state = 135;
            this.match(TypedLambdaParser.CLOSE_PAR);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 147;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 145;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new T_arrowContext(this, new TypeContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, TypedLambdaParser.RULE_type);
                    this.state = 139;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 140;
                    this.match(TypedLambdaParser.T_ARROW);
                    this.state = 141;
                    this.type(4);
                    break;

                case 2:
                    localctx = new T_tupleContext(this, new TypeContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, TypedLambdaParser.RULE_type);
                    this.state = 142;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 143;
                    this.match(TypedLambdaParser.MUL);
                    this.state = 144;
                    this.type(4);
                    break;

                } 
            }
            this.state = 149;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


TypedLambdaParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.expr_sempred(localctx, predIndex);
	case 6:
			return this.type_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

TypedLambdaParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);
		case 1:
			return this.precpred(this._ctx, 10);
		case 2:
			return this.precpred(this._ctx, 9);
		case 3:
			return this.precpred(this._ctx, 8);
		case 4:
			return this.precpred(this._ctx, 7);
		case 5:
			return this.precpred(this._ctx, 5);
		case 6:
			return this.precpred(this._ctx, 12);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

TypedLambdaParser.prototype.type_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 7:
			return this.precpred(this._ctx, 4);
		case 8:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.TypedLambdaParser = TypedLambdaParser;
