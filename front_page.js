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

let c2 = document.getElementById("im1");
c2.addEventListener("mouseenter" , function()
{
    let ee = document.getElementById("prev");
    let rr = document.getElementById("next");
    ee.style.display = "block";
    rr.style.display = "block";
    console.log("hello from ");
});

let c3 = document.getElementById("im1");
c3.addEventListener("mouseleave" , function()
{
    let ee1 = document.getElementById("prev");
    let rr1 = document.getElementById("next");
    ee1.style.display = "none";
    rr1.style.display = "none";
    console.log("hrllo out");
});

let c4 = document.getElementById("prev");
c4.addEventListener("mouseenter" , function()
{
    let ee1 = document.getElementById("prev");
    let rr1 = document.getElementById("next");
    ee1.style.display = "block";
    rr1.style.display = "block";
    console.log("hrllo out");
});

let c5= document.getElementById("next");
c5.addEventListener("mouseenter" , function()
{
    let ee1 = document.getElementById("prev");
    let rr1 = document.getElementById("next");
    ee1.style.display = "block";
    rr1.style.display = "block";
    console.log("hrllo out");
});

let c6 = document.getElementById("next");
let gloa = 1;
c6.addEventListener("click" , function()
{
    gloa +=1;
    if(gloa==1)
    {
        let ee11 = document.getElementById("im1");
        ee11.innerHTML =' <a target="_blank" href="https://www.youtube.com"><img src=" https://conaturalintl.com/cdn/shop/files/2_7758d563-199c-44b8-9f6e-e2da31e9ed8b.png" width="100%" id="w111"/></a>';
        console.log("link");
        let rq01 = document.getElementById("mus1");
        let rq02 = document.getElementById("mus2");
        let rq03 = document.getElementById("mus3");
        rq01.style.backgroundColor="black";
        rq02.style.backgroundColor="grey";
        rq03.style.backgroundColor="grey";
    }
    else if(gloa==2)
    {
        let ee11 = document.getElementById("im1");
        ee11.innerHTML =' <img src=" https://conaturalintl.com/cdn/shop/files/banner_1_for_men.png" width="100%"></img>';
        let rq01 = document.getElementById("mus1");
        let rq02 = document.getElementById("mus2");
        let rq03 = document.getElementById("mus3");
        rq01.style.backgroundColor="grey";
        rq02.style.backgroundColor="black";
        rq03.style.backgroundColor="grey";
    }
    else{
        let ee11 = document.getElementById("im1");
        ee11.innerHTML ='<img src="https://conaturalintl.com/cdn/shop/files/op_232.png?v=1689235122&width=2200%202200w" width="100%"></img>';
        gloa=0;
        let rq01 = document.getElementById("mus1");
        let rq02 = document.getElementById("mus2");
        let rq03 = document.getElementById("mus3");
        rq01.style.backgroundColor="grey";
        rq02.style.backgroundColor="grey";
        rq03.style.backgroundColor="black";
    }
});

let c7 = document.getElementById("prev");
c7.addEventListener("click" , function()
{
    gloa -=1;
    if(gloa==1)
    {
        let ee11 = document.getElementById("im1");
        ee11.innerHTML =' <a href="https://www.youtube.com"><img src=" https://conaturalintl.com/cdn/shop/files/2_7758d563-199c-44b8-9f6e-e2da31e9ed8b.png" width="100%" id="w111"></a>';
        let rq01 = document.getElementById("mus1");
        let rq02 = document.getElementById("mus2");
        let rq03 = document.getElementById("mus3");
        rq01.style.backgroundColor="black";
        rq02.style.backgroundColor="grey";
        rq03.style.backgroundColor="grey";
    }
    else if(gloa==2)
    {
        let ee11 = document.getElementById("im1");
        ee11.innerHTML =' <img src=" https://conaturalintl.com/cdn/shop/files/banner_1_for_men.png" width="100%"></img>';
        let rq01 = document.getElementById("mus1");
        let rq02 = document.getElementById("mus2");
        let rq03 = document.getElementById("mus3");
        rq01.style.backgroundColor="grey";
        rq02.style.backgroundColor="black";
        rq03.style.backgroundColor="grey";
    }
    else{
        let ee11 = document.getElementById("im1");
        ee11.innerHTML ='<img src="https://conaturalintl.com/cdn/shop/files/op_232.png?v=1689235122&width=2200%202200w" width="100%"></img>';
        gloa=3;
        let rq01 = document.getElementById("mus1");
        let rq02 = document.getElementById("mus2");
        let rq03 = document.getElementById("mus3");
        rq01.style.backgroundColor="grey";
        rq02.style.backgroundColor="grey";
        rq03.style.backgroundColor="black";
    }
});

