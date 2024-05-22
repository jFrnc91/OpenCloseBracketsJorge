const validate = (s) => {
    const stack = []
    let i = -1

    if(s === '') {
        return 0
    }
    for(const c of s.split('')) {
        if(c === ' ') {
            continue
        }
        if(c === '}') {
            if(stack[i] === '{') {
                stack.pop()
                i--
            }
            else {
                return 0
            }
        }
        else if(c === ')') {
            if(stack[i] === '(') {
                stack.pop()
                i--
            }
            else {
                return 0
            }
        }
        else if(c === ']') {
            if(stack[i] === '[') {
                stack.pop()
                i--
            }
            else {
                return 0
            }
        }
        else {
            stack.push(c)
            i++
        }
    }
    return 1
}

const brackets = (input) => {
    console.log("Input: " + input);
    return validate(input)
};

module.exports = {
    brackets,
};

console.log(brackets("{ [] ( ) }"));
console.log(brackets("{ [(] ) }"));
console.log(brackets("{ [ }"));
console.log(brackets("] }"));
console.log(brackets(""));