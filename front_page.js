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
    
    setInterval(function()
    {
        let comp1 = document.getElementById("i1");
        let comp3 = document.getElementById("i1");
        comp1.addEventListener("mouseenter" , function()
        {
            document.getElementById("ss0").classList.remove("sho");
            document.getElementById("ss1").classList.remove("sho");
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
            document.getElementById("g1").classList.remove("sho");
            document.getElementById("ss0").classList.add("sho1");
            document.getElementById("ss1").classList.add("sho1");
            document.getElementById("g1").classList.add("sho1");
            document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");

            comp1.src = "https://conaturalintl.com/cdn/shop/products/BESTSELLERSAFFRON.jpg";
        });
    
        comp3.addEventListener("mouseout" , function()
        {
            document.getElementById("ss0").classList.remove("sho1");
            document.getElementById("ss1").classList.remove("sho1");
            document.getElementById("next2").classList.remove("sho1");
            document.getElementById("prev2").classList.remove("sho1");

            document.getElementById("g1").classList.remove("sho1");
            document.getElementById("ss0").classList.add("sho");
            document.getElementById("ss1").classList.add("sho");
            document.getElementById("g1").classList.add("sho");
            document.getElementById("next2").classList.add("sho");
            document.getElementById("prev2").classList.add("sho");

            comp1.src = "https://conaturalintl.com/cdn/shop/products/Saffronface2_eca5cee2-47ab-458c-a638-c08582e7d5b8.jpg";
        });

        let rd = document.getElementById("ss0");
        rd.addEventListener("mouseenter" , function()
      {
        document.getElementById("i1").src = "https://conaturalintl.com/cdn/shop/products/BESTSELLERSAFFRON.jpg";
        document.getElementById("ss0").classList.remove("sho");
        document.getElementById("ss1").classList.remove("sho");
        document.getElementById("g1").classList.remove("sho");
        document.getElementById("ss0").classList.add("sho1");
        document.getElementById("ss1").classList.add("sho1");
        document.getElementById("g1").classList.add("sho1");
      });

      rd.addEventListener("mouseout" , function()
      {
        document.getElementById("ss0").classList.remove("sho1");
            document.getElementById("ss1").classList.remove("sho1");
            document.getElementById("g1").classList.remove("sho1");
            document.getElementById("ss0").classList.add("sho");
            document.getElementById("ss1").classList.add("sho");
            document.getElementById("g1").classList.add("sho");
        document.getElementById("i1").src = "https://conaturalintl.com/cdn/shop/products/Saffronface2_eca5cee2-47ab-458c-a638-c08582e7d5b8.jpg";
      });

      let rd1 = document.getElementById("ss1");
        rd1.addEventListener("mouseenter" , function()
      {
        document.getElementById("i1").src = "https://conaturalintl.com/cdn/shop/products/BESTSELLERSAFFRON.jpg";
        document.getElementById("ss0").classList.remove("sho");
            document.getElementById("ss1").classList.remove("sho");
            document.getElementById("g1").classList.remove("sho");
            document.getElementById("ss0").classList.add("sho1");
            document.getElementById("ss1").classList.add("sho1");
            document.getElementById("g1").classList.add("sho1");
      });

      rd1.addEventListener("mouseout" , function()
      {
        document.getElementById("ss0").classList.remove("sho1");
            document.getElementById("ss1").classList.remove("sho1");
            document.getElementById("g1").classList.remove("sho1");
            document.getElementById("ss0").classList.add("sho");
            document.getElementById("ss1").classList.add("sho");
            document.getElementById("g1").classList.add("sho");
        document.getElementById("i1").src = "https://conaturalintl.com/cdn/shop/products/Saffronface2_eca5cee2-47ab-458c-a638-c08582e7d5b8.jpg";
      });


      let rd2 = document.getElementById("g1");
        rd2.addEventListener("mouseenter" , function()
      {
        document.getElementById("i1").src = "https://conaturalintl.com/cdn/shop/products/BESTSELLERSAFFRON.jpg";
        document.getElementById("ss0").classList.remove("sho");
            document.getElementById("ss1").classList.remove("sho");
            document.getElementById("g1").classList.remove("sho");
            document.getElementById("ss0").classList.add("sho1");
            document.getElementById("ss1").classList.add("sho1");
            document.getElementById("g1").classList.add("sho1");
      });

      rd2.addEventListener("mouseout" , function()
      {
        document.getElementById("ss0").classList.remove("sho1");
            document.getElementById("ss1").classList.remove("sho1");
            document.getElementById("g1").classList.remove("sho1");
            document.getElementById("ss0").classList.add("sho");
            document.getElementById("ss1").classList.add("sho");
            document.getElementById("g1").classList.add("sho");
        document.getElementById("i1").src = "https://conaturalintl.com/cdn/shop/products/Saffronface2_eca5cee2-47ab-458c-a638-c08582e7d5b8.jpg";
      });

      let rd3 = document.getElementById("prev2");
      rd3.addEventListener("mouseenter" , function()
    {
      document.getElementById("i1").src = "https://conaturalintl.com/cdn/shop/products/BESTSELLERSAFFRON.jpg";
      document.getElementById("ss0").classList.remove("sho");
      document.getElementById("ss1").classList.remove("sho");
      document.getElementById("next2").classList.remove("sho");
      document.getElementById("prev2").classList.remove("sho");

      document.getElementById("g1").classList.remove("sho");
      document.getElementById("ss0").classList.add("sho1");
      document.getElementById("ss1").classList.add("sho1");
      document.getElementById("g1").classList.add("sho1");
      document.getElementById("next2").classList.add("sho1");
      document.getElementById("prev2").classList.add("sho1");

    });

    rd3.addEventListener("mouseout" , function()
    {
        document.getElementById("ss0").classList.remove("sho1");
        document.getElementById("ss1").classList.remove("sho1");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

        document.getElementById("g1").classList.remove("sho1");
        document.getElementById("ss0").classList.add("sho");
        document.getElementById("ss1").classList.add("sho");
        document.getElementById("g1").classList.add("sho");
        document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");

      document.getElementById("i1").src = "https://conaturalintl.com/cdn/shop/products/Saffronface2_eca5cee2-47ab-458c-a638-c08582e7d5b8.jpg";
    });
    let rd4 = document.getElementById("next2");
    rd4.addEventListener("mouseenter" , function()
  {
    document.getElementById("i1").src = "https://conaturalintl.com/cdn/shop/products/BESTSELLERSAFFRON.jpg";
    document.getElementById("ss0").classList.remove("sho");
    document.getElementById("ss1").classList.remove("sho");
    document.getElementById("next2").classList.remove("sho");
    document.getElementById("prev2").classList.remove("sho");

    document.getElementById("g1").classList.remove("sho");
    document.getElementById("ss0").classList.add("sho1");
    document.getElementById("ss1").classList.add("sho1");
    document.getElementById("g1").classList.add("sho1");
    document.getElementById("next2").classList.add("sho1");
    document.getElementById("prev2").classList.add("sho1");

  });

  rd4.addEventListener("mouseout" , function()
  {
      document.getElementById("ss0").classList.remove("sho1");
      document.getElementById("ss1").classList.remove("sho1");
      document.getElementById("next2").classList.remove("sho1");
      document.getElementById("prev2").classList.remove("sho1");

      document.getElementById("g1").classList.remove("sho1");
      document.getElementById("ss0").classList.add("sho");
      document.getElementById("ss1").classList.add("sho");
      document.getElementById("g1").classList.add("sho");
      document.getElementById("next2").classList.add("sho");
      document.getElementById("prev2").classList.add("sho");

    document.getElementById("i1").src = "https://conaturalintl.com/cdn/shop/products/Saffronface2_eca5cee2-47ab-458c-a638-c08582e7d5b8.jpg";
  });

    } , 0);
    
    setInterval(function()
    {
        let comp11 = document.getElementById("i2");
        
        let comp31 = document.getElementById("i2");
        comp11.addEventListener("mouseenter" , function()
        {
            document.getElementById("ss2").classList.remove("sho");
            document.getElementById("g2").classList.remove("sho");
            document.getElementById("ss3").classList.remove("sho");
            document.getElementById("ss2").classList.add("sho1");
            document.getElementById("ss3").classList.add("sho1");
            document.getElementById("g2").classList.add("sho1");
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");



            comp11.src = "https://conaturalintl.com/cdn/shop/products/Intensegrowth.jpg";

        });
    
        comp31.addEventListener("mouseout" , function()
        {
            document.getElementById("ss2").classList.remove("sho1");
            document.getElementById("ss3").classList.remove("sho1");
            document.getElementById("g2").classList.remove("sho1");

            document.getElementById("ss2").classList.add("sho");
            document.getElementById("ss3").classList.add("sho");
            document.getElementById("g2").classList.add("sho");
            document.getElementById("next2").classList.remove("sho1");
            document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
            document.getElementById("prev2").classList.add("sho");
            comp11.src = "https://conaturalintl.com/cdn/shop/products/Intensegrowthface.jpg" ;
        });
  
        let rd = document.getElementById("ss2");
        rd.addEventListener("mouseenter" , function()
      {
        document.getElementById("ss2").classList.remove("sho");
        document.getElementById("g2").classList.remove("sho");
        document.getElementById("ss3").classList.remove("sho");
        document.getElementById("ss2").classList.add("sho1");
        document.getElementById("ss3").classList.add("sho1");
        document.getElementById("g2").classList.add("sho1");
        document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");





           document.getElementById("i2").src = "https://conaturalintl.com/cdn/shop/products/Intensegrowth.jpg";

      });

      rd.addEventListener("mouseout" , function()
      {
        document.getElementById("ss2").classList.remove("sho1");
        document.getElementById("ss3").classList.remove("sho1");
        document.getElementById("g2").classList.remove("sho1");

        document.getElementById("ss2").classList.add("sho");
        document.getElementById("ss3").classList.add("sho");
        document.getElementById("g2").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
            document.getElementById("i2").src  = "https://conaturalintl.com/cdn/shop/products/Intensegrowthface.jpg" ;
        
      });

      let rd1 = document.getElementById("ss3");
        rd1.addEventListener("mouseenter" , function()
      {
        document.getElementById("ss2").classList.remove("sho");
        document.getElementById("g2").classList.remove("sho");
        document.getElementById("ss3").classList.remove("sho");
        document.getElementById("ss2").classList.add("sho1");
        document.getElementById("ss3").classList.add("sho1");
        document.getElementById("g2").classList.add("sho1");
        document.getElementById("next2").classList.remove("sho");
        document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
        document.getElementById("prev2").classList.add("sho1");





           document.getElementById("i2").src = "https://conaturalintl.com/cdn/shop/products/Intensegrowth.jpg";

      });

      rd1.addEventListener("mouseout" , function()
      {
        document.getElementById("ss2").classList.remove("sho1");
            document.getElementById("ss3").classList.remove("sho1");
            document.getElementById("g2").classList.remove("sho1");

            document.getElementById("ss2").classList.add("sho");
            document.getElementById("ss3").classList.add("sho");
            document.getElementById("g2").classList.add("sho");
            document.getElementById("next2").classList.remove("sho1");
            document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
            document.getElementById("prev2").classList.add("sho");
            document.getElementById("i2").src  = "https://conaturalintl.com/cdn/shop/products/Intensegrowthface.jpg" ;
        
      });

      let rd2 = document.getElementById("g2");
        rd2.addEventListener("mouseenter" , function()
      {
        document.getElementById("ss2").classList.remove("sho");
        document.getElementById("g2").classList.remove("sho");
        document.getElementById("ss3").classList.remove("sho");
        document.getElementById("ss2").classList.add("sho1");
        document.getElementById("ss3").classList.add("sho1");
        document.getElementById("g2").classList.add("sho1");
        document.getElementById("next2").classList.remove("sho");
        document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
        document.getElementById("prev2").classList.add("sho1");





           document.getElementById("i2").src = "https://conaturalintl.com/cdn/shop/products/Intensegrowth.jpg";

      });

      rd2.addEventListener("mouseout" , function()
      {
        document.getElementById("ss2").classList.remove("sho1");
            document.getElementById("ss3").classList.remove("sho1");
            document.getElementById("g2").classList.remove("sho1");

            document.getElementById("ss2").classList.add("sho");
            document.getElementById("ss3").classList.add("sho");
            document.getElementById("g2").classList.add("sho");
            document.getElementById("next2").classList.remove("sho1");
            document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
            document.getElementById("prev2").classList.add("sho");
            document.getElementById("i2").src  = "https://conaturalintl.com/cdn/shop/products/Intensegrowthface.jpg" ;
        
      });


      let rd3 = document.getElementById("prev2");
      rd3.addEventListener("mouseenter" , function()
    {
        document.getElementById("ss2").classList.remove("sho");
        document.getElementById("g2").classList.remove("sho");
        document.getElementById("ss3").classList.remove("sho");
        document.getElementById("ss2").classList.add("sho1");
        document.getElementById("ss3").classList.add("sho1");
        document.getElementById("g2").classList.add("sho1");
        document.getElementById("next2").classList.remove("sho");
        document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
        document.getElementById("prev2").classList.add("sho1");





           document.getElementById("i2").src = "https://conaturalintl.com/cdn/shop/products/Intensegrowth.jpg";


    });

    rd3.addEventListener("mouseout" , function()
    {
        document.getElementById("ss2").classList.remove("sho1");
            document.getElementById("ss3").classList.remove("sho1");
            document.getElementById("g2").classList.remove("sho1");

            document.getElementById("ss2").classList.add("sho");
            document.getElementById("ss3").classList.add("sho");
            document.getElementById("g2").classList.add("sho");
            document.getElementById("next2").classList.remove("sho1");
            document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
            document.getElementById("prev2").classList.add("sho");
            document.getElementById("i2").src  = "https://conaturalintl.com/cdn/shop/products/Intensegrowthface.jpg" ;
        
    });
    let rd4 = document.getElementById("next2");
    rd4.addEventListener("mouseenter" , function()
  {
    document.getElementById("ss2").classList.remove("sho");
        document.getElementById("g2").classList.remove("sho");
        document.getElementById("ss3").classList.remove("sho");
        document.getElementById("ss2").classList.add("sho1");
        document.getElementById("ss3").classList.add("sho1");
        document.getElementById("g2").classList.add("sho1");
        document.getElementById("next2").classList.remove("sho");
        document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
        document.getElementById("prev2").classList.add("sho1");





           document.getElementById("i2").src = "https://conaturalintl.com/cdn/shop/products/Intensegrowth.jpg";



  });

  rd4.addEventListener("mouseout" , function()
  {
    document.getElementById("ss2").classList.remove("sho1");
    document.getElementById("ss3").classList.remove("sho1");
    document.getElementById("g2").classList.remove("sho1");

    document.getElementById("ss2").classList.add("sho");
    document.getElementById("ss3").classList.add("sho");
    document.getElementById("g2").classList.add("sho");
    document.getElementById("next2").classList.remove("sho1");
    document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
    document.getElementById("prev2").classList.add("sho");
    document.getElementById("i2").src  = "https://conaturalintl.com/cdn/shop/products/Intensegrowthface.jpg" ;

  });

    } , 0);

    setInterval(function()
    {
        let comp12 = document.getElementById("i3");
        let comp32 = document.getElementById("i3");
        comp12.addEventListener("mouseenter" , function()
        {
            document.getElementById("ss4").classList.remove("sho");
            document.getElementById("ss5").classList.remove("sho");
            document.getElementById("g3").classList.remove("sho");

            document.getElementById("ss4").classList.add("sho1");
            document.getElementById("ss5").classList.add("sho1");
            document.getElementById("g3").classList.add("sho1");
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");





            comp12.src = "https://conaturalintl.com/cdn/shop/products/Teatreefw_10f48fb1-7304-4906-89a0-a9b5b66819d6.jpg";

        });
    
        comp32.addEventListener("mouseout" , function()
        {
            document.getElementById("ss4").classList.remove("sho1");
            document.getElementById("ss5").classList.remove("sho1");
            document.getElementById("g3").classList.remove("sho1");

            document.getElementById("ss4").classList.add("sho");
            document.getElementById("ss5").classList.add("sho");
            document.getElementById("g3").classList.add("sho");
            document.getElementById("next2").classList.remove("sho1");
            document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
            document.getElementById("prev2").classList.add("sho");
            comp12.src = "https://conaturalintl.com/cdn/shop/products/Teatreefacewashface.jpg";

        });
  
        let rd = document.getElementById("ss4");
        rd.addEventListener("mouseenter" , function()
      {
        document.getElementById("ss4").classList.remove("sho");
            document.getElementById("ss5").classList.remove("sho");
            document.getElementById("g3").classList.remove("sho");

            document.getElementById("ss4").classList.add("sho1");
            document.getElementById("ss5").classList.add("sho1");
            document.getElementById("g3").classList.add("sho1");
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");





           document.getElementById("i3").src= "https://conaturalintl.com/cdn/shop/products/Teatreefw_10f48fb1-7304-4906-89a0-a9b5b66819d6.jpg";

      });

      rd.addEventListener("mouseout" , function()
      {
        document.getElementById("ss4").classList.remove("sho1");
        document.getElementById("ss5").classList.remove("sho1");
        document.getElementById("g3").classList.remove("sho1");

        document.getElementById("ss4").classList.add("sho");
        document.getElementById("ss5").classList.add("sho");
        document.getElementById("g3").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
        document.getElementById("i3").src = "https://conaturalintl.com/cdn/shop/products/Teatreefacewashface.jpg";

      });

      let rd1 = document.getElementById("ss5");
        rd1.addEventListener("mouseenter" , function()
      {
        document.getElementById("ss4").classList.remove("sho");
            document.getElementById("ss5").classList.remove("sho");
            document.getElementById("g3").classList.remove("sho");

            document.getElementById("ss4").classList.add("sho1");
            document.getElementById("ss5").classList.add("sho1");
            document.getElementById("g3").classList.add("sho1");
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");





           document.getElementById("i3").src= "https://conaturalintl.com/cdn/shop/products/Teatreefw_10f48fb1-7304-4906-89a0-a9b5b66819d6.jpg";

      });

      rd1.addEventListener("mouseout" , function()
      {
        document.getElementById("ss4").classList.remove("sho1");
            document.getElementById("ss5").classList.remove("sho1");
            document.getElementById("g3").classList.remove("sho1");

            document.getElementById("ss4").classList.add("sho");
            document.getElementById("ss5").classList.add("sho");
            document.getElementById("g3").classList.add("sho");
            document.getElementById("next2").classList.remove("sho1");
            document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
            document.getElementById("prev2").classList.add("sho");
        document.getElementById("i3").src = "https://conaturalintl.com/cdn/shop/products/Teatreefacewashface.jpg";

      });

      let rd2 = document.getElementById("g3");
        rd2.addEventListener("mouseenter" , function()
      {
        document.getElementById("ss4").classList.remove("sho");
            document.getElementById("ss5").classList.remove("sho");
            document.getElementById("g3").classList.remove("sho");

            document.getElementById("ss4").classList.add("sho1");
            document.getElementById("ss5").classList.add("sho1");
            document.getElementById("g3").classList.add("sho1");
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");





           document.getElementById("i3").src= "https://conaturalintl.com/cdn/shop/products/Teatreefw_10f48fb1-7304-4906-89a0-a9b5b66819d6.jpg";

      });

      rd2.addEventListener("mouseout" , function()
      {
        document.getElementById("ss4").classList.remove("sho1");
            document.getElementById("ss5").classList.remove("sho1");
            document.getElementById("g3").classList.remove("sho1");

            document.getElementById("ss4").classList.add("sho");
            document.getElementById("ss5").classList.add("sho");
            document.getElementById("g3").classList.add("sho");
            document.getElementById("next2").classList.remove("sho1");
            document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
            document.getElementById("prev2").classList.add("sho");
        document.getElementById("i3").src = "https://conaturalintl.com/cdn/shop/products/Teatreefacewashface.jpg";

      });

      let rd3 = document.getElementById("prev2");
      rd3.addEventListener("mouseenter" , function()
    {
        document.getElementById("ss4").classList.remove("sho");
        document.getElementById("ss5").classList.remove("sho");
        document.getElementById("g3").classList.remove("sho");

        document.getElementById("ss4").classList.add("sho1");
        document.getElementById("ss5").classList.add("sho1");
        document.getElementById("g3").classList.add("sho1");
        document.getElementById("next2").classList.remove("sho");
        document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
        document.getElementById("prev2").classList.add("sho1");





       document.getElementById("i3").src= "https://conaturalintl.com/cdn/shop/products/Teatreefw_10f48fb1-7304-4906-89a0-a9b5b66819d6.jpg";

    });

    rd3.addEventListener("mouseout" , function()
    {
        document.getElementById("ss4").classList.remove("sho1");
            document.getElementById("ss5").classList.remove("sho1");
            document.getElementById("g3").classList.remove("sho1");

            document.getElementById("ss4").classList.add("sho");
            document.getElementById("ss5").classList.add("sho");
            document.getElementById("g3").classList.add("sho");
            document.getElementById("next2").classList.remove("sho1");
            document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
            document.getElementById("prev2").classList.add("sho");
        document.getElementById("i3").src = "https://conaturalintl.com/cdn/shop/products/Teatreefacewashface.jpg";

    });
    let rd4 = document.getElementById("next2");
    rd4.addEventListener("mouseenter" , function()
  {
    document.getElementById("ss4").classList.remove("sho");
            document.getElementById("ss5").classList.remove("sho");
            document.getElementById("g3").classList.remove("sho");

            document.getElementById("ss4").classList.add("sho1");
            document.getElementById("ss5").classList.add("sho1");
            document.getElementById("g3").classList.add("sho1");
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");





           document.getElementById("i3").src= "https://conaturalintl.com/cdn/shop/products/Teatreefw_10f48fb1-7304-4906-89a0-a9b5b66819d6.jpg";


  });

  rd4.addEventListener("mouseout" , function()
  {
    document.getElementById("ss4").classList.remove("sho1");
    document.getElementById("ss5").classList.remove("sho1");
    document.getElementById("g3").classList.remove("sho1");

    document.getElementById("ss4").classList.add("sho");
    document.getElementById("ss5").classList.add("sho");
    document.getElementById("g3").classList.add("sho");
    document.getElementById("next2").classList.remove("sho1");
    document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
    document.getElementById("prev2").classList.add("sho");
document.getElementById("i3").src = "https://conaturalintl.com/cdn/shop/products/Teatreefacewashface.jpg";

  });
    } , 0);

    setInterval(function()
    {
        let comp13 = document.getElementById("i4");
        let comp33 = document.getElementById("i4");
        comp13.addEventListener("mouseenter" , function()
        { 
            document.getElementById("ss6").classList.remove("sho");
            document.getElementById("ss7").classList.remove("sho");
            document.getElementById("g4").classList.remove("sho");

            document.getElementById("ss6").classList.add("sho1");
            document.getElementById("ss7").classList.add("sho1");
            document.getElementById("g4").classList.add("sho1");
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");






            comp13.src = "https://conaturalintl.com/cdn/shop/products/2.-Bottle-Back_9c039886-d2fc-42cf-a547-5b3516fcc47e.jpg";
        });
    
        comp33.addEventListener("mouseout" , function()
        {
            document.getElementById("ss6").classList.remove("sho1");
            document.getElementById("ss7").classList.remove("sho1");
            document.getElementById("g4").classList.remove("sho1");

            document.getElementById("ss6").classList.add("sho");
            document.getElementById("ss7").classList.add("sho");
            document.getElementById("g4").classList.add("sho");
            document.getElementById("next2").classList.remove("sho1");
            document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
            document.getElementById("prev2").classList.add("sho");
            comp13.src = "https://conaturalintl.com/cdn/shop/products/1.-Bottle-Front_c1abd5c4-9cf3-43e3-94ce-80d7e83b4d9a.jpg";
        });

        let rd = document.getElementById("ss6");
        rd.addEventListener("mouseenter" , function()
      {
        document.getElementById("ss6").classList.remove("sho");
            document.getElementById("ss7").classList.remove("sho");
            document.getElementById("g4").classList.remove("sho");

            document.getElementById("ss6").classList.add("sho1");
            document.getElementById("ss7").classList.add("sho1");
            document.getElementById("g4").classList.add("sho1");
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");






        document.getElementById("i4").src = "https://conaturalintl.com/cdn/shop/products/2.-Bottle-Back_9c039886-d2fc-42cf-a547-5b3516fcc47e.jpg";
    
      });

      rd.addEventListener("mouseout" , function()
      {
        document.getElementById("ss6").classList.remove("sho1");
        document.getElementById("ss7").classList.remove("sho1");
        document.getElementById("g4").classList.remove("sho1");

        document.getElementById("ss6").classList.add("sho");
        document.getElementById("ss7").classList.add("sho");
        document.getElementById("g4").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
            document.getElementById("i4").src = "https://conaturalintl.com/cdn/shop/products/1.-Bottle-Front_c1abd5c4-9cf3-43e3-94ce-80d7e83b4d9a.jpg";
        
      });

      let rd1 = document.getElementById("ss7");
      rd1.addEventListener("mouseenter" , function()
    {
        document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");






        document.getElementById("ss6").classList.remove("sho");
        document.getElementById("ss7").classList.remove("sho");
        document.getElementById("g4").classList.remove("sho");

        document.getElementById("ss6").classList.add("sho1");
        document.getElementById("ss7").classList.add("sho1");
        document.getElementById("g4").classList.add("sho1");

      document.getElementById("i4").src = "https://conaturalintl.com/cdn/shop/products/2.-Bottle-Back_9c039886-d2fc-42cf-a547-5b3516fcc47e.jpg";
  
    });

    rd1.addEventListener("mouseout" , function()
    {
        document.getElementById("ss6").classList.remove("sho1");
        document.getElementById("ss7").classList.remove("sho1");
        document.getElementById("g4").classList.remove("sho1");

        document.getElementById("ss6").classList.add("sho");
        document.getElementById("ss7").classList.add("sho");
        document.getElementById("g4").classList.add("sho");

          document.getElementById("i4").src = "https://conaturalintl.com/cdn/shop/products/1.-Bottle-Front_c1abd5c4-9cf3-43e3-94ce-80d7e83b4d9a.jpg";
          document.getElementById("next2").classList.remove("sho1");
          document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
          document.getElementById("prev2").classList.add("sho");
    });


    let rd2 = document.getElementById("g4");
      rd2.addEventListener("mouseenter" , function()
    {
        document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");






        document.getElementById("ss6").classList.remove("sho");
        document.getElementById("ss7").classList.remove("sho");
        document.getElementById("g4").classList.remove("sho");

        document.getElementById("ss6").classList.add("sho1");
        document.getElementById("ss7").classList.add("sho1");
        document.getElementById("g4").classList.add("sho1");

      document.getElementById("i4").src = "https://conaturalintl.com/cdn/shop/products/2.-Bottle-Back_9c039886-d2fc-42cf-a547-5b3516fcc47e.jpg";
  
    });

    rd2.addEventListener("mouseout" , function()
    {
        document.getElementById("ss6").classList.remove("sho1");
        document.getElementById("ss7").classList.remove("sho1");
        document.getElementById("g4").classList.remove("sho1");

        document.getElementById("ss6").classList.add("sho");
        document.getElementById("ss7").classList.add("sho");
        document.getElementById("g4").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
          document.getElementById("i4").src = "https://conaturalintl.com/cdn/shop/products/1.-Bottle-Front_c1abd5c4-9cf3-43e3-94ce-80d7e83b4d9a.jpg";
      
    });

    let rd3 = document.getElementById("prev2");
      rd3.addEventListener("mouseenter" , function()
    {
        document.getElementById("next2").classList.remove("sho");
        document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
        document.getElementById("prev2").classList.add("sho1");






    document.getElementById("ss6").classList.remove("sho");
    document.getElementById("ss7").classList.remove("sho");
    document.getElementById("g4").classList.remove("sho");

    document.getElementById("ss6").classList.add("sho1");
    document.getElementById("ss7").classList.add("sho1");
    document.getElementById("g4").classList.add("sho1");

  document.getElementById("i4").src = "https://conaturalintl.com/cdn/shop/products/2.-Bottle-Back_9c039886-d2fc-42cf-a547-5b3516fcc47e.jpg";

    });

    rd3.addEventListener("mouseout" , function()
    {
        document.getElementById("ss6").classList.remove("sho1");
        document.getElementById("ss7").classList.remove("sho1");
        document.getElementById("g4").classList.remove("sho1");

        document.getElementById("ss6").classList.add("sho");
        document.getElementById("ss7").classList.add("sho");
        document.getElementById("g4").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
          document.getElementById("i4").src = "https://conaturalintl.com/cdn/shop/products/1.-Bottle-Front_c1abd5c4-9cf3-43e3-94ce-80d7e83b4d9a.jpg";
      
    });
    let rd4 = document.getElementById("next2");
    rd4.addEventListener("mouseenter" , function()
  {
    document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");






        document.getElementById("ss6").classList.remove("sho");
        document.getElementById("ss7").classList.remove("sho");
        document.getElementById("g4").classList.remove("sho");

        document.getElementById("ss6").classList.add("sho1");
        document.getElementById("ss7").classList.add("sho1");
        document.getElementById("g4").classList.add("sho1");

      document.getElementById("i4").src = "https://conaturalintl.com/cdn/shop/products/2.-Bottle-Back_9c039886-d2fc-42cf-a547-5b3516fcc47e.jpg";
  

  });

  rd4.addEventListener("mouseout" , function()
  {
    document.getElementById("ss6").classList.remove("sho1");
    document.getElementById("ss7").classList.remove("sho1");
    document.getElementById("g4").classList.remove("sho1");

    document.getElementById("ss6").classList.add("sho");
    document.getElementById("ss7").classList.add("sho");
    document.getElementById("g4").classList.add("sho");
    document.getElementById("next2").classList.remove("sho1");
    document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
    document.getElementById("prev2").classList.add("sho");
      document.getElementById("i4").src = "https://conaturalintl.com/cdn/shop/products/1.-Bottle-Front_c1abd5c4-9cf3-43e3-94ce-80d7e83b4d9a.jpg";
  
  });
    } , 0);

    setInterval(function(){
        
        let comp14 = document.getElementById("i5");
        let comp35 = document.getElementById("i5");
        comp14.addEventListener("mouseenter" , function()
        {
            document.getElementById("ss8").classList.remove("sho");
            document.getElementById("ss9").classList.remove("sho");
            document.getElementById("g5").classList.remove("sho");

            document.getElementById("ss8").classList.add("sho1");
            document.getElementById("ss9").classList.add("sho1");
            document.getElementById("g5").classList.add("sho1");
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");







            document.getElementById("fer5").display = "block";
            comp14.src = "https://conaturalintl.com/cdn/shop/products/website._rose_facewash_small_f721b83e-fd29-41dd-a7bd-14057ae57a6f.jpg";
        });
    
        comp35.addEventListener("mouseout" , function()
        {   document.getElementById("ss8").classList.remove("sho1");
        document.getElementById("ss9").classList.remove("sho1");
        document.getElementById("g5").classList.remove("sho1");

        document.getElementById("ss8").classList.add("sho");
        document.getElementById("ss9").classList.add("sho");
        document.getElementById("g5").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
            document.getElementById("fer5").display = "none";
            comp14.src = "https://conaturalintl.com/cdn/shop/products/Rosefacewashface.jpg";
        });

        let rd = document.getElementById("ss8");
        rd.addEventListener("mouseenter" , function()
      {
        document.getElementById("ss8").classList.remove("sho");
            document.getElementById("ss9").classList.remove("sho");
            document.getElementById("g5").classList.remove("sho");

            document.getElementById("ss8").classList.add("sho1");
            document.getElementById("ss9").classList.add("sho1");
            document.getElementById("g5").classList.add("sho1");

            document.getElementById("fer5").display = "block";
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");







            document.getElementById("i5").src = "https://conaturalintl.com/cdn/shop/products/website._rose_facewash_small_f721b83e-fd29-41dd-a7bd-14057ae57a6f.jpg";
        
      });

      rd.addEventListener("mouseout" , function()
      {
        document.getElementById("ss8").classList.remove("sho1");
        document.getElementById("ss9").classList.remove("sho1");
        document.getElementById("g5").classList.remove("sho1");

        document.getElementById("ss8").classList.add("sho");
        document.getElementById("ss9").classList.add("sho");
        document.getElementById("g5").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
            document.getElementById("fer5").display = "none";
        document.getElementById("i5").src = "https://conaturalintl.com/cdn/shop/products/website._rose_facewash_small_f721b83e-fd29-41dd-a7bd-14057ae57a6f.jpg";
    
      });


      let rd1 = document.getElementById("ss9");
        rd1.addEventListener("mouseenter" , function()
      {
        document.getElementById("ss8").classList.remove("sho");
            document.getElementById("ss9").classList.remove("sho");
            document.getElementById("g5").classList.remove("sho");

            document.getElementById("ss8").classList.add("sho1");
            document.getElementById("ss9").classList.add("sho1");
            document.getElementById("g5").classList.add("sho1");

            document.getElementById("fer5").display = "block";
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");







            document.getElementById("i5").src = "https://conaturalintl.com/cdn/shop/products/website._rose_facewash_small_f721b83e-fd29-41dd-a7bd-14057ae57a6f.jpg";
        
      });

      rd1.addEventListener("mouseout" , function()
      {
        document.getElementById("ss8").classList.remove("sho1");
        document.getElementById("ss9").classList.remove("sho1");
        document.getElementById("g5").classList.remove("sho1");

        document.getElementById("ss8").classList.add("sho");
        document.getElementById("ss9").classList.add("sho");
        document.getElementById("g5").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
            document.getElementById("fer5").display = "none";
        document.getElementById("i5").src = "https://conaturalintl.com/cdn/shop/products/website._rose_facewash_small_f721b83e-fd29-41dd-a7bd-14057ae57a6f.jpg";
    
      });

      let rd2 = document.getElementById("g5");
        rd2.addEventListener("mouseenter" , function()
      {
        document.getElementById("ss8").classList.remove("sho");
            document.getElementById("ss9").classList.remove("sho");
            document.getElementById("g5").classList.remove("sho");

            document.getElementById("ss8").classList.add("sho1");
            document.getElementById("ss9").classList.add("sho1");
            document.getElementById("g5").classList.add("sho1");

            document.getElementById("fer5").display = "block";
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");







            document.getElementById("i5").src = "https://conaturalintl.com/cdn/shop/products/website._rose_facewash_small_f721b83e-fd29-41dd-a7bd-14057ae57a6f.jpg";
        
      });

      rd2.addEventListener("mouseout" , function()
      {
        document.getElementById("ss8").classList.remove("sho1");
        document.getElementById("ss9").classList.remove("sho1");
        document.getElementById("g5").classList.remove("sho1");

        document.getElementById("ss8").classList.add("sho");
        document.getElementById("ss9").classList.add("sho");
        document.getElementById("g5").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
            document.getElementById("fer5").display = "none";
        document.getElementById("i5").src = "https://conaturalintl.com/cdn/shop/products/website._rose_facewash_small_f721b83e-fd29-41dd-a7bd-14057ae57a6f.jpg";
    
      });


      let rd3 = document.getElementById("prev2");
      rd3.addEventListener("mouseenter" , function()
    {
        document.getElementById("ss8").classList.remove("sho");
        document.getElementById("ss9").classList.remove("sho");
        document.getElementById("g5").classList.remove("sho");

        document.getElementById("ss8").classList.add("sho1");
        document.getElementById("ss9").classList.add("sho1");
        document.getElementById("g5").classList.add("sho1");

        document.getElementById("fer5").display = "block";
        document.getElementById("next2").classList.remove("sho");
        document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
        document.getElementById("prev2").classList.add("sho1");







        document.getElementById("i5").src = "https://conaturalintl.com/cdn/shop/products/website._rose_facewash_small_f721b83e-fd29-41dd-a7bd-14057ae57a6f.jpg";
    
    });

    rd3.addEventListener("mouseout" , function()
    {
        document.getElementById("ss8").classList.remove("sho1");
        document.getElementById("ss9").classList.remove("sho1");
        document.getElementById("g5").classList.remove("sho1");

        document.getElementById("ss8").classList.add("sho");
        document.getElementById("ss9").classList.add("sho");
        document.getElementById("g5").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
            document.getElementById("fer5").display = "none";
        document.getElementById("i5").src = "https://conaturalintl.com/cdn/shop/products/website._rose_facewash_small_f721b83e-fd29-41dd-a7bd-14057ae57a6f.jpg";
    
    });
    let rd4 = document.getElementById("next2");
    rd4.addEventListener("mouseenter" , function()
  {
    document.getElementById("ss8").classList.remove("sho");
            document.getElementById("ss9").classList.remove("sho");
            document.getElementById("g5").classList.remove("sho");

            document.getElementById("ss8").classList.add("sho1");
            document.getElementById("ss9").classList.add("sho1");
            document.getElementById("g5").classList.add("sho1");

            document.getElementById("fer5").display = "block";
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");







            document.getElementById("i5").src = "https://conaturalintl.com/cdn/shop/products/website._rose_facewash_small_f721b83e-fd29-41dd-a7bd-14057ae57a6f.jpg";
        

  });

  rd4.addEventListener("mouseout" , function()
  {
    document.getElementById("ss8").classList.remove("sho1");
    document.getElementById("ss9").classList.remove("sho1");
    document.getElementById("g5").classList.remove("sho1");

    document.getElementById("ss8").classList.add("sho");
    document.getElementById("ss9").classList.add("sho");
    document.getElementById("g5").classList.add("sho");
    document.getElementById("next2").classList.remove("sho1");
    document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
    document.getElementById("prev2").classList.add("sho");
        document.getElementById("fer5").display = "none";
    document.getElementById("i5").src = "https://conaturalintl.com/cdn/shop/products/website._rose_facewash_small_f721b83e-fd29-41dd-a7bd-14057ae57a6f.jpg";

  });
    } , 0);

    setInterval(function()
    {
        let comp16 = document.getElementById("i6");
        let comp36 = document.getElementById("i6");
        comp16.addEventListener("mouseenter" , function()
        {       
            document.getElementById("ss10").classList.remove("sho");
            document.getElementById("ss11").classList.remove("sho");
            document.getElementById("g6").classList.remove("sho");

            document.getElementById("ss10").classList.add("sho1");
            document.getElementById("ss11").classList.add("sho1");     
            document.getElementById("g6").classList.add("sho1");     

            document.getElementById("fer6").display = "block";
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");

            comp16.src = "https://conaturalintl.com/cdn/shop/products/Hairgrowthshampoo.jpg";
        });
    
        comp36.addEventListener("mouseout" , function()
        {
            document.getElementById("ss10").classList.remove("sho1");
            document.getElementById("ss11").classList.remove("sho1");
            document.getElementById("g6").classList.remove("sho1");

            document.getElementById("ss10").classList.add("sho");
            document.getElementById("ss11").classList.add("sho");
            document.getElementById("g6").classList.add("sho");

            document.getElementById("fer6").display = "block";
            document.getElementById("next2").classList.remove("sho1");
            document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
            document.getElementById("prev2").classList.add("sho");
            comp16.src = "https://conaturalintl.com/cdn/shop/products/Hairgrowthshampoo.jpg";
        });

        let rd = document.getElementById("ss10");
        rd.addEventListener("mouseenter" , function()
      {
        document.getElementById("ss10").classList.remove("sho");
        document.getElementById("ss11").classList.remove("sho");
        document.getElementById("g6").classList.remove("sho");

        document.getElementById("ss10").classList.add("sho1");
        document.getElementById("ss11").classList.add("sho1");     
        document.getElementById("g6").classList.add("sho1");     

        document.getElementById("fer6").display = "block";
        document.getElementById("next2").classList.remove("sho");
        document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
        document.getElementById("prev2").classList.add("sho1");

            document.getElementById("i6").src = "https://conaturalintl.com/cdn/shop/products/Hairgrowthshampoo.jpg";
        
      });

      rd.addEventListener("mouseout" , function()
      {
        document.getElementById("ss10").classList.remove("sho1");
        document.getElementById("ss11").classList.remove("sho1");
        document.getElementById("g6").classList.remove("sho1");

        document.getElementById("ss10").classList.add("sho");
        document.getElementById("ss11").classList.add("sho");
        document.getElementById("g6").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
        document.getElementById("fer6").display = "block";
        document.getElementById("i6").src = "https://conaturalintl.com/cdn/shop/products/Hairgrowthshampoo.jpg";
    
      });

      let rd1 = document.getElementById("ss11");
        rd1.addEventListener("mouseenter" , function()
      {
        document.getElementById("ss10").classList.remove("sho");
            document.getElementById("ss11").classList.remove("sho");
            document.getElementById("g6").classList.remove("sho");

            document.getElementById("ss10").classList.add("sho1");
            document.getElementById("ss11").classList.add("sho1");     
            document.getElementById("g6").classList.add("sho1");     
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");

            document.getElementById("fer6").display = "block";
            document.getElementById("i6").src = "https://conaturalintl.com/cdn/shop/products/Hairgrowthshampoo.jpg";
        
      });

      rd1.addEventListener("mouseout" , function()
      {
        document.getElementById("ss10").classList.remove("sho1");
        document.getElementById("ss11").classList.remove("sho1");
        document.getElementById("g6").classList.remove("sho1");

        document.getElementById("ss10").classList.add("sho");
        document.getElementById("ss11").classList.add("sho");
        document.getElementById("g6").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
        document.getElementById("fer6").display = "block";

        document.getElementById("i6").src = "https://conaturalintl.com/cdn/shop/products/Hairgrowthshampoo.jpg";
    
      });

      let rd2 = document.getElementById("g6");
        rd2.addEventListener("mouseenter" , function()
      {
        document.getElementById("ss10").classList.remove("sho");
            document.getElementById("ss11").classList.remove("sho");
            document.getElementById("g6").classList.remove("sho");

            document.getElementById("ss10").classList.add("sho1");
            document.getElementById("ss11").classList.add("sho1");     
            document.getElementById("g6").classList.add("sho1");     
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");

            document.getElementById("fer6").display = "block";
            document.getElementById("i6").src = "https://conaturalintl.com/cdn/shop/products/Hairgrowthshampoo.jpg";
        
      });

      rd2.addEventListener("mouseout" , function()
      {
        document.getElementById("ss10").classList.remove("sho1");
        document.getElementById("ss11").classList.remove("sho1");
        document.getElementById("g6").classList.remove("sho1");

        document.getElementById("ss10").classList.add("sho");
        document.getElementById("ss11").classList.add("sho");
        document.getElementById("g6").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
        document.getElementById("fer6").display = "block";

        document.getElementById("i6").src = "https://conaturalintl.com/cdn/shop/products/Hairgrowthshampoo.jpg";
    
      });

      let rd3 = document.getElementById("prev2");
      rd3.addEventListener("mouseenter" , function()
    {
        document.getElementById("ss10").classList.remove("sho");
        document.getElementById("ss11").classList.remove("sho");
        document.getElementById("g6").classList.remove("sho");

        document.getElementById("ss10").classList.add("sho1");
        document.getElementById("ss11").classList.add("sho1");     
        document.getElementById("g6").classList.add("sho1");     
        document.getElementById("next2").classList.remove("sho");
        document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
        document.getElementById("prev2").classList.add("sho1");

        document.getElementById("fer6").display = "block";
        document.getElementById("i6").src = "https://conaturalintl.com/cdn/shop/products/Hairgrowthshampoo.jpg";
    
    });

    rd3.addEventListener("mouseout" , function()
    {
        document.getElementById("ss10").classList.remove("sho1");
        document.getElementById("ss11").classList.remove("sho1");
        document.getElementById("g6").classList.remove("sho1");

        document.getElementById("ss10").classList.add("sho");
        document.getElementById("ss11").classList.add("sho");
        document.getElementById("g6").classList.add("sho");
        document.getElementById("next2").classList.remove("sho1");
        document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
        document.getElementById("prev2").classList.add("sho");
        document.getElementById("fer6").display = "block";

        document.getElementById("i6").src = "https://conaturalintl.com/cdn/shop/products/Hairgrowthshampoo.jpg";
    
    });
    let rd4 = document.getElementById("next2");
    rd4.addEventListener("mouseenter" , function()
  {
    document.getElementById("ss10").classList.remove("sho");
            document.getElementById("ss11").classList.remove("sho");
            document.getElementById("g6").classList.remove("sho");

            document.getElementById("ss10").classList.add("sho1");
            document.getElementById("ss11").classList.add("sho1");     
            document.getElementById("g6").classList.add("sho1");     
            document.getElementById("next2").classList.remove("sho");
            document.getElementById("prev2").classList.remove("sho");
document.getElementById("next2").classList.add("sho1");
            document.getElementById("prev2").classList.add("sho1");

            document.getElementById("fer6").display = "block";
            document.getElementById("i6").src = "https://conaturalintl.com/cdn/shop/products/Hairgrowthshampoo.jpg";
        

  });

  rd4.addEventListener("mouseout" , function()
  {
    document.getElementById("ss10").classList.remove("sho1");
    document.getElementById("ss11").classList.remove("sho1");
    document.getElementById("g6").classList.remove("sho1");

    document.getElementById("ss10").classList.add("sho");
    document.getElementById("ss11").classList.add("sho");
    document.getElementById("g6").classList.add("sho");
    document.getElementById("next2").classList.remove("sho1");
    document.getElementById("prev2").classList.remove("sho1");

document.getElementById("next2").classList.add("sho");
    document.getElementById("prev2").classList.add("sho");
    document.getElementById("fer6").display = "block";

    document.getElementById("i6").src = "https://conaturalintl.com/cdn/shop/products/Hairgrowthshampoo.jpg";

  });
    } , 0);
