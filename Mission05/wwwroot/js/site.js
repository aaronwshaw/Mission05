// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#calculate').click(function () {
        var hours = $('#hours').val(); // Get the value from the hours input
        var rate = $('#rate').val(); // Get the hourly rate
        var total = 0;

        // Validate that the user has entered a positive number for hours
        if (hours && hours > 0) {
            total = hours * rate; // Calculate total
            $('#total').val('$' + total.toFixed(2)); // Display total in output box
        } else {
            alert('Please enter a valid positive number for hours.');
        }
    });
});
