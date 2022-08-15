// const addBtns = document.querySelectorAll(".add-btn:not(.solid)");
// const saveItemBtns = document.querySelectorAll(".solid");
// const addItemContainers = document.querySelectorAll(".add-container");
// const addItems = document.querySelectorAll(".add-item");
// // Item Lists
// const listColumns = document.querySelectorAll(".drag-item-list");
// const backlogList = document.getElementById("backlog-list");
// const progressList = document.getElementById("progress-list");
// const completeList = document.getElementById("complete-list");
// const onHoldList = document.getElementById("on-hold-list");

// // Items
// let updatedOnLoad = false;

// // Initialize Arrays
// let backlogListArray = [];
// let progressListArray = [];
// let completeListArray = [];
// let onHoldListArray = [];
// let listArrays = [];

// // Drag Functionality
// let draggedItem;
// let currentColumn;

// // Get Arrays from localStorage if available, set default values if not
// function getSavedColumns() {
//   if (localStorage.getItem("backlogItems")) {
//     backlogListArray = JSON.parse(localStorage.backlogItems);
//     progressListArray = JSON.parse(localStorage.progressItems);
//     completeListArray = JSON.parse(localStorage.completeItems);
//     onHoldListArray = JSON.parse(localStorage.onHoldItems);
//   } else {
//     backlogListArray = ["Finish my portfolio", "Apply for jobs"];
//     progressListArray = [
//       "Workout Daily",
//       "Work on projects",
//       "Clean the Apartment",
//     ];
//     completeListArray = ["Writing WOD", "Getting stuff done"];
//     onHoldListArray = ["Afro Tech"];
//   }
// }

// // Set localStorage Arrays
// function updateSavedColumns() {
//   listArrays = [
//     backlogListArray,
//     progressListArray,
//     completeListArray,
//     onHoldListArray,
//   ];
//   const arrayNames = ["backlog", "progress", "complete", "onHold"];
//   arrayNames.forEach((arrayName, index) => {
//     localStorage.setItem(
//       `${arrayName}items`,
//       JSON.stringify(listArrays[index])
//     );
//   });
// }

// // Filter Arrays to remove empty items
// function filterArray(array) {
//   const filteredArray = array.filter((item) => item !== null);
//   return filteredArray;
// }

// // Create DOM Elements for each list item
// function createItemEl(columnEl, column, item, index) {
//   // List Item
//   const listEl = document.createElement("li");
//   listEl.classList.add("drag-item");
//   listEl.textContent = item;
//   listEl.draggable = true;
//   listEl.setAttribute("ondragstart", "drag(event)");
//   listEl.contentEditable = "true";
//   listEl.id = index;
//   listEl.setAttribute("onfocusout", `updateItem(${index}, ${column})`);
//   // Append
//   columnEl.appendChild(listEl);
// }

// // Update Columns in DOM - Reset HTML, Filter Array, Update localStorage
// function updateDOM() {
//   // Check localStorage once
//   if (!updatedOnLoad) {
//     getSavedColumns();
//   }
//   // Backlog Column
//   backlogList.textContent = "";
//   backlogListArray.forEach((backlogItem, index) => {
//     createItemEl(backlogList, 0, backlogItem, index);
//   });
//   backlogListArray = filterArray(backlogListArray);
//   // Progress Column
//   progressList.textContent = "";
//   progressListArray.forEach((progressItem, index) => {
//     createItemEl(progressList, 1, progressItem, index);
//   });
//   progressListArray = filterArray(progressListArray);
//   // Complete Column
//   completeList.textContent = "";
//   completeListArray.forEach((completeItem, index) => {
//     createItemEl(completeList, 2, completeItem, index);
//   });
//   completeListArray = filterArray(backlogListArray);
//   // On Hold Column
//   onHoldList.textContent = "";
//   onHoldListArray.forEach((onHoldItem, index) => {
//     createItemEl(onHoldList, 3, onHoldItem, index);
//   });
//   onHoldListArray = filterArray(onHoldListArray);
//   // Run getSavedColumns only once, Update Local Storage
//   updatedOnLoad = true;
//   updateSavedColumns();
// }

