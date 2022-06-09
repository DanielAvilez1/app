//this function needs an array
function displayUsers(usersArray){
    let row;
    //travel the arrar (for)
    for(let i=0;i<usersArray.length;i++){
        let user=usersArray[i];
        console.log(user);
    
    //create the row = `<>${}`
        row=`
            <tr>
                <td>${user.email}</td>
                <td>${user.firstName}</td> 
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td>${user.phoneNumber}</td>
                <td>${user.payment}</td>
                <td style="background-color:${user.color}">${user.color}</td>
                
            </tr>
            `;
   
        $("#users").append(row); //apend the row to the table
    }

}

function init(){
    console.log("Listing users");
    let users = readUsers();//getting the array

    //is an array
    displayUsers(users);
}
window.onload=init;