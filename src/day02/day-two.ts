import { readFileSync } from 'fs';
import { Navigator } from './navigator';
import { Position } from './position';

export class DayTwo {
    private readonly navigator: Navigator = new Navigator();
    private readonly path = 'src/day02/data.txt';

    private commands: string[] = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2' ];

    run() {
        let position = new Position();

        for (const command of  this.commands) {
            position = this.navigator.execute(command, position);
        }

        console.log(`multiplied: ${position.multiply()}`);
    }

    parseData() {
        const input = readFileSync(this.path).toString();
        
        this.commands = new Array<string>();
        for (const command of input.split(/\r?\n/)) {
            this.commands.push(command);
        }
    }
}