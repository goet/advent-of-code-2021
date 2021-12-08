import { Position } from '../day02/position';
import { BingoBoard } from './bingo-board';

export class BingoSolver {
    mark(number: number, bingoBoards: BingoBoard[]) {
        for (const board of bingoBoards) {
            board.mark(number);
        }
    }

    lookForBingo(bingoBoards: BingoBoard[]): BingoBoard | null {
        for (const board of bingoBoards) {
            const bingo = this.checkHorizontal(board)
                    || this.checkVertical(board)
                    || this.checkDiagonal(board)
                    || this.checkReverseDiagonal(board);
            
            if (bingo) {
                return board;
            }
        }
        return null;
    }

    private checkHorizontal(bingoBoard: BingoBoard): boolean {
        for (const line of bingoBoard.board) {
            let bingo = true;
            line.forEach(cell => {
                if (!cell.marked) {
                    bingo = false;
                }
            });

            if (bingo) {
                return true;
            }
        }

        return false;
    }

    private checkVertical(bingoBoard: BingoBoard): boolean {
        for (let x = 0; x < 5; x++) {
            const bingo = bingoBoard.board[x][0].marked
                && bingoBoard.board[x][1].marked
                && bingoBoard.board[x][2].marked
                && bingoBoard.board[x][3].marked
                && bingoBoard.board[x][4].marked

            if (bingo) {
                return true;
            }
        }

        return false;
    }

    private checkDiagonal(bingoBoard: BingoBoard): boolean {
        for (let i = 0; i < 5; i++) {
            if (!bingoBoard.board[i][i].marked) {
                return false;
            }
        }

        return true;
    }

    private checkReverseDiagonal(bingoBoard: BingoBoard): boolean {
        for (let i = 4; i >= 0; i--) {
            if (!bingoBoard.board[i][i].marked) {
                return false;
            }
        }

        return true;
    }
}