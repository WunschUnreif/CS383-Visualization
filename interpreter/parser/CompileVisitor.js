// Generated from TypedLambda.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TypedLambdaVisitor = require('./TypedLambdaVisitor').TypedLambdaVisitor
var Lexer = require('./TypedLambdaLexer').TypedLambdaLexer
var Expr = require('../expr/index')
var Type = require('../typing/index')

// This class defines a complete generic visitor for a parse tree produced by TypedLambdaParser.

function CompileVisitor() {
  TypedLambdaVisitor.call(this);
	return this;
}

CompileVisitor.prototype = Object.create(TypedLambdaVisitor.prototype);
CompileVisitor.prototype.constructor = CompileVisitor;

CompileVisitor.prototype.usings = [];
CompileVisitor.prototype.errors = [];

// CompileVisitor.prototype.visit = function(ctx) {
//   return TypedLambdaVisitor.visit(ctx)
// }

// Visit a parse tree produced by TypedLambdaParser#program.
CompileVisitor.prototype.visitProgram = function(ctx) {
  var usings = ctx.using();
  for(var idx in usings) {
    this.visit(usings[idx]);
  }

  return this.visit(ctx.expr());
};


// Visit a parse tree produced by TypedLambdaParser#using.
CompileVisitor.prototype.visitUsing = function(ctx) {
  var ty = this.visit(ctx.type());
  this.usings[ctx.IDENTIFIER().getText()] = ty;

  return null;
};


// Visit a parse tree produced by TypedLambdaParser#e_addsub.
CompileVisitor.prototype.visitE_addsub = function(ctx) {
  var lhs = this.visit(ctx.expr(0));
  var rhs = this.visit(ctx.expr(1));
  var op = ctx.op.type;

  if(op == Lexer.ADD) {
    return new Expr.Arith(lhs, rhs, Expr.Arith.OP_ADD, '+');
  } else {
    return new Expr.Arith(lhs, rhs, Expr.Arith.OP_SUB, '-');
  }
};


// Visit a parse tree produced by TypedLambdaParser#e_not.
CompileVisitor.prototype.visitE_not = function(ctx) {
  var rhs = this.visit(ctx.expr());
  return new Expr.Not(rhs);
};


// Visit a parse tree produced by TypedLambdaParser#e_fix.
CompileVisitor.prototype.visitE_fix = function(ctx) {
  return new Expr.Fix(this.visit(ctx.expr()))
};


// Visit a parse tree produced by TypedLambdaParser#e_case.
CompileVisitor.prototype.visitE_case = function(ctx) {
  return new Expr.Case(
    this.visit(ctx.expr(0)),
    this.visit(ctx.expr(1)),
    ctx.IDENTIFIER(0).getText(),
    ctx.IDENTIFIER(1).getText(),
    this.visit(ctx.expr(2))
  )
};


// Visit a parse tree produced by TypedLambdaParser#e_cons.
CompileVisitor.prototype.visitE_cons = function(ctx) {
  return new Expr.Cons(
    this.visit(ctx.expr(0)),
    this.visit(ctx.expr(1))
  )
};


// Visit a parse tree produced by TypedLambdaParser#e_uminus.
CompileVisitor.prototype.visitE_uminus = function(ctx) {
  return new Expr.Neg(this.visit(ctx.expr()))
};


// Visit a parse tree produced by TypedLambdaParser#e_conditional.
CompileVisitor.prototype.visitE_conditional = function(ctx) {
  var e = new Expr.Cond(
    this.visit(ctx.expr(0)),
    this.visit(ctx.expr(1)),
    this.visit(ctx.expr(2))
  )
  return e;
};


// Visit a parse tree produced by TypedLambdaParser#e_muldiv.
CompileVisitor.prototype.visitE_muldiv = function(ctx) {
  var lhs = this.visit(ctx.expr(0));
  var rhs = this.visit(ctx.expr(1));
  var op = ctx.op.type;

  if(op === Lexer.MUL) {
    return new Expr.Arith(lhs, rhs, Expr.Arith.OP_MUL, '*');
  }

  if(op === Lexer.DIV) {
    return new Expr.Arith(lhs, rhs, Expr.Arith.OP_DIV, '/');
  }

  if(op === Lexer.MOD) {
    return new Expr.Arith(lhs, rhs, Expr.Arith.OP_REM, '%');
  }
};


// Visit a parse tree produced by TypedLambdaParser#e_abstraction.
CompileVisitor.prototype.visitE_abstraction = function(ctx) {
  return this.visit(ctx.abstraction())
};


// Visit a parse tree produced by TypedLambdaParser#e_logic.
CompileVisitor.prototype.visitE_logic = function(ctx) {
  var lhs = this.visit(ctx.expr(0));
  var rhs = this.visit(ctx.expr(1));
  var op = ctx.op.type;

  if(op === Lexer.OP_AND) {
    return new Expr.Logic(lhs, rhs, Expr.Logic.OP_AND, 'and')
  }

  if(op === Lexer.OP_OR) {
    return new Expr.Logic(lhs, rhs, Expr.Logic.OP_OR, 'or')
  }
};


// Visit a parse tree produced by TypedLambdaParser#e_variable.
CompileVisitor.prototype.visitE_variable = function(ctx) {
  return this.visit(ctx.variable())
};


