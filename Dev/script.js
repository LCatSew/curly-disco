// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $('#currentDay');


function displayDate() {
  var rightNow = dayjs().format('MMM DD, YYYY');
  currentDayEl.text(rightNow);
}


$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //  
    //  ****** ex: JavaSCript save content to local storage on click
    //
    //  saveButtonElButton.addEventListener("click", function() {
    //    var 
    //      localStorage.setItem("count", count);
    //     }
    //   }); 
      document.addEventListener('DOMContentLoaded', function() {
        // Add click event listeners to all save buttons
        const saveButtons = document.querySelectorAll('.saveBtn');
        
        saveButtons.forEach(button => {
          button.addEventListener('click', function(event) {
            const timeBlock = event.currentTarget.closest('.time-block');
            const id = timeBlock.id;
            const userInput = timeBlock.querySelector('.description').value;
            
            // Save the user input to local storage using the time block's id as the key
            localStorage.setItem(id, userInput);
          });
        });
      });
 
  var hour9TextInput = $('#hour-9').children('textarea').value; //this is the content we are putting in the text area. we need to save this
  

  saveButtonEl.on('click', function(){
    console.log('button works');
    localStorage.setItem('hour9TextInput', hour9TextInput);
  }); // button works, next save to local storage
    



  

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });


displayDate();
  //instead of grabbing by ID grab by a common class and do a for loop to rotate through