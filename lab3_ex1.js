
  var person = prompt("Please enter your name", "Harry Potter");

  if (person == null || person == "")
  {
    txt = "User cancelled the prompt.";
  }
  else {
    txt = "Hello " + person + "! How are you today?";
  }
alert(txt);
