import { PowerVariables } from './power-variables';

export class BitCounter {

    calculatePowerVars(values: number[], bitlength: number): PowerVariables {
        const vars = new PowerVariables();

        for (let i = bitlength; i >= 0; i--) {
            let gammaBit = this.findMostCommonAtIndex(values, i);
            gammaBit <<= i;

            let epsilonBit = this.findLeastCommonAtIndex(values, i);
            epsilonBit <<= i;

            vars.gamma += gammaBit;
            vars.epsilon += epsilonBit;
        }

        return vars;
    }

    findO2GenRating(values: number[], bitLength: number): number {
        let buffer = [...values];
        for (let i = bitLength; i >= 0; i--) {
            if (buffer.length === 1) {
                return buffer[0];
            }

            const mostCommon = this.findMostCommonAtIndex(buffer, i);
            buffer = buffer.filter((value) => {
                return this.findBitAtIndex(value, i) === mostCommon;
            });
            console.log(`most common: ${mostCommon}`)
            let test = '[';
            buffer.forEach(value => {
                test += value.toString(2) + ' ';
            });
            test += ']';
            console.log(test);
        }

        return buffer[0];
    }

    findMostCommonAtIndex(values: number[], index: number): number {
        const buffer = this.createBuffer(values, index);
        const breakingPoint = values.length / 2;
        return buffer >= breakingPoint ? 1 : 0;
    }

    findLeastCommonAtIndex(values: number[], index: number): number {
        const buffer = this.createBuffer(values, index);
        const breakingPoint = values.length / 2;
        return buffer < breakingPoint ? 1 : 0;
    }

    createBuffer(values: number[], index: number): number {
        let buffer = 0;

        for (const value of values) {
            buffer += this.findBitAtIndex(value, index);
        }

        return buffer;
    }

    findBitAtIndex(value: number, index: number): number {
        const mask = 1 << index;
        let result = value & mask;
        result >>= index;
        return result;
    }
}