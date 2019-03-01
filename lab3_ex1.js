function buttonFunc()
{
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;

//  if (password1.length() < 8)
//  {
//    alert("Please create a password which is at least 8 characters long!");
//  }
//  else
//  {
    if (password1 == password2)
    {
      alert("Password OK!");
    }
    else
    {
      alert("Please ensure both passwords are the same!");
    }
//  }
}
