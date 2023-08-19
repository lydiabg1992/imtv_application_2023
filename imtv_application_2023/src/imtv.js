//Get all buttons with class 'highlightable-btn'//
const buttons =  document.querySelectorAll('.highlightable-btn');

//var to keep track of currently highlighted button//
let highlightedButton = null;

//function to handle click event//

function handleButtonClick(event) {
    const clickedButton = event.target;

    //make sure only one button can be clicked, and that its highlighted
    if (highlightedButton && highlightedButton !== clickedButton) {
        highlightedButton.classList.remove('highlighted');
    }

    //add highlighted class to clicked button
    clickedButton.classList.add('highlighted');

    //update currently highlighted button
    highlightedButton = clickedButton;


    buttons.forEach(button => {
        clickedButton.classList.remove('highlighted'); 
    });
    clickedButton.classList.add('highlighted');
}

//add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});



   




//element.style.backgroundColor ='red'