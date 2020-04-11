grammar TypedLambda;

program : (using)* expr;

using 
    : OPEN_MID USING IDENTIFIER EQ type CLOSE_MID;

expr 
    : variable                          # e_variable
    | literal                           # e_literal

    | MIN expr                          # e_uminus
    | OP_NOT expr                       # e_not
    | expr DOT INT                      # e_tuple_proj
    | expr op=(MUL|DIV|MOD) expr        # e_muldiv
    | expr op=(ADD|SUB) expr            # e_addsub
    | expr op=(LT|LTE|GT|GTE|EQ) expr   # e_compare
    | expr op=(OP_AND|OP_OR) expr       # e_logic
    | <assoc=right> expr CONS expr      # e_cons

    | abstraction                       # e_abstraction
    | expr expr                         # e_application

    | IF expr THEN expr ELSE expr       # e_conditional
    | LET variable EQ expr IN expr      # e_let
    | CASE expr CASE_OF NIL CASE_YIELD expr
        CASE_OR IDENTIFIER CONS IDENTIFIER CASE_YIELD expr
                                        # e_case

    | OPEN_PAR expr CLOSE_PAR           # e_group
    ;

variable : IDENTIFIER;

abstraction : ABS variable OF type DOT expr;

literal 
    : INT                                           # l_int
    | TRUE                                          # l_true 
    | FALSE                                         # l_false
    | OPEN_BRACE expr (COMMA expr)* CLOSE_BRACE     # l_tuple
    | NIL OPEN_PAR type CLOSE_PAR                   # l_nil
    ;

type 
    : IDENTIFIER                            # t_using
    | T_BOOL                                # t_bool
    | T_INT                                 # t_int 
    | <assoc=right> type T_ARROW type       # t_arrow
    | type MUL type                         # t_tuple
    | OPEN_MID type CLOSE_MID               # t_list
    | OPEN_PAR type CLOSE_PAR               # t_group
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


WS : (' ' | '\t' | '\n' | '\r') -> channel(1);
