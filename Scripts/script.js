const gameBoard = (() => {
    let rows = ['', '', '',
                '', '', '',
                '', '', ''];

    const storeRows = (input, index) => {
        if(input === 'o' || input === 'x')
        {
            console.log("initial: " + rows[index]);
            rows[index] = input;
            console.log("final: " + rows[index]);
        }
        else
        {
            return console.error('cant store something thats not x or o');
        }
    } 
    return { storeRows };
})();

console.log(gameBoard.storeRows('x', 1))
const player = (() => {

    return;
})();

const game = (() => {
    return;
})