// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//function for the calculator
$('#calculateBtn').on('click', function (event) {

    var numHours = parseFloat($('#numHours').val());

    //check for valid input and do calculation if valid
    if (!isNaN(numHours) && numHours >= 0) {
        var hourlyRate = parseFloat($('#hourlyRate').val());
        var total = parseFloat(numHours) * hourlyRate;
        $('#total').val(total.toFixed(2)); // Display total with 2 decimal places
    } else {
        // Display error message if numHours is not a positive number
        alert("Please enter a valid positive number for hours.");

        //reset focus to the box
        $('#numHours').val('').focus();
    }

});