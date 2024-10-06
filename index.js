const STICKS_AMT = 10_000_000;

const BOARD_HEIGHT = 3;
const FIRST_LINE = 1;
const SECOND_LINE = 2;
const LINE_DISTANCE = SECOND_LINE - FIRST_LINE;
const RANDOM_MAX_X = BOARD_HEIGHT - LINE_DISTANCE * 2;

let sticks_cross = 0;

function getRandomX() {
    return LINE_DISTANCE + Math.random() * RANDOM_MAX_X;
}

for (let i = 0; i < STICKS_AMT; i++) {
    const random_first_x = getRandomX();
    const random_rotation = Math.random() * 360;
    const random_second_x =
        random_first_x +
        Math.sin((random_rotation * Math.PI) / 180) * LINE_DISTANCE;

    if (
        (random_first_x < FIRST_LINE && random_second_x > FIRST_LINE) ||
        (random_second_x < FIRST_LINE && random_first_x > FIRST_LINE) ||
        (random_first_x < SECOND_LINE && random_second_x > SECOND_LINE) ||
        (random_second_x < SECOND_LINE && random_first_x > SECOND_LINE)
    ) {
        sticks_cross++;
    }
}

const pi_approximation =
    (2 * LINE_DISTANCE * STICKS_AMT) / (sticks_cross * LINE_DISTANCE);

console.log(`Total sticks: ${STICKS_AMT}`);
console.log(`Sticks crossing: ${sticks_cross}`);
console.log(`Approximation of pi: ${pi_approximation}`);
console.log(`Actual pi: ${Math.PI}`);
console.log(`Difference: ${Math.abs(pi_approximation - Math.PI)}`);
