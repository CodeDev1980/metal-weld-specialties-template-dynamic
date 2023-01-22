let attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    const token = document.getElementById("token").value;
    const password = document.getElementById("password").value;
    if ( token === "AbRTfh633862Jk" && password === "formGet#123"){
        alert ("Token registered successfully");
        window.location = "/registerStaff"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
        if( attempt === 0){
            document.getElementById("token").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}