import { Position } from './position';

export class Navigator {
    execute(command: string, position: Position): Position {
        const split = command.split(' ');
        const verb = split[0];
        const value = Number.parseInt(split[1]);

        if (verb === 'forward') {
            position.horizontal += value;
        }
        else
        {
            const direction = verb === 'down' ? 1 : -1;
            position.depth += direction * value;
        }

        return position;
    }
}