export class Position {
    horizontal: number = 0;
    depth: number = 0;

    multiply(): number {
        return this.horizontal * this.depth;
    }
}