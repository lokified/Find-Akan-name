function findAkan(){
    let message=document.getElementById("akan");
    message.innerHTML=" ";
    
     // checks the validity of date and month
    let d= document.getElementById("date").value;
    let m=document.getElementById("month").value;
    try{
        if((d<=0) || (d>31)){
            alert("Invalid date, please input again");
        }
        if((m<=0) || (m>12)){
            alert("invalid month,please input again");
        }
    }
    catch(err){
        message.innerHTML=err;
    }
    
    //calculates the day
    let y =document.getElementById("year").value;
    var dob = m+","+d+","+y;
    var then = new Date(dob);
    var theday =then.getDay();
}