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

    findMostCommonAtIndex(values: number[], index: number): number {
        const buffer = this.createBuffer(values, index);
        const breakingPoint = values.length / 2;
        return buffer > breakingPoint ? 1 : 0;
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