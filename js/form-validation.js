//var aX = parseInt(document.getElementById("xBegin").value);
//var bX = parseInt(document.getElementById("xEnd").value);

$(document).ready(function(){

    // $("form[name='input']").on('submit', function(event){
    //   event.preventDefault();
    //   //display();
    //   console.log("Did not reload");
    // });

    $("form[name='input']").validate({
      rules: {
        xBegin: {
            required: true,
            min: 1,
            max: 75,
            number: true,     
        },
        xEnd: {
            required: true,
            min: 1,
            max: 75,
            number: true,
            greaterThan: "#xBegin"
        },
        yBegin: {
            required: true,
            min: 1,
            max: 75,
            number: true,  
        },
        yEnd: {
            required: true,
            min: 1,
            max: 75,
            number: true,
            greaterThan: "#yBegin"
        },
      },
      /* had updated a message to produce a pop-up but the pop-up but it inhibited 
      the users ability to insert data. *The greaterThan function now works. The location of 
      the messages seemed to make sense to I decided to update the text to be more descriptive
      where I felt it was needed */

      messages: {
          xBegin: {
           // $(this).addClass("error");
            min: "* Less than min. Please enter a value between 1 and 75.",
            max: "* Exceeds max. Please enter a value between 1 and 75. ", 
          },
          xEnd: { 
            min: "* Less than min. Please enter a value between 1 and 75.",
            max: "* Exceeds max. Please enter a value between 1 and 75. ", 
           },
          yBegin: { 
            min: "* Less than min. Please enter a value between 1 and 75.",
            max: "* Exceeds max. Please enter a value between 1 and 75. ", 
           },
          yEnd: { 
            min: "* Less than min. Please enter a value between 1 and 75.",
            max: "* Exceeds max. Please enter a value between 1 and 75. ", 
          },
      },
      // had issues with this
    submitHandler: function(form) {
        display();
      }
    });
  });
  