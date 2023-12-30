const fs = require('fs');

function question__1() {
    fs.readFile('./script-1.txt', (err, data) => {
        const stringdata = data.toString();
        const splitdata = stringdata.split('');
        const answer = splitdata.reduce((acc, curr) => {
            if (curr === '(' ) {
                return acc += 1
            } else if (curr === ')' ) {
                return acc -= 1
            }
        }, 0)
        console.log('The answer is:', answer);
    })
}
question__1()