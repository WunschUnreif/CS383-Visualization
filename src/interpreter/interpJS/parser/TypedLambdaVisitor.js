// Generated from TypedLambda.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by TypedLambdaParser.

function TypedLambdaVisitor() {
  antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

TypedLambdaVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
TypedLambdaVisitor.prototype.constructor = TypedLambdaVisitor;

// Visit a parse tree produced by TypedLambdaParser#program.
TypedLambdaVisitor.prototype.visitProgram = function(ctx) {
  console.log(ctx);
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#using.
TypedLambdaVisitor.prototype.visitUsing = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_addsub.
TypedLambdaVisitor.prototype.visitE_addsub = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_not.
TypedLambdaVisitor.prototype.visitE_not = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_case.
TypedLambdaVisitor.prototype.visitE_case = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_cons.
TypedLambdaVisitor.prototype.visitE_cons = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_uminus.
TypedLambdaVisitor.prototype.visitE_uminus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_conditional.
TypedLambdaVisitor.prototype.visitE_conditional = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_muldiv.
TypedLambdaVisitor.prototype.visitE_muldiv = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_abstraction.
TypedLambdaVisitor.prototype.visitE_abstraction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_logic.
TypedLambdaVisitor.prototype.visitE_logic = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_variable.
TypedLambdaVisitor.prototype.visitE_variable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_group.
TypedLambdaVisitor.prototype.visitE_group = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_application.
TypedLambdaVisitor.prototype.visitE_application = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_literal.
TypedLambdaVisitor.prototype.visitE_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_let.
TypedLambdaVisitor.prototype.visitE_let = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_compare.
TypedLambdaVisitor.prototype.visitE_compare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#e_tuple_proj.
TypedLambdaVisitor.prototype.visitE_tuple_proj = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#variable.
TypedLambdaVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#abstraction.
TypedLambdaVisitor.prototype.visitAbstraction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#l_int.
TypedLambdaVisitor.prototype.visitL_int = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#l_true.
TypedLambdaVisitor.prototype.visitL_true = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#l_false.
TypedLambdaVisitor.prototype.visitL_false = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#l_tuple.
TypedLambdaVisitor.prototype.visitL_tuple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#l_nil.
TypedLambdaVisitor.prototype.visitL_nil = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#t_group.
TypedLambdaVisitor.prototype.visitT_group = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#t_arrow.
TypedLambdaVisitor.prototype.visitT_arrow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#t_tuple.
TypedLambdaVisitor.prototype.visitT_tuple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#t_list.
TypedLambdaVisitor.prototype.visitT_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#t_int.
TypedLambdaVisitor.prototype.visitT_int = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#t_using.
TypedLambdaVisitor.prototype.visitT_using = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TypedLambdaParser#t_bool.
TypedLambdaVisitor.prototype.visitT_bool = function(ctx) {
  return this.visitChildren(ctx);
};



exports.TypedLambdaVisitor = TypedLambdaVisitor;