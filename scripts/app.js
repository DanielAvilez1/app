//object constructor
function User(email,password,firstname,lastname,age,address,phoneNumber,payment,color){
    this.email=email;
    this.password=password;
    this.firstName=firstname;
    this.lastName=lastname;
    this.age=age;
    this.address=address;
    this.phoneNumber=phoneNumber;
    this.payment=payment;
    this.color=color;
}
//register funtion
function register(){
    let userName= $("#txtEmail").val();
    let userPass= $("#txtPassword").val();
    let userFirstName= $("#txtFirstName").val();
    let userLastName= $("#txtLastName").val();
    let userAge = $("#txtAge").val();
    let userAddress = $("#txtAddress").val();
    let userPhoneNumber= $("#txtPhoneNumber").val();
    let userPayment= $("#txtPayment").val();
    let userColor= $("#txtColor").val();


    //create the obj
    let newUser = new User(userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhoneNumber,userPayment,userColor);
    
    if(isValid(newUser)==true){
        saveUser(newUser);
        hideError();
    
    //clear the inputs
    $(`input`).val("");
    }else{
        displayError("Please, complete all the fields")
    }

}


function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid=true;
    if(user.email.length==0){
        valid=false;
        
        $("#txtEmail").addClass("input-error")
    }
    if(user.password.length<6){
        valid=false;
        $("#txtPassword").addClass("input-error")
    }
    if(user.firstName.length==0){
        valid=false;
        $("#txtFirstName").addClass("input-error")
    }
    if(user.lastName.length==0){
        valid=false;
        $("#txtLastName").addClass("input-error")
    }
    return valid;
    
}

function validatePass(){
       console.log("Validate pass");
       //get the value of the input
       let txtPass= $("#txtPassword");
       let password=txtPass.val();
       console.log(password);

       if(password.length<6){
           txtPass.css("background","#ff9898");//jquery changes the css
           displayError("the password is too short:(")
       }else{
           txtPass.css("background","#64cc66");
           hideError();
           
       }
    //is the password less than 6 characters
   
}
function displayError(msg){
    $("#alertError").addClass("hide")
}
function hideError(){
    $("alertError").addClass("hide");
}

function init(){
    console.log("Register");
    //hook events
    $("#btnRegister").click(register);
    $("#txtLastName").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    });
    $("#txtPassword").keyup(validatePass); //it is executed everytime that key is up
}


window.onload=init;