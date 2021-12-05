export class PowerVariables {
    gamma: number = 0;
    epsilon: number = 0;

    consumption(): number {
        return this.gamma * this.epsilon;
    }
}
