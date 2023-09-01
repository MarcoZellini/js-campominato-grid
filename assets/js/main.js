/* 
    L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    Ogni cella ha un numero progressivo, da 1 a 100.
    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

//Definisco gli elementi di cui ho bisogno
const fieldElement = document.querySelector('.field');
const row = 10;
const column = 10;

//Al click del bottone richiamo la funzione genereateField()
document.querySelector('button').addEventListener ('click', function () {
    fieldElement.innerHTML = '';
    generateField(fieldElement, row, column);
});
    
    
/**
 * ### generateField
 * > Function that creates a table of squares. If you click a square its background become lightblue.
 * @param {object} elementDOM Element where i am creating the field
 * @param {number} row Field's rows number
 * @param {number} column Field's columns number
 */
function generateField(elementDOM, row, column) {

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.append((i+1) * (j+1));
    
            cellElement.addEventListener('click', function () {
                this.classList.toggle('bg_lightblue');
                console.log('Hai cliccato la cella numero: ' + ((i+1) * (j+1)) );
            })
    
            elementDOM.append(cellElement);
        }
    }
}