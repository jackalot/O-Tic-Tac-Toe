const gameBoard = ((doc) => {
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
    const displayRows = () => {
        let td = doc.querySelectorAll("td");
        let body = document.querySelector("body");
        td.forEach(element => {
            element.textContent = rows[element];
           
        });
        body.append(td);
    }
    return { storeRows, displayRows };
})(document);
gameBoard.storeRows('x', 4);
gameBoard.displayRows();

const player = (() => {

    return;
})();

const game = (() => {
    return;
})