function palindrome() {
    var inputText = document.getElementById("input1").value;
    console.log(inputText);
    var whiteSpace = inputText;
    var removed = whiteSpace.replace(/\W/g, '');
    var underscore = removed.replace(/_/g, "");

    var toLower = (''+underscore).toLowerCase();

    var array1 = Array.from(toLower);

    var reverse = array1.reverse();

    var string = reverse.join("");

  if (toLower == string) {
      document.getElementById('output').value = "Yep, this is an alphanumeric palindrome!"
    } else
      document.getElementById('output').value = "No, this is not an alphanumeric palindrome!"



  }


/*
// Remove white spaces
// Filter out alphanumeric characters
Change to all lowercase
Change array into string
save as variable
Reverse the string
compare the two
output results
*/
