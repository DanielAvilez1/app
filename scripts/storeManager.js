const STORE_KEY = "users";

function saveUser(user){
    let oldData=readUsers();//getting localStorage info
    oldData.push(user);
    let val = JSON.stringify(oldData);
    localStorage.setItem(STORE_KEY,val);
    //local storage needs (key,value
}

function readUsers(){
    //get values from local storage
    let data= localStorage.getItem(STORE_KEY);
    console.log(data);//<-JSON
    
    if(!data){//is not data?
        return [];//create the array
    }else{//we have data
        let list = JSON.parse(data);
        console.log(list);
        return list;
    }
}