// Visit a parse tree produced by TypedLambdaParser#e_group.
CompileVisitor.prototype.visitE_group = function(ctx) {
  return this.visit(ctx.expr());
};


// Visit a parse tree produced by TypedLambdaParser#e_application.
CompileVisitor.prototype.visitE_application = function(ctx) {
  return new Expr.App(
    this.visit(ctx.expr(0)),
    this.visit(ctx.expr(1))
  )
};


// Visit a parse tree produced by TypedLambdaParser#e_literal.
CompileVisitor.prototype.visitE_literal = function(ctx) {
  return this.visit(ctx.literal());
};


// Visit a parse tree produced by TypedLambdaParser#e_let.
CompileVisitor.prototype.visitE_let = function(ctx) {
  return new Expr.Let(
    ctx.variable().getText(),
    this.visit(ctx.expr(0)),
    this.visit(ctx.expr(1))
  )
};


// Visit a parse tree produced by TypedLambdaParser#e_compare.
CompileVisitor.prototype.visitE_compare = function(ctx) {
  var lhs = this.visit(ctx.expr(0));
  var rhs = this.visit(ctx.expr(1));
  var op = ctx.op.type;

  if(op === Lexer.LT) {
    return new Expr.Compare(lhs, rhs, Expr.Compare.OP_LT, '<')
  }

  if(op === Lexer.LTE) {
    return new Expr.Compare(lhs, rhs, Expr.Compare.OP_LTE, '<=')
  }

  if(op === Lexer.GT) {
    return new Expr.Compare(lhs, rhs, Expr.Compare.OP_GT, '>')
  }

  if(op === Lexer.GTE) {
    return new Expr.Compare(lhs, rhs, Expr.Compare.OP_GTE, '>=')
  }

  if(op === Lexer.EQ) {
    return new Expr.Eq(lhs, rhs)
  }
};


// Visit a parse tree produced by TypedLambdaParser#e_tuple_proj.
CompileVisitor.prototype.visitE_tuple_proj = function(ctx) {
  return new Expr.Proj(
    this.visit(ctx.expr()),
    parseInt(ctx.INT().getText())
  )
};


// Visit a parse tree produced by TypedLambdaParser#variable.
CompileVisitor.prototype.visitVariable = function(ctx) {
  return new Expr.Name(ctx.IDENTIFIER().getText())
};


// Visit a parse tree produced by TypedLambdaParser#abstraction.
CompileVisitor.prototype.visitAbstraction = function(ctx) {
  return new Expr.Abs(
    ctx.variable().getText(),
    this.visit(ctx.type()),
    this.visit(ctx.expr())
  );
};


// Visit a parse tree produced by TypedLambdaParser#l_int.
CompileVisitor.prototype.visitL_int = function(ctx) {
  return new Expr.IntLiteral(parseInt(ctx.INT().getText()))
};


// Visit a parse tree produced by TypedLambdaParser#l_true.
CompileVisitor.prototype.visitL_true = function(ctx) {
  return new Expr.BoolLiteral(true)
};


// Visit a parse tree produced by TypedLambdaParser#l_false.
CompileVisitor.prototype.visitL_false = function(ctx) {
  return new Expr.BoolLiteral(false)
};


// Visit a parse tree produced by TypedLambdaParser#l_tuple.
CompileVisitor.prototype.visitL_tuple = function(ctx) {
  var inner = []
  for(var idx in ctx.expr()) {
    inner.push(this.visit(ctx.expr()[idx]))
  }
  return new Expr.Tuple(inner);
};


// Visit a parse tree produced by TypedLambdaParser#l_nil.
CompileVisitor.prototype.visitL_nil = function(ctx) {
  return new Expr.NilLiteral(this.visit(ctx.type()))
};


// Visit a parse tree produced by TypedLambdaParser#t_group.
CompileVisitor.prototype.visitT_group = function(ctx) {
  return this.visit(ctx.type());
};


// Visit a parse tree produced by TypedLambdaParser#t_arrow.
CompileVisitor.prototype.visitT_arrow = function(ctx) {
  return new Type.ArrowType(
    this.visit(ctx.type(0)),
    this.visit(ctx.type(1))
  )
};


// Visit a parse tree produced by TypedLambdaParser#t_tuple.
CompileVisitor.prototype.visitT_tuple = function(ctx) {
  var tys = [];
  for(var idx in ctx.type()) {
    tys.push(this.visit(ctx.type()[idx]))
  }
  return new Type.TupleType(tys);
};


// Visit a parse tree produced by TypedLambdaParser#t_list.
CompileVisitor.prototype.visitT_list = function(ctx) {
  return new Type.ListType(this.visit(ctx.type()))
};


// Visit a parse tree produced by TypedLambdaParser#t_int.
CompileVisitor.prototype.visitT_int = function(ctx) {
  return new Type.IntType()
};


// Visit a parse tree produced by TypedLambdaParser#t_using.
CompileVisitor.prototype.visitT_using = function(ctx) {
  if(this.usings[ctx.IDENTIFIER().getText()]) {
    return this.usings[ctx.IDENTIFIER().getText()]
  }
  return null;
};


// Visit a parse tree produced by TypedLambdaParser#t_bool.
CompileVisitor.prototype.visitT_bool = function(ctx) {
  return new Type.BoolType();
};



exports.CompileVisitor = CompileVisitor;