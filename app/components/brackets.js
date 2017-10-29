import R from 'ramda'

const pipe = R.pipe
const curry = R.curry

const Maybe = function(x) {
    this.__value = x
}

Maybe.of = function(x) {
    return new Maybe(x)
}
Maybe.prototype.isNothing = function() {
    return (this.__value === null || this.__value === undefined)
}

Maybe.prototype.is = function(x) {
    return this.__value === x
}

Maybe.prototype.map = function(f) {
    return this.isNothing()? Maybe.of(null) : Maybe.of(f(this.__value))
}

const map = curry(function(f, any_functor_at_all) {
  return any_functor_at_all.map(f);
});

const isEven = (a) => a%2 === 0

const length = (braces) => {
    return braces.map(function(v){
        return v.length
    })    
}


export const removeAdjacentBrackets = (braces) => {
    const regex = /{}|\[\]|\(\)/g
    const bracesLen = length(braces)

    if(braces.is(true)) {
        return Maybe.of(true)
    } else if(bracesLen.isNothing() || braces.isNothing()){
            return Maybe.of(null)
    }
     
    return removeAdjacentBrackets(
            braces
            .map((v)=>{
                let reduced = v.replace(regex,'') 
                return reduced === '' ? true : reduced === v ? null : reduced
            })
    )
}

const isLengthEven = pipe(length, map(isEven))

const checkBraces = (o) => {
    return isLengthEven(o)?removeAdjacentBrackets(o):Maybe.of(null)
}

export const initiate = () => {
    let v = checkBraces(Maybe.of("{{{{}}}}[{(((())))}]"))
    console.log('v', v)
    return v
}

