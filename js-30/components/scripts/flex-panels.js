const panels = document.querySelectorAll(".panel");
let activePanel = null;

function closeActivePanel() {
  if(activePanel !== null) {
    let locatePanel = document.querySelector(`.${activePanel[1]}`);
    locatePanel.classList.remove("open");
    activePanel = null;
  }
}

function toggleOpen() {
  const currentSelection = this.classList;
  if(currentSelection.contains("open")) {
    closeActivePanel();
  } else {
    closeActivePanel();
    currentSelection.add("open");
    activePanel = currentSelection;
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));


// function closeAllPanels() {
//   panels.forEach(function(panel) {
//     panel.classList.remove("open");
//   });
// }

// function toggleOpen() {
//   const currentSelection = this.classList;
//   if(currentSelection.contains("open")) {
//     closeAllPanels();
//   } else {
//     closeAllPanels();
//     currentSelection.add("open");
//   }
// }