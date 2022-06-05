//object constructor








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
    if(user.firstName.length==0){
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

//register function
function register(){
    let userName= $("#txtEmail").val();
    let userPass= $("#txtPasssword").val();
    let userFirstName= $("txtFirstName").val();
    let userLastName= $("txtLastName").val()

    //creating the obj
    let newUser= new User(userName,userPass,userFirstName,userLastName);
    if(isValid(newUser)==true){
        //console.log(newUser);
        saveUser(newUser)==true;
        //clear the inputs
        $("input").val("");
    }
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