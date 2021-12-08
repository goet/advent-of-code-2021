import { BingoCell } from './bingo-cell';

export class BingoBoard {
    board: Array<Array<BingoCell>> = [];

    mark(number: number) {
        for (const line of this.board) {
            line.forEach(cell => {
                if (cell.number === number) {
                    cell.marked = true;
                }
            })
        }
    }

    score(lastCall: number): number {
        let sum = 0;
        for (const line of this.board) {
            line.forEach(cell => {
                if (!cell.marked) {
                    sum += cell.number;
                }
            })
        }
        console.log(sum);
        return sum * lastCall;
    }

    print() {
        for (const line of this.board) {
            let display = '';
            for (const cell of line) {
                display += cell.marked ? '(' : ' ';
                display += cell.number.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
                display += cell.marked ? ')' : ' ';
            }
            display += '\n';
            console.log(display);
        }
    }
}