let winner=null;
let status="";
var number_of_rows=document.querySelectorAll(".row").length;
for (var i=1;i<=number_of_rows;i++){
        let divid="#div"+i;
        let getid=document.querySelector(divid);
        getid.addEventListener("click",fill);
}
var count=1;
function fill(control){
                if(status==="over"){
                        alert("match over");
                }
                else if(count<=9)
                {
                        if(count%2!=0)
                        {
                                if(document.getElementById(control.target.id).innerHTML==="")
                                {
                                        document.getElementById(control.target.id).innerHTML="X";
                                        count++;
                                }
                         }
                        else{
                                if(document.getElementById(control.target.id).innerHTML==="")
                                {
                                        document.getElementById(control.target.id).innerHTML="O";   
                                        count++;
                                }
                        }      
                        
                         if (checkWin())
                         {
                                 var heading=document.getElementById("winner");
                                 if(winner==='X')
                                         winner='player 1 ';
                                 else
                                        winner='player 2 ';
                                 heading.innerHTML=winner+" is winner";
                                 status="over";
                         }
                         
                 }
                else
                {
                        alert("match draw");
                 }
                 
}

function reset(){
        for (let i=1;i<=number_of_rows;i++){
                document.getElementById("div"+i).innerHTML="";
        }
        document.getElementById("winner").innerHTML="";
        location.reload();
}

function checkWin(){
       if (checkcondition('div1','div2','div3') || checkcondition('div1','div4','div7') ||
       checkcondition('div4','div5','div6') || checkcondition('div7','div8','div9') ||
       checkcondition('div1','div5','div9') || checkcondition('div3','div5','div7') || 
       checkcondition('div2','div5','div8') || checkcondition('div3','div6','div9')){
               return true;
       }
}
function checkcondition(div1,div2,div3){
        if (getdata(div1)!="" && getdata(div2)!="" && getdata(div3)!=""
         && getdata(div1)==getdata(div2) && getdata(div2)==getdata(div3)){
                 winner=document.getElementById(div1).innerHTML;
                 return true;
         }
}
function getdata(div){
        return document.getElementById(div).innerHTML;
}