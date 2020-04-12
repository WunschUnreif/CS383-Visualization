grammar TypedLambda;

program :  SP* (using SP*)* SP* expr SP*;

using 
    : OPEN_MID SP* USING SP* IDENTIFIER SP* EQ SP* type SP* CLOSE_MID;

expr 
    : variable                                              # e_variable
    | literal                                               # e_literal

    | MIN SP* expr                                          # e_uminus
    | OP_NOT SP* expr                                       # e_not
    | expr DOT INT                                          # e_tuple_proj
    | expr SP* op=(MUL|DIV|MOD) SP* expr                    # e_muldiv
    | expr SP* op=(ADD|SUB) SP* expr                        # e_addsub
    | expr SP* op=(LT|LTE|GT|GTE|EQ) SP* expr               # e_compare
    | expr SP* op=(OP_AND|OP_OR) SP* expr                   # e_logic
    | <assoc=right> expr CONS expr                          # e_cons

    | abstraction                                           # e_abstraction
    | expr SP+ expr                                         # e_application

    | IF SP* expr SP* THEN SP* expr SP* ELSE SP* expr       # e_conditional
    | LET SP* variable SP* EQ SP* expr SP* IN SP* expr      # e_let
    | CASE SP* expr SP* 
        CASE_OF SP* NIL SP* CASE_YIELD SP* expr SP*
        CASE_OR SP* IDENTIFIER CONS IDENTIFIER SP* CASE_YIELD SP* expr
                                                            # e_case

    | OPEN_PAR SP* expr SP* CLOSE_PAR                       # e_group
    ;

variable : IDENTIFIER;

abstraction : ABS variable SP* OF SP* type SP* DOT SP* expr;

literal 
    : INT                                           # l_int
    | TRUE                                          # l_true 
    | FALSE                                         # l_false
    | OPEN_BRACE 
        SP* expr SP* (COMMA SP* expr SP*)* 
      CLOSE_BRACE                                   # l_tuple
    | NIL SP* OPEN_PAR SP* type SP* CLOSE_PAR       # l_nil
    ;

type 
    : IDENTIFIER                                    # t_using
    | T_BOOL                                        # t_bool
    | T_INT                                         # t_int 
    | <assoc=right> type SP* T_ARROW SP* type       # t_arrow
    | type SP* MUL SP* type                         # t_tuple
    | OPEN_MID SP* type SP* CLOSE_MID               # t_list
    | OPEN_PAR SP* type SP* CLOSE_PAR               # t_group
    ;

// LEXER Part: 

INT : ('0') | ('1'..'9')('0'..'9')*;

TRUE : 'true';
FALSE : 'false';
NIL : 'nil';

ABS : '\\';
DOT : '.';
CONS : '::';
OF : ':';
IF : 'if';
THEN : 'then';
ELSE : 'else';
LET : 'let';
IN : 'in';
USING : 'using';
CASE : 'case';
CASE_OF : 'of';
CASE_YIELD : '=>';
CASE_OR : '|';

ADD : '+';
SUB : '-';
MUL : '*';
DIV : '/';
MOD : '%';
LT  : '<';
LTE : '<=';
GT  : '>';
GTE : '>=';
EQ  : '=';
OP_AND : 'and';
OP_OR : 'or';
OP_NOT : 'not';
MIN : '~';

T_BOOL : 'Bool';
T_INT : 'Int';
T_ARROW : '->';

OPEN_PAR : '(';
CLOSE_PAR : ')';

OPEN_MID : '[';
CLOSE_MID : ']';

OPEN_BRACE : '{';
CLOSE_BRACE : '}';
COMMA : ',';

IDENTIFIER : (('a'..'z')|('A'..'Z')|'_') (('a'..'z')|('A'..'Z')|'_'|('0'..'9'))*;

SP : ' ';
WS : ('\t' | '\n' | '\r') -> channel(1);
