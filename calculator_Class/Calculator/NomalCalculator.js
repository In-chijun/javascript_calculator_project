const { Calculator } = require('./Calculator.js');

class Calculation {
    constructor(){    }
    operator = null;
    value1  = null;
    value2 = null;
    calculate();
}


class makeCalculation {
    constructor(){}
    value1 = null;
    value2 = null;
    setVal1(number);
    setVal2(number);
    build();
}

class NormalCalculator extends Calculator {
    introduce();
    calculate();
    print();
}



module.exports = { NormalCalculator };