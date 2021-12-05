export class BitCounter {

    findMostCommonInData(values: number[], bitlength: number): number {
        let buffer = 0;

        for (let i = bitlength; i >= 0; i--) {
            let result = this.findMostCommonInDataAtIndex(values, i);
            result <<= i;
            buffer += result;
        }

        return buffer;
    }

    findMostCommonInDataAtIndex(values: number[], index: number): number {
        let buffer = 0;

        for (const value of values) {
            buffer += this.findBitAtIndex(value, index);
        }

        const breakingPoint = values.length / 2;
        return buffer > breakingPoint ? 1 : 0;
    }

    findBitAtIndex(value: number, index: number): number {
        const mask = 1 << index;
        let result = value & mask;
        result >>= index;
        return result;
    }
}