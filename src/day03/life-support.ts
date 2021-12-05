export class LifeSupport {
    o2GenRating: number;
    co2ScrubberRating: number;

    rating(): number {
        return this.o2GenRating * this.co2ScrubberRating;
    }
}