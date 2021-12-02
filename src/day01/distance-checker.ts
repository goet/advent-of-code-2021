export class DistanceChecker {
    readonly decrease: string = '(decreased)';
    readonly increase: string = '(increased)';

    checkRelativeChanges(values: number[]): string[] {
        const result = ['N/A - no previous measurement'];

        for (let i = 1; i < values.length; i++) {
            result.push(this.findRelativeString(values[i], values[i-1]));
        }

        return result;
    }

    private findRelativeString(current: number, last: number): string {
        return current < last ? '(decreased)' : '(increased)';
    }
}