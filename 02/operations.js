module.exports = class Operations {
    add(a,b){
        return a+b;

    }
    divide(a,b){
        if(b===0){
            throw new Error("Divide by zero");
        }
        return a/b;
    }
    multiply(a,b){
        return a* b;
    }
    modulo(a,b){
        if(b===0){
            throw new Error("Divide by zero")
        }
        return a%2;
    }
    minus(a,b){
        return a-b;
    }
}