const selectedfontsize=document.getElementById("selectFontSize");
const selectedbgcolor=document.getElementById("selectedBgcolor");
const mainelement=document.querySelector("main");
const resetbtn=document.getElementById("resetbtn");

function changefontsize(event){
    const obtainedfontsize=event.target.value;
    mainelement.style.fontSize=obtainedfontsize;
    localStorage.setItem("fontsize",obtainedfontsize);
}
function changebgcolor(event){
  const obtainedbgcolor=event.target.value;
  mainelement.style.backgroundColor=obtainedbgcolor;
  localStorage.setItem("bgcolor",obtainedbgcolor);
}
const setvalues=(fontsize,bgcolor)=>{
  selectedfontsize.value=fontsize;
  selectedbgcolor.value=bgcolor;
  mainelement.style.fontSize=fontsize;
  mainelement.style.backgroundColor=bgcolor;
}
const getitems=()=>{
    const fontsize=localStorage.getItem("fontsize");
    const bgcolor=localStorage.getItem("bgcolor");
    if(fontsize && bgcolor){
        setvalues(fontsize,bgcolor);
    }if(!fontsize && !bgcolor){
        setvalues("16px","aqua");
    }if(!fontsize && bgcolor){
        setvalues("16px",bgcolor);
    }if(fontsize && !bgcolor){
        setvalues(fontsize,"aqua");
    }
}

function resetall(){
    localStorage.removeItem("fontsize");
    localStorage.removeItem("bgcolor");
    selectedfontsize.value="16px";
    selectedbgcolor.value="aqua";
    mainelement.style.fontSize="16px";
    mainelement.style.backgroundColor="aqua";
}
selectedfontsize.addEventListener("change",changefontsize);
selectedbgcolor.addEventListener("change",changebgcolor);
resetbtn.addEventListener("click",resetall);
getitems();