// // Update Item - Delete if necessary, or update array value
// function updateItem(id, column) {
//   const selectedArray = listArrays[column];
//   const selectedColumnEl = listColumns[column].children;
//   if (!selectedColumnEl[id].textContent) {
//     delete selectedArray[id];
//   }
//   updateDOM();
// }

// // Add to column list
// function addToColumn(column) {
//   const itemText = addItems[column].textContent;
//   const selectedArray = listArrays[column];
//   selectedArray.push(itemText);
//   addItems[column].textContent = "";
//   updateDOM();
// }

// // Show Add Item Input Box
// function showInputBox(column) {
//   addBtns[column].style.visibility = "hidden";
//   saveItemBtns[column].style.display = "flex";
//   addItemContainers[column].style.display = "flex";
// }

// // Hide Input Box
// function hideInputBox(column) {
//   addBtns[column].style.visibility = "visible";
//   saveItemBtns[column].style.display = "none";
//   addItemContainers[column].style.display = "none";
//   addToColumn(column);
// }

// // Allows arrays to reflect drag and drop items
// function rebuildArrays() {
//   backlogListArray = [];
//   for (let i = 0; i < backlogList.children.length; i++) {
//     backlogListArray.push(backlogList.children[i].textContent);
//   }
//   progressListArray = [];
//   for (let i = 0; i < progressList.children.length; i++) {
//     progressListArray.push(progressList.children[i].textContent);
//   }
//   completeListArray = [];
//   for (let i = 0; i < completeList.children.length; i++) {
//     completeListArray.push(completeList.children[i].textContent);
//   }
//   onHoldListArray = [];
//   for (let i = 0; i < onHoldList.children.length; i++) {
//     onHoldListArray.push(onHoldList.children[i].textContent);
//   }
//   updateDOM();
// }

// // When Item Starts Dragging
// function drag(e) {
//   draggedItem = e.target;
// }

// // When Item Enters Column Area
// function dragEnter(column) {
//   listColumns[column].classList.add("over");
//   currentColumn = column;
// }

// // Column Allows for Item to Drop
// function allowDrop(e) {
//   e.preventDefault();
// }

// // Dropping Item in Column
// function drop(e) {
//   e.preventDefault();
//   // Remove Background Color/Padding
//   listColumns.forEach((column) => {
//     column.classList.remove("over");
//   });
//   // Add Item to Column
//   const parent = listColumns[currentColumn];
//   parent.appendChild(draggedItem);
//   rebuildArrays();
// }

// // On Load
// updateDOM();

// Copied Code

const addBtns = document.querySelectorAll(".add-btn:not(.solid)");
const saveItemBtns = document.querySelectorAll(".solid");
const addItemContainers = document.querySelectorAll(".add-container");
const addItems = document.querySelectorAll(".add-item");
// Item Lists
const listColumns = document.querySelectorAll(".drag-item-list");
const backlogListEl = document.getElementById("backlog-list");
const progressListEl = document.getElementById("progress-list");
const completeListEl = document.getElementById("complete-list");
const onHoldListEl = document.getElementById("on-hold-list");

// Items
let updatedOnLoad = false;

// Initialize Arrays
let backlogListArray = [];
let progressListArray = [];
let completeListArray = [];
let onHoldListArray = [];
let listArrays = [];

// Drag Functionality
let draggedItem;
let dragging = false;
let currentColumn;

// Get Arrays from localStorage if available, set default values if not
function getSavedColumns() {
  if (localStorage.getItem("backlogItems")) {
    backlogListArray = JSON.parse(localStorage.backlogItems);
    progressListArray = JSON.parse(localStorage.progressItems);
    completeListArray = JSON.parse(localStorage.completeItems);
    onHoldListArray = JSON.parse(localStorage.onHoldItems);
  } else {
    backlogListArray = ["Finish my portfolio", "Apply for jobs"];
    progressListArray = [
      "Workout Daily",
      "Work on projects",
      "Clean the Apartment",
    ];
    completeListArray = ["Writing WOD"];
    onHoldListArray = ["Afro Tech"];
  }
}

// Set localStorage Arrays
function updateSavedColumns() {
  listArrays = [
    backlogListArray,
    progressListArray,
    completeListArray,
    onHoldListArray,
  ];
  const arrayNames = ["backlog", "progress", "complete", "onHold"];
  arrayNames.forEach((arrayName, index) => {
    localStorage.setItem(
      `${arrayName}Items`,
      JSON.stringify(listArrays[index])
    );
  });
}

