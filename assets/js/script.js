function enterUsername(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let welcomeText = `
    <form action="#" target="#">
    <p>Hello! ${name}, choose your Marker 
    <input type="radio" id="x" name="marker" value="X"><label for="x">X</label>
    <input type="radio" id="o" name="marker" value="O"><label for="o">O</label>
   </form>        
    `;
    document.getElementById('welcome-text').innerHTML = welcomeText;
}

document.addEventListener('submit', enterUsername);