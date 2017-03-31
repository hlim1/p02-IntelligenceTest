// HeuiChan Lim

var runningTotal;

function initializer()
{
  runningTotal = Number(0.0);
}

function validateFirstAnswer()
{
  var userInput = document.getElementById("userFirstInput").value;
  var errorTrue = document.getElementById("userInputGroup").classList.contains("has-error");

  if (userInput != 925136 && userInput != "" && isNaN(userInput))
  {
    // Show message that there is an error with the the user's input...
    document.getElementById("userInputError").innerHTML="This is not a correct answer.<br/>Please, try again.";
    document.getElementById("userInputError").classList.remove("hidden-message");
    document.getElementById("userInputError").classList.add("shown-message");
    // Turn the username items red
    document.getElementById("userInputGroup").classList.add("has-error");    
  }
  else if (userInput == "" && errorTrue)
  {
    if (errorTrue == true)
    {
      document.getElementById("userInputError").classList.remove("shown-message");
      document.getElementById("userInputError").classList.remove("has-error");
      document.getElementById("userInputError").classList.add("hidden-message");
    }
  }
  else if (userInput == 925136)
  {
    // If the user got the correct answer, then remove the error
    if (errorTrue == true)
    {
      document.getElementById("userInputError").classList.remove("shown-message");
      document.getElementById("userInputGroup").classList.remove("has-error");
      document.getElementById("userInputError").classList.add("hidden-message");
    }
    // Show that the answer is correct
    document.getElementById("userInputError").innerHTML="Correct!";
    document.getElementById("userInputError").classList.remove("hidden-message");
    document.getElementById("userInputError").classList.add("shown-message");
    document.getElementById("userInputGroup").classList.add("has-success");


    runningTotal = Number(runningTotal + 1);
    setCookie("score", runningTotal, 3);
    console.log(runningTotal);
  }
}

function validateSecondAnswer()
{
  var userInput = document.getElementById("userFirstInput").value;
  var errorTrue = document.getElementById("userInputGroup").classList.contains("has-error");

  if (userInput != 216 && userInput != "" && isNaN(userInput))
  {
    // Show message that there is an error with the the user's input...
    document.getElementById("userInputError").innerHTML="This is not a correct answer.<br/>Please, try again.";
    document.getElementById("userInputError").classList.remove("hidden-message");
    document.getElementById("userInputError").classList.add("shown-message");
    // Turn the username items red
    document.getElementById("userInputGroup").classList.add("has-error");    
  }
  else if (userInput == "" && errorTrue)
  {
    if (errorTrue == true)
    {
      document.getElementById("userInputError").classList.remove("shown-message");
      document.getElementById("userInputError").classList.remove("has-error");
      document.getElementById("userInputError").classList.add("hidden-message");
    }
  }
  else if (userInput == 216)
  {
    // If the user got the correct answer, then remove the error
    if (errorTrue == true)
    {
      document.getElementById("userInputError").classList.remove("shown-message");
      document.getElementById("userInputGroup").classList.remove("has-error");
      document.getElementById("userInputError").classList.add("hidden-message");
    }
    // Show that the answer is correct
    document.getElementById("userInputError").innerHTML="Correct!";
    document.getElementById("userInputError").classList.remove("hidden-message");
    document.getElementById("userInputError").classList.add("shown-message");
    document.getElementById("userInputGroup").classList.add("has-success");

    runningTotal = runningTotal + 1;
    setCookie("score", runningTotal, 3);
    console.log(runningTotal);
  }
}

function validateLastAnswer()
{
  var userInput = document.getElementById("userFirstInput").value;
  var errorTrue = document.getElementById("userInputGroup").classList.contains("has-error");

  if (userInput != "Mr. Seventy Two" && userInput != "")
  {
    // Show message that there is an error with the the user's input...
    document.getElementById("userInputError").innerHTML="This is not a correct answer.<br/>Please, try again.";
    document.getElementById("userInputError").classList.remove("hidden-message");
    document.getElementById("userInputError").classList.add("shown-message");
    // Turn the username items red
    document.getElementById("userInputGroup").classList.add("has-error");    
  }
  else if (userInput == "" && errorTrue)
  {
    if (errorTrue == true)
    {
      document.getElementById("userInputError").classList.remove("shown-message");
      document.getElementById("userInputError").classList.remove("has-error");
      document.getElementById("userInputError").classList.add("hidden-message");
    }
  }
  else if (userInput == "Mr. Seventy Two")
  {
    // If the user got the correct answer, then remove the error
    if (errorTrue == true)
    {
      document.getElementById("userInputError").classList.remove("shown-message");
      document.getElementById("userInputGroup").classList.remove("has-error");
      document.getElementById("userInputError").classList.add("hidden-message");
    }
    // Show that the answer is correct
    document.getElementById("userInputError").innerHTML="Correct!";
    document.getElementById("userInputError").classList.remove("hidden-message");
    document.getElementById("userInputError").classList.add("shown-message");
    document.getElementById("userInputGroup").classList.add("has-success");

    runningTotal = runningTotal + 1;
    setCookie("score", runningTotal, 3);
  }
}

function result()
{
  var totalResult = getCookie("score");
  document.getElementById("totalScore").innerHTML = totalResult;
  console.log(totalResult);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
