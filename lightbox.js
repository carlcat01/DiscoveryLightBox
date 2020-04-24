// JavaScript Document
var curVal = 0;
var state = -1;

var cCol = 0;
var cRow = 0;
var pointer =0;
var cRed = 0;
var cGre = 0;
var cBlu = 0;

function startup(){
    document.getElementById("colSel").style.display = "none";
    document.getElementById("rowSel").style.display = "none";
    
}

function toggle(value){
   //var but = document.getElementById("but");
    var but = document.getElementById("but"+value.toString());
    if(but.innerHTML=="0"){
        but.classList.toggle("active");
        but.innerHTML="1"
        curVal+=value;
    }
    else{
        but.classList.toggle("active");
        but.innerHTML="0"
        curVal-=value;
    }
    document.getElementById("counter").innerHTML="<p>Current #: </p><div>"+curVal+"</div>";
    checkstate();
}

function changestate(){
    state++;
    console.log(state);
    checkstate();
    
}
function checkstate(){
    switch(state){
        case 0:
            document.getElementById("statecount").innerHTML="Select Column";
            
            
            
            cCol=curVal;
            pointer=1*cCol;
            
            if(cCol < 18){
            document.getElementById("colSel").style.display = "block";
            lightCol(cCol);
            }
            else{
                document.getElementById("colSel").style.display = "none";
            }
            break;
        case 1:
            document.getElementById("colSel").style.display = "none";
            
            document.getElementById("statecount").innerHTML="Select Row";
            cRow=curVal;
            pointer+=(18*(cRow));
            
            if(cRow < 18){
            document.getElementById("rowSel").style.display = "block";
            lightRow(curVal);
            }
            else{
                document.getElementById("rowSel").style.display = "none";
            }
            
            break;
        case 2:
            document.getElementById("rowSel").style.display = "none";
            document.getElementById("statecount").innerHTML="Select Red";
            cRed = curVal;
            break;
        case 3:
            document.getElementById("statecount").innerHTML="Select Green";
            cGre = curVal;
            
            
            break;
        case 4:
            document.getElementById("statecount").innerHTML="Select Blue";
            cBlu = curVal;
            break;
        case 5:
            
            document.getElementById("statecount").innerHTML='Click "Next"';
            var x = document.getElementsByClassName("pix");
            x[pointer].style.backgroundColor="rgb("+cRed+","+cGre+","+cBlu+")";
            
            cCol=255;
            cRow=255;
            cRed=0;
            cGre=0;
            cBlu=0;
            pointer=400;
            
            //var y = document.getElementsByClassName("switch");
            //for(var i = 0;i <y.length; i++){
            //    y[i].classList.remove("active");
            //}
            
            state = -1;
            break;
            
    }
    if(pointer <= 324){
    x = document.getElementsByClassName("pix");
    x[pointer].style.backgroundColor="rgb("+cRed+","+cGre+","+cBlu+")";
    }
}

function lightCol(colnum){
    var offset = 5.5;
    
    document.getElementById("colSel").style.marginLeft = (offset * colnum)+"%";
    
    document.getElementById("rowSel").style.marginLeft = (offset * colnum)+"%";
}

function lightRow(rownum){
    var offset = 5.5;
    
    document.getElementById("rowSel").style.marginTop = (offset * rownum)+"%";
}