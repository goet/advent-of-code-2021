import { LifeSupport } from './life-support';
import { PowerVariables } from './power-variables';

export class DiagnosticsParser {

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

    findLifeSupportData(values: number[], bitLength: number): LifeSupport {
        const data = new LifeSupport();
        data.o2GenRating = this.findLifeSupportRating(values, bitLength, false);
        data.co2ScrubberRating = this.findLifeSupportRating(values, bitLength, true);
        return data;
    }

    findLifeSupportRating(values: number[], bitLength: number, co2: boolean): number {
        let buffer = [...values];
        for (let i = bitLength; i >= 0; i--) {
            const filterVar = co2 ? this.findLeastCommonAtIndex(values, i) : this.findMostCommonAtIndex(buffer, i);
            buffer = buffer.filter((value) => {
                return this.findBitAtIndex(value, i) === filterVar;
            });

            let test = '[ ';
            buffer.forEach(value => test += value.toString(2) + ' ');
            test += ']';
            console.log(`index: ${i} filter: ${filterVar}`);
            console.log(test);

            if (buffer.length === 1) {
                return buffer[0];
            }
        }

        console.error('ran out of bits');
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