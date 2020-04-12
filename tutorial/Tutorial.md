# Simply Typed Lambda Calculus

### A small example

```
let square = \x:Int.x * x in
  let a = 1 in
    let b = 2 in
      (a + b) * (square a)
```

This is a simple program in which a function is defined, and some expressions are bound to names, and finally did some arithmetic calculating and function applying.



### Basic concepts

The simply typed lambda has 3 basic grammars:

- A variable `x`
- An abstraction `\x:T.e`
  - can be regarded as a function definition with parameter `x` of type `T`
- Function application `e1 e2`
  - where `e1` and `e2` are both lambda expressions, and `e1`should be a function.
  - use `e2` to substitute the parameter of function `e1`
  - there should be at least a space between two expressions.

For example:

```
(\x:Int. x + 1) 5
```

This expression first defined a function and then applied it with argument `5`.



### Integers and booleans

The language support integer and boolean literals.

Integers should be expressed in decimal: `0`, `15`, `2983`, etc.

Booleans contains two constants: `true` and `false`.



### Operations on integers and booleans

- unary minus: `~e`, get the negation of a integer.
- logical not: `not e`
- logical and, or: `e1 and e2`, `e1 or e2`
- integer comparison: `e1 < e2`, `e1 > e2`, `e1 <= e2`, `e1 >= e2`
- integer arithmetic:  `e1 + e2`, `e1 - e2`, `e1 * e2`, `e1 / e2`, `e1 % e2`



### Tuples

Tuples can pack different values and access as an entity.

You can define tuples with comma separated expressions enclosed in a pair of curly braces.

For example: `{1, true, \x:Int.x+1, {false, 2}}`.

To access elements of a tuple, the dot operator is used: `{true, 1, 2}.2`.

The index begins from 1. And only integer literals are supported since the typing requirements.



### Lists

List is a series of expressions with same type.

The empty list is defined with `nil(T)` where the type of list elements `T` should be explicitly specified.

You can concatenate an expression with a list using `::` operator, for example:

`1::2::3::nil(Int)`, `true::false::nil(Bool)`

Remember that `::` is right associated.

To access a list, you may use the `case` expression whose grammar is:

```
case e of nil => e1
       | x::y => e2
```

If `e` is an empty list, `e1` wil be evaluated. Otherwise, the head of `e` is bound to `x`, the tail is bound to `y` and `e2` is evaluated.



### Types

The typing system contains:

- `Int`: Integer type.
- `Bool`: Boolean type.
- `T1 -> T2`: Type of a function whose parameter is of `T1` and returns a value of `T2`.
- `[T]`: Type of lists of `T`
- `T1 * T2 * T3 ...`: Tuple Type.

