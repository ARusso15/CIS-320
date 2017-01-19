// Say Hello Button
function helloButton() {
    console.log("Hello")
}
var button1 = $('#button1');
button1.on('click', helloButton);

//Addition Button
function addNumbers() {
    var numberOne = parseInt($('#field1').val());
    var numberTwo = parseInt($('#field2').val());
    var result = numberOne + numberTwo;
    $('#field3').val(result);
    console.log(numberOne, numberTwo,result);
}

var button2 = $('#button2')
button2.on('click', addNumbers);

//Visibility Button
function visibility() {
    if ($("#paragraphToHide").is(':hidden')) {
        $("#paragraphToHide").show();
    }
    else {
        $("#paragraphToHide").hide();
}
}

var formButton1 = $('#button3');
formButton1.on('click', visibility);

//Validation Button
function validateFunction() {
    console.log("hello");
    var v1 = $('#phoneField').val();

    var reg = /^[0-9]{3}-[0-9]{3}-\d{4}$/;

    if (reg.test(v1)) {
        console.log("OK");
    } else {
        console.log("Bad");
    }
}

var formButton4 = $('#button4');
formButton4.on("click", validateFunction);

//JSON
function jsonFunction() {

    var formObject = {};

    formObject.firstName = $('#firstName').val();
    formObject.lastName = $('#lastName').val();
    formObject.email = $('#email').val();

    var jsonString = JSON.stringify(formObject);

    console.log(jsonString);
}

var formButton5 = $('#button5');
formButton5.on("click", jsonFunction);