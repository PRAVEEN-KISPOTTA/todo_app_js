const listArr = [];
const inputBox = document.querySelector(".todoBox input");
const addBtn = document.querySelector(".todoBox button");

// Function to handle adding item to the list
function addItem() {
    if(inputBox.value != ""){
        // event.preventDefault();
        listArr.push(inputBox.value)
        console.log(listArr);
        inputBox.value = "";
    }
}

// Event listener for the button click
addBtn.addEventListener("click", addItem);

// Event listener for the Enter key press on the input field
inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});
