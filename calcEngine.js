/*
    Supported functions:
    1. addition, subtraction, multiplication, division, and division with remainder
    2. modulus, and percentage
    3. factorial, permutations, and combinations
    4. gcd, and lcm
    4. sin, cos, tan, and cot
 */
/*
    To add a new functionality:
    - If a functionality is a word and should not be treated as a function => add it to wordsThatAreNotFuncs
    - The functionality is not a function it should be added to orderOfOperations and getOperationType()
 */
/* mathematical functions */
const toDeg = (angle, type) => {
    if (type === 'deg') return angle;
    else if (type === 'rad') return angle * 180 / Math.PI;
    else if (type === 'grad') return angle * 200 / 180;
};
const factorial = (num) => {
    if (num === 1 || num === 0) return 1;
    return num * factorial(num - 1);
};
const permutations = (n, r) => {
    if (n < r) return 0;
    return factorial(n) / factorial(n - r);
};
const combinations = (n, r) => {
    return permutations(n, r) / factorial(r);
};
const sin = (angle, type = 'deg') => {
    angle = toDeg(angle, type);
    return Math.sin(angle);
};
const cos = (angle, type = 'deg') => {
    angle = toDeg(angle, type);
    return Math.cos(angle);
};
const tan = (angle, type = 'deg') => {
    angle = toDeg(angle, type);
    return Math.tan(angle);
};
const cot = (angle, type = 'deg') => {
    angle = toDeg(angle, type);
    return 1 / Math.tan(angle);
};
const gcd = (...args) => {
    const gcdFor2 = (a, b) => {
        if (a === 0)
            return b;
        if (b === 0)
            return a;

        if (a === b)
            return a;

        if (a > b)
            return gcd(a - b, b);
        return gcd(a, b - a);
    };

    let curGcd = args[0];

    for (let i = 1; i < args.length; i++)
    {
        curGcd = gcdFor2(curGcd, args[i]);
    }

    return curGcd;
};
const lcm = (...args) => {
    const lcmFor2 = (a, b) => {
        return (a * b) / gcd(a, b);
    };

    let curLcm = args[0];

    for (let i = 1; i < args.length; i++)
    {
        curLcm = lcmFor2(curLcm, args[i]);
    }

    return curLcm;
};
const convertLength = (unit, targetUnit, value) => {
    switch (unit)
    {
        case 'exameter':
            value *= 1000000000000000000;
            break;
        case 'petameter':
            value *= 1000000000000000;
            break;
        case 'terameter':
            value *= 1000000000000;
            break;
        case 'gigameter':
            value *= 1000000000;
            break;
        case 'megameter':
            value *= 1000000;
            break;
        case 'kilometer':
            value *= 1000;
            break;
        case 'hectometer':
            value *= 100;
            break;
        case 'decameter':
            value *= 10;
            break;
        case 'meter':
            value *= 1;
            break;
        case 'decimeter':
            value *= 0.1;
            break;
        case 'centimeter':
            value *= 0.01;
            break;
        case 'millimeter':
            value *= 0.001;
            break;
        case 'micrometer':
        case 'micron':
            value *= 0.000001;
            break;
        case 'nanometer':
            value *= 0.000000001;
            break;
        case 'picometer':
            value *= 0.000000000001;
            break;
        case 'femtometer':
            value *= 0.000000000000001;
            break;
        case 'attometer':
            value *= 0.000000000000000001;
            break;
        case 'mile':
            value *= 1609.344;
            break;
        case 'kiloYard':
            value *= 914.4;
            break;
        case 'yard':
            value *= 0.9144;
            break;
        case 'foot':
            value *= 0.3048;
            break;
        case 'inch':
            value *= 0.0254;
            break;
        case 'lightYear':
            value *= 9460730472580044;
            break;
        case 'megaparsec':
            value *= 3.085677581 * Math.pow(10, 22);
            break;
        case 'kiloparsec':
            value *= 30856775812799586000;
            break;
        case 'parsec':
            value *= 30856775812799588;
            break;
        case 'astronomicalUnit':
            value *= 149597870691;
            break;
        case 'league':
            value *= 4828.032;
            break;
        case 'nauticalLeagueUk':
            value *= 5559.552;
            break;
        case 'nauticalLeagueInt':
            value *= 5556;
            break;
        case 'nauticalMileUk':
            value *= 1853.184;
            break;
        case 'nauticalMileInt':
            value *= 1852;
            break;
        case 'mileStatute':
            value *= 1609.3472187;
            break;
        case 'mileRoman':
            value *= 1479.804;
            break;
        case 'furlong':
            value *= 201.168;
            break;
        case 'furlongUs':
            value *= 201.16840234;
            break;
    }
    switch (targetUnit)
    {
        case 'exameter':
            value /= 1000000000000000000;
            break;
        case 'petameter':
            value /= 1000000000000000;
            break;
        case 'terameter':
            value /= 1000000000000;
            break;
        case 'gigameter':
            value /= 1000000000;
            break;
        case 'megameter':
            value /= 1000000;
            break;
        case 'kilometer':
            value /= 1000;
            break;
        case 'hectometer':
            value /= 100;
            break;
        case 'decameter':
            value /= 10;
            break;
        case 'meter':
            value /= 1;
            break;
        case 'decimeter':
            value /= 0.1;
            break;
        case 'centimeter':
            value /= 0.01;
            break;
        case 'millimeter':
            value /= 0.001;
            break;
        case 'micrometer':
        case 'micron':
            value /= 0.000001;
            break;
        case 'nanometer':
            value /= 0.000000001;
            break;
        case 'picometer':
            value /= 0.000000000001;
            break;
        case 'femtometer':
            value /= 0.000000000000001;
            break;
        case 'attometer':
            value /= 0.000000000000000001;
            break;
        case 'mile':
            value /= 1609.344;
            break;
        case 'kiloYard':
            value /= 914.4;
            break;
        case 'yard':
            value /= 0.9144;
            break;
        case 'foot':
            value /= 0.3048;
            break;
        case 'inch':
            value /= 0.0254;
            break;
        case 'lightYear':
            value /= 9460730472580044;
            break;
        case 'megaparsec':
            value /= 3.085677581 * Math.pow(10, 22);
            break;
        case 'kiloparsec':
            value /= 30856775812799586000;
            break;
        case 'parsec':
            value /= 30856775812799588;
            break;
        case 'astronomicalUnit':
            value /= 149597870691;
            break;
        case 'league':
            value /= 4828.032;
            break;
        case 'nauticalLeagueUk':
            value /= 5559.552;
            break;
        case 'nauticalLeagueInt':
            value /= 5556;
            break;
        case 'nauticalMileUk':
            value /= 1853.184;
            break;
        case 'nauticalMileInt':
            value /= 1852;
            break;
        case 'mileStatute':
            value /= 1609.3472187;
            break;
        case 'mileRoman':
            value /= 1479.804;
            break;
        case 'furlong':
            value /= 201.168;
            break;
        case 'furlongUs':
            value /= 201.16840234;
            break;
    }

    return value;
};
const convert = (type, unit, targetUnit, value) => {
    switch (type)
    {
        case 'length':
            return convertLength(unit, targetUnit, value);
        case 'area':
            break;
        case 'volume':
            break;
        case 'time':
            break;
        case 'pressure':
            break;
        case 'weight':
            break;
        case 'force':
            break;
        case 'torque':
            break;
        case 'speed':
            break;
        case 'acceleration':
            break;
        case 'angularSpeed':
            break;
        case 'flowRate':
            break;
        case 'frequency':
            break;
        case 'density':
            break;
        case 'dynamicViscosity':
            break;
        case 'kinematicViscosity':
            break;
        case 'data':
            break;
        case 'dataTransfer':
            break;
        case 'energy':
            break;
        case 'power':
            break;
        case 'temperature':
            break;
        case 'electricCharge':
            break;
        case 'electricCurrent':
            break;
        case 'electricResistance':
            break;
        case 'electricalPotential':
            break;
        case 'electricCapacitance':
            break;
        case 'luminance':
            break;
        case 'illuminance':
            break;
        case 'radiation':
            break;
        case 'radioactivity':
            break;
        case 'mageticField':
            break;
        case 'angle':
            break;
        case 'typography':
            break;
    }
};
/* miscellaneous functions */
const isLetter = (char) => {
    const regex = /[a-z]|[A-Z]/;
    return regex.test(char) && char.length === 1;
};
const isDigit = (char) => {
    const regex = /\d|[.]/;
    return regex.test(char) && char.length === 1;
}; // checks whether a char is a number or a decimal point
const isNumber = (str) => {
    const regex = /^(\+?|-?)\d+(?:[.]\d+)?$/;
    return regex.test(str);
}; // checks whether a string represents a number
const isPositiveOrNegativeSign = (str, index) => {
    if (str[index] === '-' || str[index] === '+')
    {
        if (index === 0 || !isDigit(str[index - 1]) || str[index - 1] === ')')
        {
            return true;
        }
    }
    return false;
}; // checks whether a plus or minus sign should be considered an operation or a positive/negative sign
const getLastParenthesisPairStr = (str) => {
    // 1. get last parenthesis pair
    const lastOpeningParenthesisIndex = str.lastIndexOf('(');
    let nextClosingParenthesisIndex;

    if (lastOpeningParenthesisIndex === -1)
    {
        return {
            func: '',
            operationString: str,
            start: -1,
            end: -1
        };
    }

    for (let i = lastOpeningParenthesisIndex; i < str.length; i++)
    {
        if (str[i] === ')')
        {
            nextClosingParenthesisIndex = i;
            break;
        }
    }

    const operationString = str.slice(lastOpeningParenthesisIndex + 1, nextClosingParenthesisIndex);

    // 2. check whether the pair belongs to a function
    /*
        by checking whether the char before '(' is a letter or not, and the continuing to get all the chars of the word.
        Then check whether the word is a function or not. The word might be an operations such as 'mod'.
     */
    let func = '';
    let funcIndex = -1;
    for (let i = lastOpeningParenthesisIndex - 1; i >= 0; i--)
    {
        if (!isLetter(str[i]))
            break;

        func = str[i] + func;
        funcIndex = i;
    }

    let wordsThatAreNotFuncs = ['P', 'C', 'mod'];

    if (func === '' || wordsThatAreNotFuncs.includes(func))
        return {
            func,
            operationString,
            start: lastOpeningParenthesisIndex,
            end: nextClosingParenthesisIndex
        };
    else
        return {
            func,
            operationString: func + '(' + operationString + ')',
            start: funcIndex,
            end: nextClosingParenthesisIndex
        };
};
const firstOfOperationsListInString = (str, list) => {
    for (let i = 0; i < str.length; i++)
    {
        for (let j = 0; j < list.length; j++)
        {
            if (isPositiveOrNegativeSign(str, i)) // exclude positive and negative signs from operations
            {
                break;
            }
            // this for loop accounts for operations that are longer than one character such as "mod"
            let operationFound = true;
            for (let k = 0; k < list[j].length; k++)
            {
                if (str[i + k] !== list[j][k])
                {
                    operationFound = false;
                    break;
                }
            }
            if (operationFound)
            {
                return {
                    operation: list[j],
                    index: i
                };
            }
        }
    }
    return {
        operation: '',
        index: -1
    };
};
/*
    Operation types:
    1 (operations with two operands): 5+7, 2^5, 10mod3
    2 (operations with one operand): 5!, 29%
    or
    3 (functions): sin(30), ln(14), log(2, 100), integral(-4, 5, x^2), convert(length, 2, miles, kilometers)
 */
