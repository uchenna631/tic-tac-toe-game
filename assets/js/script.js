// Let DOM content load before the JavaScript

/**
 * Main navigation for the Single Page App thingy
 */
 document.addEventListener('DOMContentLoaded', function() {
    let menuItems = document.getElementsByClassName('menu-item');
    for (let menuItem of menuItems) {
        menuItem.addEventListener('click', function() {
            if (this.textContent =='Play') {
                displayGame()
            }
            else if (this.textContent =='Instruction') {
                
                alert('You clicked Instructions button');
            }

            else if ( this.textContent == 'Feedback') {
                alert('You clicked Feedback button');
            }
            else {
                alert('Unknown command')
            }
        })
    }
    // Default page on DOMContentLoaded
    displayGame();

 })

 // Display functions used by main navigation

/**
 * Display game section
 */
 
function displayGame() {
    // Unless you find the state, initialize with empty values
    let scoreState;
    if (!scoreState) {
        scoreState = {
            player : 0,
            computer : 0
        };
    } else {
        scoreState = getScoreState();
    }

    let gameState;
    if (!gameState); {
        gameState = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
    }

    let settingsState;
    if (!settingsState) {
        settingsState = true;
    }

    // Create HTML blocks and compose the HTML page.

    let score = createScoreBoard(scoreState);
    let game = createGameBoard(gameState);
    let settings = createSettings(settingsState);

    document.getElementsByTagName("section")[0].innerHTML = `
    ${score}
    ${game}
    ${settings}
    `
    // Start the game here
    startGame();

    // Enable the restart game button.

    document.getElementById("restart-game").addEventListener("click", displayGame)
}

/**
 * function to create HTML for the score display 
 * @param {number} scoreState 
 * @returns HTML string literal
 */
function createScoreBoard(scoreState) {
    return `
    <div id="score-board">
        <div id="player">
            <h2 id="player-label" class="label">Player</h2>
            <span id="player-score" class="score">${scoreState.player}</span>
        </div>
        <div id="computer">
            <h2 id="computer-label" class="label">Computer</h2>
            <span id="computer-score" class="score">${scoreState.computer}</span>
        </div>
    </div>
`
}

/**
 * 
 * @param {Marker X or O} gameState 
 * @returns a 3 by 3 table of X and O marker
 */
function createGameBoard(gameState) {
    
    let gameBoard = `
    <div id="game-board">
        <table>
            <tbody>
             `;
    for (var i = 0; i < 3; i++) {
        gameBoard += `            <tr>`;
        for (var j = 0; j < 3; j++) {
            gameBoard += `
                    <td loacation="${i}-${j}">${gameState[i][j].toUpperCase()}</td>`;
                } console.log("Good")
        gameBoard += `
                </tr>
    `;
    }

    gameBoard += `  
            </tbody>
        </table>
    </div>
    `;
    return gameBoard;

}

function createSettings(settingsState) {
    let checked = settingsState ? 'checked': '';
        return `
        <div id="settings">
            
            <button id="restart-game">Restart game</button>
        </div>
        `;
}

function startGame() {}