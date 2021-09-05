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
        document.getElementById("card22").style.visibility="visible";
        throw dob;
    }

    else if(female.checked == true){
        var days = new Array(7);
        days[0]="Akosua";
        days[1] ="Adwoa";
        days[2] ="Abenaa";
        days[3] ="Akua";
        days[4] ="Yaa";
        days[5] ="Afua";
        days[6] ="Ama";

        dayborn =days[theday];
        dob = dayborn;
        document.getElementById("card22").style.visibility="visible";
        throw dob; 
    }
    else{
        alert("gender not selected");
    }
 }
    catch(err){
          message.innerHTML=err;
    }
}
   //cancel the results section
function exit(){
    document.getElementById("card22").style.visibility="hidden";
}