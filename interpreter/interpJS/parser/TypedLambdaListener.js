// Generated from TypedLambda.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
// This class defines a complete listener for a parse tree produced by TypedLambdaParser.
function TypedLambdaListener() {
    antlr4.tree.ParseTreeListener.call(this);
    return this;
}
TypedLambdaListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TypedLambdaListener.prototype.constructor = TypedLambdaListener;
// Enter a parse tree produced by TypedLambdaParser#program.
TypedLambdaListener.prototype.enterProgram = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#program.
TypedLambdaListener.prototype.exitProgram = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#using.
TypedLambdaListener.prototype.enterUsing = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#using.
TypedLambdaListener.prototype.exitUsing = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_addsub.
TypedLambdaListener.prototype.enterE_addsub = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_addsub.
TypedLambdaListener.prototype.exitE_addsub = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_not.
TypedLambdaListener.prototype.enterE_not = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_not.
TypedLambdaListener.prototype.exitE_not = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_case.
TypedLambdaListener.prototype.enterE_case = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_case.
TypedLambdaListener.prototype.exitE_case = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_cons.
TypedLambdaListener.prototype.enterE_cons = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_cons.
TypedLambdaListener.prototype.exitE_cons = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_uminus.
TypedLambdaListener.prototype.enterE_uminus = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_uminus.
TypedLambdaListener.prototype.exitE_uminus = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_conditional.
TypedLambdaListener.prototype.enterE_conditional = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_conditional.
TypedLambdaListener.prototype.exitE_conditional = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_muldiv.
TypedLambdaListener.prototype.enterE_muldiv = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_muldiv.
TypedLambdaListener.prototype.exitE_muldiv = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_abstraction.
TypedLambdaListener.prototype.enterE_abstraction = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_abstraction.
TypedLambdaListener.prototype.exitE_abstraction = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_logic.
TypedLambdaListener.prototype.enterE_logic = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_logic.
TypedLambdaListener.prototype.exitE_logic = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_variable.
TypedLambdaListener.prototype.enterE_variable = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_variable.
TypedLambdaListener.prototype.exitE_variable = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_group.
TypedLambdaListener.prototype.enterE_group = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_group.
TypedLambdaListener.prototype.exitE_group = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_application.
TypedLambdaListener.prototype.enterE_application = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_application.
TypedLambdaListener.prototype.exitE_application = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_literal.
TypedLambdaListener.prototype.enterE_literal = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_literal.
TypedLambdaListener.prototype.exitE_literal = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_let.
TypedLambdaListener.prototype.enterE_let = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_let.
TypedLambdaListener.prototype.exitE_let = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_compare.
TypedLambdaListener.prototype.enterE_compare = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_compare.
TypedLambdaListener.prototype.exitE_compare = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#e_tuple_proj.
TypedLambdaListener.prototype.enterE_tuple_proj = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#e_tuple_proj.
TypedLambdaListener.prototype.exitE_tuple_proj = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#variable.
TypedLambdaListener.prototype.enterVariable = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#variable.
TypedLambdaListener.prototype.exitVariable = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#abstraction.
TypedLambdaListener.prototype.enterAbstraction = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#abstraction.
TypedLambdaListener.prototype.exitAbstraction = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#l_int.
TypedLambdaListener.prototype.enterL_int = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#l_int.
TypedLambdaListener.prototype.exitL_int = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#l_true.
TypedLambdaListener.prototype.enterL_true = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#l_true.
TypedLambdaListener.prototype.exitL_true = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#l_false.
TypedLambdaListener.prototype.enterL_false = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#l_false.
TypedLambdaListener.prototype.exitL_false = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#l_tuple.
TypedLambdaListener.prototype.enterL_tuple = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#l_tuple.
TypedLambdaListener.prototype.exitL_tuple = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#l_nil.
TypedLambdaListener.prototype.enterL_nil = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#l_nil.
TypedLambdaListener.prototype.exitL_nil = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#t_group.
TypedLambdaListener.prototype.enterT_group = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#t_group.
TypedLambdaListener.prototype.exitT_group = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#t_arrow.
TypedLambdaListener.prototype.enterT_arrow = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#t_arrow.
TypedLambdaListener.prototype.exitT_arrow = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#t_tuple.
TypedLambdaListener.prototype.enterT_tuple = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#t_tuple.
TypedLambdaListener.prototype.exitT_tuple = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#t_list.
TypedLambdaListener.prototype.enterT_list = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#t_list.
TypedLambdaListener.prototype.exitT_list = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#t_int.
TypedLambdaListener.prototype.enterT_int = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#t_int.
TypedLambdaListener.prototype.exitT_int = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#t_using.
TypedLambdaListener.prototype.enterT_using = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#t_using.
TypedLambdaListener.prototype.exitT_using = function (ctx) {
};
// Enter a parse tree produced by TypedLambdaParser#t_bool.
TypedLambdaListener.prototype.enterT_bool = function (ctx) {
};
// Exit a parse tree produced by TypedLambdaParser#t_bool.
TypedLambdaListener.prototype.exitT_bool = function (ctx) {
};
exports.TypedLambdaListener = TypedLambdaListener;
