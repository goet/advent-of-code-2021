import { readFileSync } from 'fs';
import { DayOne } from './day01/day-one';
import { DayTwo } from './day02/day-two';
import { DayThree } from './day03/day03';
import { DayFour } from './day04/day04';

// just uncomment whatever day you wanna run lol

// const dayOne = new DayOne();
// dayOne.parseData();
// dayOne.runA();
// dayOne.runB();

// const dayTwo = new DayTwo();
// dayTwo.parseData();
// dayTwo.run();

// const dayThree = new DayThree();
// dayThree.loadData(dayThree.data2Path);
// dayThree.run();

const dayFour = new DayFour();
dayFour.loadData('src/day04/data.txt');
dayFour.run();