// Filter Array to remove empty values
function filterArray(array) {
  const filteredArray = array.filter((item) => item !== null);
  return filteredArray;
}

// Create DOM Elements for each list item
function createItemEl(columnEl, column, item, index) {
  // List Item
  const listEl = document.createElement("li");
  listEl.textContent = item;
  listEl.id = index;
  listEl.classList.add("drag-item");
  listEl.draggable = true;
  listEl.setAttribute("onfocusout", `updateItem(${index}, ${column})`);
  listEl.setAttribute("ondragstart", "drag(event)");
  listEl.contentEditable = true;
  // Append
  columnEl.appendChild(listEl);
}

// Update Columns in DOM - Reset HTML, Filter Array, Update localStorage
function updateDOM() {
  // Check localStorage once
  if (!updatedOnLoad) {
    getSavedColumns();
  }
  // Backlog Column
  backlogListEl.textContent = "";
  backlogListArray.forEach((backlogItem, index) => {
    createItemEl(backlogListEl, 0, backlogItem, index);
  });
  backlogListArray = filterArray(backlogListArray);
  // Progress Column
  progressListEl.textContent = "";
  progressListArray.forEach((progressItem, index) => {
    createItemEl(progressListEl, 1, progressItem, index);
  });
  progressListArray = filterArray(progressListArray);
  // Complete Column
  completeListEl.textContent = "";
  completeListArray.forEach((completeItem, index) => {
    createItemEl(completeListEl, 2, completeItem, index);
  });
  completeListArray = filterArray(completeListArray);
  // On Hold Column
  onHoldListEl.textContent = "";
  onHoldListArray.forEach((onHoldItem, index) => {
    createItemEl(onHoldListEl, 3, onHoldItem, index);
  });
  onHoldListArray = filterArray(onHoldListArray);
  // Don't run more than once, Update Local Storage
  updatedOnLoad = true;
  updateSavedColumns();
}

// Update Item - Delete if necessary, or update Array value
function updateItem(id, column) {
  const selectedArray = listArrays[column];
  const selectedColumn = listColumns[column].children;
  if (!dragging) {
    if (!selectedColumn[id].textContent) {
      delete selectedArray[id];
    } else {
      selectedArray[id] = selectedColumn[id].textContent;
    }
    updateDOM();
  }
}

// Add to Column List, Reset Textbox
function addToColumn(column) {
  const itemText = addItems[column].textContent;
  const selectedArray = listArrays[column];
  selectedArray.push(itemText);
  addItems[column].textContent = "";
  updateDOM(column);
}

// Show Add Item Input Box
function showInputBox(column) {
  addBtns[column].style.visibility = "hidden";
  saveItemBtns[column].style.display = "flex";
  addItemContainers[column].style.display = "flex";
}

// Hide Item Input Box
function hideInputBox(column) {
  addBtns[column].style.visibility = "visible";
  saveItemBtns[column].style.display = "none";
  addItemContainers[column].style.display = "none";
  addToColumn(column);
}

// Allows arrays to reflect Drag and Drop items
function rebuildArrays() {
  backlogListArray = Array.from(backlogListEl.children).map(
    (i) => i.textContent
  );
  progressListArray = Array.from(progressListEl.children).map(
    (i) => i.textContent
  );
  completeListArray = Array.from(completeListEl.children).map(
    (i) => i.textContent
  );
  onHoldListArray = Array.from(onHoldListEl.children).map((i) => i.textContent);
  updateDOM();
}

// When Item Enters Column Area
function dragEnter(column) {
  listColumns[column].classList.add("over");
  currentColumn = column;
}

// When Item Starts Dragging
function drag(e) {
  draggedItem = e.target;
  dragging = true;
}

// Column Allows for Item to Drop
function allowDrop(e) {
  e.preventDefault();
}

// Dropping Item in Column
function drop(e) {
  e.preventDefault();
  const parent = listColumns[currentColumn];
  // Remove Background Color/Padding
  listColumns.forEach((column) => {
    column.classList.remove("over");
  });
  // Add item to Column
  parent.appendChild(draggedItem);
  // Dragging complete
  dragging = false;
  rebuildArrays();
}

// On Load
updateDOM();