let rq = document.getElementById("mus1");
rq.addEventListener("click" , function()
{
    let ee1 = document.getElementById("prev");
    let rr1 = document.getElementById("next");
    ee1.style.display = "block";
    rr1.style.display = "block";
    console.log("hello from dots");
    gloa = 1;
    let ff = document.getElementById("im1");
    rq.style.backgroundColor="black";
    let rq4 = document.getElementById("mus2");
    let rq5 = document.getElementById("mus3");
    rq4.style.backgroundColor="grey";
    rq5.style.backgroundColor="grey";
    ff.innerHTML = ' <a href="https://www.youtube.com"><img src=" https://conaturalintl.com/cdn/shop/files/2_7758d563-199c-44b8-9f6e-e2da31e9ed8b.png" width="100%" id="w111"></a>';
});

let rq1 = document.getElementById("mus2");
rq1.addEventListener("click" , function()
{
    let ee1 = document.getElementById("prev");
    let rr1 = document.getElementById("next");
    ee1.style.display = "block";
    rr1.style.display = "block";
    gloa = 2;
    let ff = document.getElementById("im1");
    ff.innerHTML = ' <img src=" https://conaturalintl.com/cdn/shop/files/banner_1_for_men.png" width="100%"></img>';
    rq1.style.backgroundColor="black";
    let rq4 = document.getElementById("mus1");
    let rq5 = document.getElementById("mus3");
    rq4.style.backgroundColor="grey";
    rq5.style.backgroundColor="grey";
});

let rq2 = document.getElementById("mus3");
rq2.addEventListener("click" , function()
{
    let ee1 = document.getElementById("prev");
    let rr1 = document.getElementById("next");
    ee1.style.display = "block";
    rr1.style.display = "block";
    gloa = 3;
    let ff = document.getElementById("im1");
    ff.innerHTML = '<img src="https://conaturalintl.com/cdn/shop/files/op_232.png?v=1689235122&width=2200%202200w" width="100%"></img>';
    rq2.style.backgroundColor="black";
    let rq4 = document.getElementById("mus2");
    let rq5 = document.getElementById("mus1");
    rq4.style.backgroundColor="grey";
    rq5.style.backgroundColor="grey";
});

let rq6 = document.getElementById("mus3");
rq6.addEventListener("mouseenter" , function()
{
    let ee1 = document.getElementById("prev");
    let rr1 = document.getElementById("next");
    ee1.style.display = "block";
    rr1.style.display = "block";
});

let rq7 = document.getElementById("mus2");
rq7.addEventListener("mouseenter" , function()
{
    let ee1 = document.getElementById("prev");
    let rr1 = document.getElementById("next");
    ee1.style.display = "block";
    rr1.style.display = "block";
});

let rq8 = document.getElementById("mus1");
rq8.addEventListener("mouseenter" , function()
{
    let ee1 = document.getElementById("prev");
    let rr1 = document.getElementById("next");
    ee1.style.display = "block";
    rr1.style.display = "block";
});

