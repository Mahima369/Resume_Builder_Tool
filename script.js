function addnewwefield(){
    console.log("hello");
 let newnode=document.createElement("textarea")
 newnode.classList.add("form-control");
 newnode.classList.add("wefield");
 newnode.setAttribute("placeholder" , "Enter Here");

 let we=document.getElementById("we");
 weaddbtn=document.getElementById("webutton")
we.insertBefore(newnode,weaddbtn);
}


function addnewE()
{
    let newnode=document.createElement("textarea")
    newnode.classList.add("form-control");
    newnode.classList.add("efield");
    newnode.setAttribute("placeholder" , "Enter Here");
   
    let e=document.getElementById("E");
    eaddbtn=document.getElementById("ebutton")
   e.insertBefore(newnode,eaddbtn);
}

function addnewS()
{
    let newnode=document.createElement("textarea")
    newnode.classList.add("form-control");
    newnode.classList.add("sfield");
    newnode.setAttribute("placeholder" , "Enter Here");
   
    let s=document.getElementById("Skills");
    saddbtn=document.getElementById("skillbutton")
   s.insertBefore(newnode,saddbtn);
}

function addnewP()
{
    let newnode=document.createElement("textarea")
    newnode.classList.add("form-control");
    newnode.classList.add("pfield");
    newnode.setAttribute("placeholder" , "Enter Here");
   
    let p=document.getElementById("Projects");
    paddbtn=document.getElementById("pbutton")
   p.insertBefore(newnode,paddbtn);
}


function generateResume(){
    let namefield=document.getElementById("namefield").value;
    console.log(namefield);
    let namet1=document.getElementById("nameT1")
    namet1.innerHTML=namefield;

    document.getElementById("nameT2").innerHTML=namefield;

    document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;

    document.getElementById("mailT").innerHTML=document.getElementById("emailfield").value;

    document.getElementById("githubT").innerHTML=document.getElementById("Githubfield").value;

    document.getElementById("linkT").innerHTML=document.getElementById("linkfield").value;

    document.getElementById("objT").innerHTML=document.getElementById("objfield").value;

    let WE=document.getElementsByClassName("wefield")

    let str='';

    for(let e of WE){

        str=str+`<li>${e.value}</li>`
    }

    document.getElementById("weT").innerHTML=str;

    
    let E=document.getElementsByClassName("efield")

    let str1='';

    for(let e of E){

        str1=str1+`<li>${e.value}</li>`
    }

    document.getElementById("educationT").innerHTML=str1;

    let S=document.getElementsByClassName("sfield")

    let str2='';

    for(let e of S){

        str2=str2+`<li>${e.value}</li>`
    }

    document.getElementById("skillsT").innerHTML=str2;


let P=document.getElementsByClassName("pfield")

    let str3='';

    for(let e of P){

        str3=str3+`<li>${e.value}</li>`
    }

    document.getElementById("projectsT").innerHTML=str3;

    let file=document.getElementById("imgfield").files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend=()=>{
    document.getElementById("imgT").src=reader.result;
    }
    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
    


}


function printCV(){
    window.print();
    
}
