// Homepage elements
let add = document.getElementById("add");
let input = document.getElementById("mainInput");
let toDoList = document.getElementById("toDoList");
let clear = document.getElementById("clear");
let month = document.getElementById("month");
let day = document.getElementById("day");
let year = document.getElementById("year");
let timeOfDay = document.getElementById("timeOfDay");
let time = document.getElementById("time");

//hover over add and clear color
add.addEventListener("mouseover", function() {
    add.style.backgroundColor = 'grey';
});
clear.addEventListener("mouseover", function() {
    clear.style.backgroundColor = 'grey';
});
add.addEventListener("mouseout", function(){
    add.style.backgroundColor = 'lightseagreen'

});
clear.addEventListener("mouseout", function() {
    clear.style.backgroundColor = 'red';
});
//adds to the list
add.addEventListener("click", function() {
   //gets value for date
    let monthValue = month.value;
    let dayValue = day.value;
    let yearValue = year.value;
    let timeDay = timeOfDay.value;
    let timeValue = time.value;

    //gets input for to do item
    let task = input.value;
    //do not add if list is empty
    let itemButton;
    if (task.trim()) {
        //creates a list item / sets time to list
        let newItem = document.createElement("LI");
        let taskText = document.createTextNode( "     " + "TASK - " + "    "+ task);
        if (monthValue === "Month" && dayValue === "Day" && yearValue === "Time"
            || monthValue === "" && dayValue === "" && yearValue === "") {
           alert("Enter a valid date")
        }else {
            var mainDate = document.createTextNode("    " + "|  DONE BY -    " +
                yearValue + "    " + monthValue + "," + "    "
                + dayValue + "    " + timeValue + "   " + timeDay);
        }


        //clears 1 list item in list
        let removeButton = document.createElement("BUTTON");
        removeButton.innerHTML = "Done";
        removeButton.idName = "Done";
        // background color hover
        removeButton.addEventListener("mouseover", function() {
            removeButton.style.backgroundColor = 'red';
        });
        removeButton.addEventListener("mouseout", function() {
            removeButton.style.backgroundColor = 'lightgrey';
        });
        removeButton.addEventListener("click", removeTask);
            //appends values to list
            newItem.appendChild(removeButton);
            newItem.appendChild(taskText);
            newItem.appendChild(mainDate);

        // clear text box / date
        input.value = "";
        toDoList.appendChild(newItem);
        itemButton.addEventListener("click", function () {
            toDoList.removeChild(taskText)
        })
    } else {
        alert("Task cannot be empty");
    }


});
//clears text box
clear.addEventListener("click", function () {
    toDoList.innerHTML = ""

});

function removeTask(e) {
    // get the parent list item to remove
    var taskItem = e.target.parentElement;
    toDoList.removeChild(taskItem)
}