let df = document.getElementById("im1");

    setInterval(function()
    {
        gloa +=1;
    if(gloa==1)
    {
        df.innerHTML =' <a target="_blank" href="https://www.youtube.com"><img src=" https://conaturalintl.com/cdn/shop/files/2_7758d563-199c-44b8-9f6e-e2da31e9ed8b.png" width="100%" id="w111"/></a>';
        console.log("link");
        let rq01 = document.getElementById("mus1");
        let rq02 = document.getElementById("mus2");
        let rq03 = document.getElementById("mus3");
        rq01.style.backgroundColor="black";
        rq02.style.backgroundColor="grey";
        rq03.style.backgroundColor="grey";
    }
    else if(gloa==2)
    {
        
        df.innerHTML =' <img src=" https://conaturalintl.com/cdn/shop/files/banner_1_for_men.png" width="100%"></img>';
        let rq01 = document.getElementById("mus1");
        let rq02 = document.getElementById("mus2");
        let rq03 = document.getElementById("mus3");
        rq01.style.backgroundColor="grey";
        rq02.style.backgroundColor="black";
        rq03.style.backgroundColor="grey";
    }
    else{
        df.innerHTML ='<img src="https://conaturalintl.com/cdn/shop/files/op_232.png?v=1689235122&width=2200%202200w" width="100%"></img>';
        gloa=0;
        let rq01 = document.getElementById("mus1");
        let rq02 = document.getElementById("mus2");
        let rq03 = document.getElementById("mus3");
        rq01.style.backgroundColor="grey";
        rq02.style.backgroundColor="grey";
        rq03.style.backgroundColor="black";
    }
    } , 20000);

    
    let bu = document.getElementById("next2");
    let glob = 1;
    let g1 = document.getElementById("fer1");
    g1 = g1.innerHTML;
    let g2 = document.getElementById("fer2");
    g2 = g2.innerHTML;
    let g3 = document.getElementById("fer3");
    g3 = g3.innerHTML;
    let g4 = document.getElementById("fer4");
    g4 = g4.innerHTML;
    let g5 = document.getElementById("fer5");
    g5 = g5.innerHTML;
    let g6 = document.getElementById("fer6");
    g6 = g6.innerHTML;

    bu.addEventListener("click" , function()
    {

       
        if(glob == 1)
        {
            let g11 = document.getElementById("fer1");
            g11.innerHTML = g2;
            console.log(g2);
            let g12 = document.getElementById("fer2");
            g12.innerHTML = g3;
            let g13 = document.getElementById("fer3");
            g13.innerHTML = g4;
            let g14 = document.getElementById("fer4");
            g14.innerHTML = g5;

        }
        else if(glob == 2)
        {
            let g11 = document.getElementById("fer1");
            g11.innerHTML = g3;
            console.log(g2);
            let g12 = document.getElementById("fer2");
            g12.innerHTML = g4;
            let g13 = document.getElementById("fer3");
            g13.innerHTML = g5;
            let g14 = document.getElementById("fer4");
            g14.innerHTML = g6;
        }
        else if(glob == 3)
        {
            let g11 = document.getElementById("fer1");
            g11.innerHTML = g4;
            console.log(g2);
            let g12 = document.getElementById("fer2");
            g12.innerHTML = g5;
            let g13 = document.getElementById("fer3");
            g13.innerHTML = g6;
            let g14 = document.getElementById("fer4");
            g14.innerHTML = g1;
        }
        else if(glob == 4)
        {
            let g11 = document.getElementById("fer1");
            g11.innerHTML = g5;
            console.log(g2);
            let g12 = document.getElementById("fer2");
            g12.innerHTML = g6;
            let g13 = document.getElementById("fer3");
            g13.innerHTML = g1;
            let g14 = document.getElementById("fer4");
            g14.innerHTML = g2;
        }
        else if(glob == 5)
        {
            let g11 = document.getElementById("fer1");
            g11.innerHTML = g6;
            console.log(g2);
            let g12 = document.getElementById("fer2");
            g12.innerHTML = g1;
            let g13 = document.getElementById("fer3");
            g13.innerHTML = g2;
            let g14 = document.getElementById("fer4");
            g14.innerHTML = g3;
        }
        else if(glob == 6)
        {
            let g11 = document.getElementById("fer1");
            g11.innerHTML = g1;
            console.log(g2);
            let g12 = document.getElementById("fer2");
            g12.innerHTML = g2;
            let g13 = document.getElementById("fer3");
            g13.innerHTML = g3;
            let g14 = document.getElementById("fer4");
            g14.innerHTML = g4;
            glob = 0;
        }

        glob += 1;
    });


    let bq = document.getElementById("prev2");
    
    bq.addEventListener("click" , function()
    {

       
        if(glob == 1)
        {
            let g11 = document.getElementById("fer1");
            g11.innerHTML = g2;
            console.log(g2);
            let g12 = document.getElementById("fer2");
            g12.innerHTML = g3;
            let g13 = document.getElementById("fer3");
            g13.innerHTML = g4;
            let g14 = document.getElementById("fer4");
            g14.innerHTML = g5;
        }
        else if(glob == 2)
        {
            let g11 = document.getElementById("fer1");
            g11.innerHTML = g3;
            console.log(g2);
            let g12 = document.getElementById("fer2");
            g12.innerHTML = g4;
            let g13 = document.getElementById("fer3");
            g13.innerHTML = g5;
            let g14 = document.getElementById("fer4");
            g14.innerHTML = g6;
        }
        else if(glob == 3)
        {
            let g11 = document.getElementById("fer1");
            g11.innerHTML = g4;
            console.log(g2);
            let g12 = document.getElementById("fer2");
            g12.innerHTML = g5;
            let g13 = document.getElementById("fer3");
            g13.innerHTML = g6;
            let g14 = document.getElementById("fer4");
            g14.innerHTML = g1;
        }
        else if(glob == 4)
        {
            let g11 = document.getElementById("fer1");
            g11.innerHTML = g5;
            console.log(g2);
            let g12 = document.getElementById("fer2");
            g12.innerHTML = g6;
            let g13 = document.getElementById("fer3");
            g13.innerHTML = g1;
            let g14 = document.getElementById("fer4");
            g14.innerHTML = g2;
        }
        else if(glob == 5)
        {
            let g11 = document.getElementById("fer1");
            g11.innerHTML = g6;
            console.log(g2);
            let g12 = document.getElementById("fer2");
            g12.innerHTML = g1;
            let g13 = document.getElementById("fer3");
            g13.innerHTML = g2;
            let g14 = document.getElementById("fer4");
            g14.innerHTML = g3;
        }
        else if(glob == 6)
        {
            let g11 = document.getElementById("fer1");
            g11.innerHTML = g1;
            console.log(g2);
            let g12 = document.getElementById("fer2");
            g12.innerHTML = g2;
            let g13 = document.getElementById("fer3");
            g13.innerHTML = g3;
            let g14 = document.getElementById("fer4");
            g14.innerHTML = g4;
            glob=1;
        }
        glob+=1;
    });
    
    let comp1 = document.getElementById("i1");
    let comp2 = comp1.src;
    let comp3 = document.getElementById("i1");
    comp1.addEventListener("mouseenter" , function()
    {
        console.log("hello my grid" , comp2);
        comp1.src = "https://conaturalintl.com/cdn/shop/products/BESTSELLERSAFFRON.jpg";
    });

    comp3.addEventListener("mouseout" , function()
    {
        console.log("hello my grid out");
        comp1.src = comp2;
    });

