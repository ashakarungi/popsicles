function popy(){
    var sibs, pops, out;
sibs = document.getElementById("sb").value;

 pops = document.getElementById("pp").value;

let sp = `${pops%sibs}`;

if(sibs !== "" && pops !== "") {
  
if(sp==="0"){
  out = "give away";
}

else{
out = "eat them yourself";
}

document.getElementById("outi").innerHTML = out;

 outi.style.backgroundColor="#dff";
 outi.style.border="1px solid orange";
 outi.style.borderRadius = "20px";
}

}

/*

_CREATED_BY_ashaKARUNGI™️

*/
