// onclick register which element was clicked and if the onkeydown event was fired simultaneously
 // if yes -> 
  // register which select element was most recently clicked
  // register which select element was click 1 step prior
  // identify which element nodes exist between those two items in the DOM
  // loop over that collection of nodes and check each of them

// variables
const inboxItems = document.querySelectorAll(".item input"); // total of 9 items in the array of dom nodes
let previousSelection = null;

// event listeners
inboxItems.forEach(item => item.addEventListener("click", selectRange));

// function declarations
function selectRange(e) {
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    // loop over every checkbox
    inboxItems.forEach((checkbox) => {
      console.log(checkbox);
      if(checkbox === this || checkbox === previousSelection) {
        inBetween = !inBetween;
        console.log("Starting to check them in between");
      }
      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }

  previousSelection = this;
}