const sticks_amt = 100000000;

let sticks_cross = 0;
let sticks_dont_cross = 0;

//Board x starts at 0
const board_height = 3;
const first_line = 1;
const second_line = 2;
const line_distance = second_line - first_line;
const random_max_x = board_height - line_distance * 2;

let sticks = [];

function getRandomX() {
    return line_distance + Math.random() * random_max_x;
}

//generate random sticks
for (let i = 0; i < sticks_amt; i++) {
    const random_first_x = getRandomX();
    const random_rotation = Math.random() * 360;
    const random_second_x =
        random_first_x + Math.sin(random_rotation) * line_distance;
    sticks.push([random_first_x, random_second_x]);
}

console.log(sticks.length);

sticks.forEach(([x, x_2]) => {
    if (
        (x < first_line && x_2 > first_line) ||
        (x_2 < first_line && x > first_line)
    ) {
        //crosses the first line
        sticks_cross++;
    } else if (
        (x < second_line && x_2 > second_line) ||
        (x_2 < second_line && x > second_line)
    ) {
        //crosses the second line
        sticks_cross++;
    } else {
        sticks_dont_cross++;
    }
});

console.log(`Cross: ${sticks_cross}, No Cross: ${sticks_dont_cross}`);

console.log(sticks_cross / 2);
