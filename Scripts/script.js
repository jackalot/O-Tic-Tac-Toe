const gameBoard = ((doc) => {
    let rows = ['-', '-', '-',
                '-', '-', '-',
                '-', '-', '-'];

    const storeRows = (input, id) => {
        if(input === 'o' || input === 'x')
        {
            index = id.slice(2, id.length); // get the id and convert to number
            //console.log(index);
            let i = parseInt(index);
            //console.log(i)
            //console.log("initial: " + rows[i]);
            if(rows[i] != 'o' && rows[i] != 'x')
            {
            rows[i] = input;
                console.log("final: " + rows[i]);
            displayRows();
            }
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
    return { storeRows };
})(document);
const tableD = document.querySelectorAll("td");
//console.log(tabled);
tableD.forEach((td) => {
    td.addEventListener('click', () => {
        gameBoard.storeRows('x', td.id);
    })
})
const player = (() => {
    let name = "";
    return;
})();

const game = (() => {
    return;
})