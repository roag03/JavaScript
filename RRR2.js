// console.log("Radhey");
// alert("Rohit Agrahari")
// let heading =document.getElementById("heading");
// console.dir(heading);
// let ClassName=document.getElementsByClassName("ClassName");
// console.log(ClassName);

// let h2=document.querySelector("h2");
// console.log(h2.innerText);
// h2.innerText=h2.innerText+"from Rohit Agrahari";

let divs=document.querySelectorAll(".box");
// console.log(divs[0]);
// divs[0].innerText="Devi Ji Aap sahi ho";
// divs[1].innerText="Hume Skills Par focus karna hai";
// divs[2].innerText="Dsa ke algo yaad rakhna hai";

let idx=7;
for(div of divs){
    div.innerText=`Radhey Aap ki ho ${idx}`;
    idx++;
}