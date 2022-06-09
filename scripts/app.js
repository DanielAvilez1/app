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
    //clear the inputs
    $(`input`).val("");
    saveUser(newUser);

}


function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid=true;
    if(user.email.length==0){
        valid=false;
        console.log("Please add an email");
        $("txtEmail").addClass("input-error")
    }
    if(user.password.length==0){
        valid=false;
        console.log("Please add an Password");
        $("txtPassword").addClass("input-error")
    }
    if(user.firstname.length==0){
        valid=false;
        console.log("Please add an First Name");
        $("txtFirstName").addClass("input-error")
    }
    if(user.lastname.length==0){
        valid=false;
        console.log("Please add an Last Name");
        $("txtLastName").addClass("input-error")
    }
    return valid;
    
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
}


window.onload=init;