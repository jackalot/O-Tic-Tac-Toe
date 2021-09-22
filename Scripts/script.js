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
        let body = document.querySelector("body");
        for(i = 0; i < rows.length; i++)
        {
            let td = doc.querySelector("#r-" + i);
            td.textContent = rows[i];
            switch(i)
            {
                case i < 3:
                    let tr = doc.querySelector("#row1");
                    tr.append(td);
                    break;
                case i < 6:
                     tr = doc.querySelector("#row2");
                    tr.append(td);
                    break;
                case i < 9:
                     tr = doc.querySelector("#row3");
                    tr.append(td);
                    break;
            }
        }
    }
    return { storeRows, displayRows };
})(document);
gameBoard.storeRows('x', 6);
gameBoard.storeRows('x', 5);
gameBoard.storeRows('o', 2);
gameBoard.storeRows('o', 4);
gameBoard.storeRows('x', 1);
gameBoard.storeRows('x', 3);
gameBoard.storeRows('o', 7);
gameBoard.storeRows('o', 8);
gameBoard.storeRows('x', 0);
gameBoard.displayRows();

const player = (() => {

    return;
})();

const game = (() => {
    return;
})