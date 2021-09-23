const gameBoard = ((doc) => {
    let rows = ['X', 'O', 'O',
                'O', 'X', 'O',
                'O', 'O', 'X'];

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
    const getRows = () => {
        return rows;
    }
    const isBoardFull = () => {
        for(i = 0; i < rows.length; i++)
        {
            if(rows[i] === "-")
            {
                return true;
            }
        }
        return false;
    }
    return { storeRows, getRows, isBoardFull };
})(document);
const player = (() => {
    let name = "";
    let letter = "";
    const setName = (input) => {
        name = input;
    }
    const getName = () => name;
    const setLetter = (input) => {
        letter = input;
    }
    const getLetter = () => letter;
    return { setName, getName, setLetter, getLetter };
})();

const game = (() => {
    /*
    manage the game here with code like making the players swap
    */
   //check these three indexes that the player has won
   const checkIfWon = (first, second, third) => {
       const rows = gameBoard.getRows();
       const full = gameBoard.isBoardFull()
        if(rows[first] === 'x' && rows[second] === 'x' &&  rows[third] === 'x')
        {
          return  console.log("x wins");
        }
        else if(rows[first] === 'o' && rows[second] === 'o' &&  rows[third] === 'o')
        {
            return console.log("O wins");
        }
        else if(full === true)
        {
           return console.log("its a tie!");
        }
        
   }
    return { checkIfWon };
})();
game.checkIfWon(0, 4, 8); //testing
//get the table and make it clickable
const tableD = document.querySelectorAll("td");
tableD.forEach((td) => {
    td.addEventListener('click', () => {
        gameBoard.storeRows('x', td.id);
    })
})