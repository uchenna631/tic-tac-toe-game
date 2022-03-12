// Let DOM content load before the JavaScript

/**
 * Main navigation for the Single Page App thingy
 */
 document.addEventListener('DOMContentLoaded', function() {
    let menuItems = document.getElementsByClassName('menu-item');
    for (let menuItem of menuItems) {
        menuItem.addEventListener('click', function(){
            if (this.textContent=='Play') {
                alert('You clicked play button');
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

 })