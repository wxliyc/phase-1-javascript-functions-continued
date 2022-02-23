function saturdayFun(fun='roller-skate'){
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(work='go to the office'){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(a='*'){
    const innerFunction = function(b='special'){
        return `You are ${a}${b}${a}!`
    }
    return innerFunction
}




