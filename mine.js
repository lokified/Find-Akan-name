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

    //checks whether female or male
    var male = document.getElementById("male");
    var female =document.getElementById("female");
    if(male.checked == true){
        var days = new Array(7);
        days[0]="Kwasi";
        days[1] ="Kwadwo";
        days[2] ="Kwabena";
        days[3] ="Kwaku";
        days[4] ="Yaw";
        days[5] ="Kofi";
        days[6] ="Kwame";

        dayborn =days[theday];
        dob = dayborn;
        throw dob;
    }
}