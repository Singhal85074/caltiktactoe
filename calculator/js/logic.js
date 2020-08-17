
let screen=document.getElementById("screen");
screen.readOnly=true;
var max_length=12;
buttons=document.querySelectorAll("button");
let screenValue='';
for (item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText;
       if(screen.value.length<=max_length)
       { 
        if (buttonText!='=' && buttonText!='C' && buttonText!='AC')
        {
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='AC')
        {
            screenValue ="";
            screen.value=screenValue;
        }
        else if(buttonText=='C'){
            screenValue=screen.value.slice(0,-1);
            screen.value=screenValue;
        }
        else{
            screen.value=eval(screenValue);
        }
    }
    else{
       screen.value="length full";
    }     
    })
}


