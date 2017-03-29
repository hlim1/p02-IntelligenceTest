function validateFirstAnswer()
{
  var userInput = document.getElementById("userFirstInput").value;
  var errorTrue = document.getElementById("userInputGroup").classList.contains("has-error");

  if (userInput != 925136 && userInput != "")
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
    console.log("In");
    // If the user got the correct answer, then remove the error
    if (errorTrue == true)
    {
      document.getElementById("userInputError").classList.remove("shown-message");
      document.getElementById("userInputError").classList.remove("has-error");
      document.getElementById("userInputError").classList.add("hidden-message");
    }
    // Show that the answer is correct
    document.getElementById("userInputGroup").classList.add("has-success");
  }
}
