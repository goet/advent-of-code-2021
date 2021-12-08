import { readFileSync } from 'fs';
import { BingoBoard } from './bingo-board';
import { BingoCell } from './bingo-cell';
import { BingoSolver } from './bingo-solver';

export class DayFour {
    private readonly bingoSolver: BingoSolver = new BingoSolver();
    private drawnNumbers: number[];
    private bingoBoards: BingoBoard[];

    run() {
        console.log("===START===");
        for (const number of this.drawnNumbers) {
            console.log(number);
            this.bingoSolver.mark(number, this.bingoBoards);
            const bingo = this.bingoSolver.lookForBingo(this.bingoBoards);

            if (bingo) {
                console.log("===WINNER===");
                bingo.print();
                console.log(`score: ${bingo.score(number)}`);
                return;
            }
        }
    }

    loadData(path: string) {
        const input = readFileSync(path).toString();
        const lines = input.split(/\r?\n/);

        this.drawnNumbers = this.parseDraw(lines[0]);
        this.bingoBoards = new Array<BingoBoard>();

        for (let i = 2; i < lines.length; i += 6) {
            if (lines[i] !== '') {
                const boardInput = [lines[i], lines[i+1], lines[i+2], lines[i+3], lines[i+4]];

                const bingoBoard = this.parseBingoBoard(boardInput);
                this.bingoBoards.push(bingoBoard);

                bingoBoard.print();
                console.log('\n');
            }
        }
    }

    private parseDraw(input: string): number[] {
        let result = new Array<number>();
        const numbers = input.split(',');
        for (const number of numbers) {
            result.push(parseInt(number));
        }
        return result;
    }

    private parseBingoBoard(input: string[]): BingoBoard {
        let result = new BingoBoard();
        for (const line of input) {
            const bingoLine: BingoCell[] = [];

            for (const sNumber of line.split(' ')) {
                if (sNumber !== '') {
                    const bingoCell = {
                        number: parseInt(sNumber),
                        marked: false
                    };
                    bingoLine.push(bingoCell);
                }
            }

            result.board.push(bingoLine);
        }
        return result;
    }

    private isCorrupted(input: string[]): boolean {
        input.forEach(value => {
            if (!value) {
                return true;
            }
        });
        return false;
    }
}