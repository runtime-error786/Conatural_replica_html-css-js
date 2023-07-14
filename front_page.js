let f = document.getElementById("fc");
let yo = document.getElementById("yo");
let i = document.getElementById("in");
f.addEventListener("mouseover", function(){
    let f2 = document.getElementById("n1");
    console.log("over");
    f2.style.display = "block";
});

f.addEventListener("mouseout", function(){
    let f2 = document.getElementById("n1");
    console.log("out");
    f2.style.display = "none";
});

yo.addEventListener("mouseover", function(){
    let f2 = document.getElementById("n3");
    console.log("over");
    f2.style.display = "block";
});

yo.addEventListener("mouseout", function(){
    let f2 = document.getElementById("n3");
    console.log("out");
    f2.style.display = "none";
});

i.addEventListener("mouseover", function(){
    let f2 = document.getElementById("n2");
    console.log("over");
    f2.style.display = "block";
});

i.addEventListener("mouseout", function(){
    let f2 = document.getElementById("n2");
    console.log("out");
    f2.style.display = "none";
});

let g = document.getElementById("w1");
g.addEventListener("click" , function(){
    location.reload();
});

let c1  = document.getElementById("c1");
c1.addEventListener("click" , function(){
    let g = document.getElementById("h3");
    g.style.display = "none";
});