const getOperationType = (operation) => {
    const type1Operations = ['+', '-', '*', '/', 'r', '^', 'mod', 'P', 'C'];
    const type2Operations = ['!', '%'];

    if (type1Operations.includes(operation)) return 1;
    else if (type2Operations.includes(operation)) return 2;
    else return -1;
};
const solveOperationsWithTwoOperands = (str, operation, operationIndex) => {
    let firstOperand = '';
    let firstOperandBeginningIndex = -1;
    let secondOperand = '';
    let secondOperandEndIndex = -1;

    // get first operand
    for (let i = operationIndex - 1; i >= 0; i--)
    {
        if (isDigit(str[i]) || isPositiveOrNegativeSign(str, i))
        {
            firstOperand = str[i] + firstOperand;
            firstOperandBeginningIndex = i;
        }
        else
        {
            break;
        }
    }
    // get second operand
    for (let i = operationIndex + operation.length; i < str.length; i++)
    {
        if (isDigit(str[i]) || (str[i] === '-' && i === operationIndex + 1))
        {
            secondOperand = secondOperand + str[i];
            secondOperandEndIndex = i;
        }
        else
        {
            break;
        }
    }

    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);
    let result = 0;

    // perform operation
    switch (operation)
    {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case 'r':
            result = Math.floor(firstOperand / secondOperand);
            break;
        case '^':
            result = firstOperand ** secondOperand;
            break;
        case 'mod':
            result = firstOperand % secondOperand;
            break;
        case 'P':
            result = permutations(firstOperand, secondOperand);
            break;
        case 'C':
            result = combinations(firstOperand, secondOperand);
            break;
    }

    // replace operation with result
    return str.slice(0, firstOperandBeginningIndex) + result + str.slice(secondOperandEndIndex + 1, str.length);
};
const solveOperationsWithOneOperand = (str, operation, operationIndex) => {
    let operand = '';
    let operandBeginningIndex = -1;

    // get operand
    for (let i = operationIndex - 1; i >= 0; i--)
    {
        if (isDigit(str[i]) || isPositiveOrNegativeSign(str, i))
        {
            operand = str[i] + operand;
            operandBeginningIndex = i;
        }
        else
        {
            break;
        }
    }

    operand = Number(operand);
    let result = 0;

    // perform operation
    switch (operation)
    {
        case '!':
            result = factorial(operand);
            break;
        case '%':
            result = operand / 100;
            break;
    }

    // replace operation with result
    return str.slice(0, operandBeginningIndex) + result + str.slice(operationIndex + 1, str.length);
};
const solveFunc = (str, func) => {
    let parameters = [];
    let parameter = '';

    for (let i = func.length + 1; i < str.length; i++)
    {
        if (str [i] === ',' || str[i] === ')')
        {
            parameters.push(parameter);
            parameter = '';
            continue;
        }
        parameter += str[i];
    }

    switch (func)
    {
        case 'gcd':
            return gcd(...parameters.map(element => Number(element)));
        case 'lcm':
            return lcm(...parameters.map(element => Number(element)));
        case 'sin':
            return sin(Number(parameters[0]), parameters[1]);
        case 'cos':
            return sin(Number(parameters[0]), parameters[1]);
        case 'tan':
            return sin(Number(parameters[0]), parameters[1]);
        case 'cot':
            return sin(Number(parameters[0]), parameters[1]);
    }
};
const evaluate = (str) => {
    while (!isNumber(str))
    {
        let operationStringObject = getLastParenthesisPairStr(str);
        let {func, operationString, start, end} = operationStringObject;

        if (func !== '')
        {
            operationString = solveFunc(operationString, func);
        }
        else
        {
            let orderOfOperations = [
                ['!', '%'],
                ['^'],
                ['P', 'C'],
                ['*', '/', 'r', 'mod'],
                ['+', '-']
            ];
            for (let i = 0; i < orderOfOperations.length; i++)
            {
                if (isNumber(operationString))
                    break;

                const operationsArray = orderOfOperations[i];
                let curOperation = true;

                while (curOperation.index !== -1)
                {
                    curOperation = firstOfOperationsListInString(operationString, operationsArray);

                    if (curOperation.index !== -1)
                    {
                        const operationType = getOperationType(curOperation.operation);
                        switch (operationType)
                        {
                            case 1:
                                operationString = solveOperationsWithTwoOperands(operationString, curOperation.operation, curOperation.index);
                                break;
                            case 2:
                                operationString = solveOperationsWithOneOperand(operationString, curOperation.operation, curOperation.index);
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
        }

        if (start === -1)
        {
            str = operationString;
            break;
        }
        str = str.slice(0, start) + operationString + str.slice(end + 1, str.length);
    }

    return str;
};

console.log(evaluate('gcd(12,6)'));