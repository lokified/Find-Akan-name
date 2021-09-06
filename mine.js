function findAkan(){
    let message=document.getElementById("akan");
    message.innerHTML=" ";
    
     // checks the validity of date and month
    let d= parseInt(document.getElementById("date").value);
    let m= parseInt(document.getElementById("month").value);
    
        if((d <= 0) || (d > 31)){
            alert("Invalid date, please input again");
        }
        if((m <= 0) || (m > 12)){
            alert("invalid month,please input again");
        }

    
    //calculates the day
    let y = parseInt(document.getElementById("year").value);

    c = Math.round(((y / 100) + 1));
    theday =( ( (c/4) -2*c-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d ) % 7;


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

        dayborn =days[Math.round(theday)];

        document.getElementById("card22").style.visibility="visible";
        document.getElementById("akan").innerHTML= dayborn; 
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

        dayborn =days[Math.round(theday)];

        document.getElementById("card22").style.visibility="visible";
        document.getElementById("akan").innerHTML= dayborn; 
    }

    else{
        alert("gender not selected");
    }
 
   
}

   //cancel the results section
function exit(){
    document.getElementById("card22").style.visibility="hidden";
}