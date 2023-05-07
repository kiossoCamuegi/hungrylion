 

 function togglenavbar(){
     let main = document.querySelectorAll(".responsive-navbar");
     if(main.length >= 1){
       const navbar = main[0];
       let buttons = document.querySelectorAll(".toggle-navbar");
       if (buttons.length >= 1) {
           buttons.forEach(btn =>{
               btn.onclick = ()=>{
                   navbar.classList.toggle("active");
               }
           });
       }  
     }
 }

 function headertextanimation() {
     let text = document.querySelectorAll("header .header-text h1");
     if (text.length >= 1){
        let  data = "Nos entregamos o sabor da vida"; 
        let time = 250;
        let time1 = 10;
         let texto = text[0];
         setTimeout(() => {texto.innerHTML = "N" }, 100+time);
         setTimeout(() => {texto.innerHTML += "o" }, 200+time);
         setTimeout(() => {texto.innerHTML += "s" }, 300+time);
         setTimeout(() => {texto.innerHTML += " " }, 400+time);
         setTimeout(() => {texto.innerHTML += "e" }, 500+time);
         setTimeout(() => {texto.innerHTML += "n" }, 600+time);
         setTimeout(() => {texto.innerHTML += "t" }, 700+time);
         setTimeout(() => {texto.innerHTML += "r" }, 800+time);
         setTimeout(() => {texto.innerHTML += "e" }, 900+time);
         setTimeout(() => {texto.innerHTML += "g" }, 1000+time);
         setTimeout(() => {texto.innerHTML += "a" }, 1100+time);
         setTimeout(() => {texto.innerHTML += "m" }, 1200+time);
         setTimeout(() => {texto.innerHTML += "o" }, 1300+time);
         setTimeout(() => {texto.innerHTML += "s" }, 1400+time);
         setTimeout(() => {texto.innerHTML += " " }, 1500+time);
         setTimeout(() => {texto.innerHTML += "o" }, 1600+time);
         setTimeout(() => {texto.innerHTML += " " }, 1700+time);
         setTimeout(() => {texto.innerHTML += "s" }, 1800+time);
         setTimeout(() => {texto.innerHTML += "a" }, 1900+time);
         setTimeout(() => {texto.innerHTML += "b" }, 2000+time);
         setTimeout(() => {texto.innerHTML += "o" }, 2100+time);
         setTimeout(() => {texto.innerHTML += "r" }, 2200+time);
         setTimeout(() => {texto.innerHTML += " " }, 2300+time);
         setTimeout(() => {texto.innerHTML += "d" }, 2400+time);
         setTimeout(() => {texto.innerHTML += "a" }, 2500+time);
         setTimeout(() => {texto.innerHTML += " " }, 2600+time);
         setTimeout(() => {texto.innerHTML += "v" }, 2700+time);
         setTimeout(() => {texto.innerHTML += "i" }, 2800+time);
         setTimeout(() => {texto.innerHTML += "d" }, 2900+time);
         setTimeout(() => {texto.innerHTML += "a" }, 3000+time);
 
         setTimeout(() => {texto.innerHTML = "N" }, 3300+(time*time1));
         setTimeout(() => {texto.innerHTML += "o" }, 3400+(time*time1));
         setTimeout(() => {texto.innerHTML += "s" }, 3500+(time*time1));
         setTimeout(() => {texto.innerHTML += " " }, 3600+(time*time1));
         setTimeout(() => {texto.innerHTML += "S" }, 3700+(time*time1));
         setTimeout(() => {texto.innerHTML += "o" }, 3800+(time*time1));
         setTimeout(() => {texto.innerHTML += "m" }, 3900+(time*time1));
         setTimeout(() => {texto.innerHTML += "o" }, 4000+(time*time1));
         setTimeout(() => {texto.innerHTML += "s" }, 4100+(time*time1));
         setTimeout(() => {texto.innerHTML += " " }, 4200+(time*time1));
         setTimeout(() => {texto.innerHTML += "H" }, 4300+(time*time1));
         setTimeout(() => {texto.innerHTML += "u" }, 4400+(time*time1));
         setTimeout(() => {texto.innerHTML += "n" }, 4500+(time*time1));
         setTimeout(() => {texto.innerHTML += "g" }, 4600+(time*time1));
         setTimeout(() => {texto.innerHTML += "r" }, 4700+(time*time1));
         setTimeout(() => {texto.innerHTML += "y" }, 4800+(time*time1));
         setTimeout(() => {texto.innerHTML += " " }, 4900+(time*time1));
         setTimeout(() => {texto.innerHTML += "L" }, 5000+(time*time1));
         setTimeout(() => {texto.innerHTML += "i" }, 5100+(time*time1));
         setTimeout(() => {texto.innerHTML += "o" }, 5200+(time*time1));
         setTimeout(() => {texto.innerHTML += "n" }, 5300+(time*time1));


        setInterval(() => {
            setTimeout(() => {texto.innerHTML = "N" }, 100+time);
            setTimeout(() => {texto.innerHTML += "o" }, 200+time);
            setTimeout(() => {texto.innerHTML += "s" }, 300+time);
            setTimeout(() => {texto.innerHTML += " " }, 400+time);
            setTimeout(() => {texto.innerHTML += "e" }, 500+time);
            setTimeout(() => {texto.innerHTML += "n" }, 600+time);
            setTimeout(() => {texto.innerHTML += "t" }, 700+time);
            setTimeout(() => {texto.innerHTML += "r" }, 800+time);
            setTimeout(() => {texto.innerHTML += "e" }, 900+time);
            setTimeout(() => {texto.innerHTML += "g" }, 1000+time);
            setTimeout(() => {texto.innerHTML += "a" }, 1100+time);
            setTimeout(() => {texto.innerHTML += "m" }, 1200+time);
            setTimeout(() => {texto.innerHTML += "o" }, 1300+time);
            setTimeout(() => {texto.innerHTML += "s" }, 1400+time);
            setTimeout(() => {texto.innerHTML += " " }, 1500+time);
            setTimeout(() => {texto.innerHTML += "o" }, 1600+time);
            setTimeout(() => {texto.innerHTML += " " }, 1700+time);
            setTimeout(() => {texto.innerHTML += "s" }, 1800+time);
            setTimeout(() => {texto.innerHTML += "a" }, 1900+time);
            setTimeout(() => {texto.innerHTML += "b" }, 2000+time);
            setTimeout(() => {texto.innerHTML += "o" }, 2100+time);
            setTimeout(() => {texto.innerHTML += "r" }, 2200+time);
            setTimeout(() => {texto.innerHTML += " " }, 2300+time);
            setTimeout(() => {texto.innerHTML += "d" }, 2400+time);
            setTimeout(() => {texto.innerHTML += "a" }, 2500+time);
            setTimeout(() => {texto.innerHTML += " " }, 2600+time);
            setTimeout(() => {texto.innerHTML += "v" }, 2700+time);
            setTimeout(() => {texto.innerHTML += "i" }, 2800+time);
            setTimeout(() => {texto.innerHTML += "d" }, 2900+time);
            setTimeout(() => {texto.innerHTML += "a" }, 3000+time);

            setTimeout(() => {texto.innerHTML = "N" }, 3300+(time*time1));
            setTimeout(() => {texto.innerHTML += "o" }, 3400+(time*time1));
            setTimeout(() => {texto.innerHTML += "s" }, 3500+(time*time1));
            setTimeout(() => {texto.innerHTML += " " }, 3600+(time*time1));
            setTimeout(() => {texto.innerHTML += "S" }, 3700+(time*time1));
            setTimeout(() => {texto.innerHTML += "o" }, 3800+(time*time1));
            setTimeout(() => {texto.innerHTML += "m" }, 3900+(time*time1));
            setTimeout(() => {texto.innerHTML += "o" }, 4000+(time*time1));
            setTimeout(() => {texto.innerHTML += "s" }, 4100+(time*time1));
            setTimeout(() => {texto.innerHTML += " " }, 4200+(time*time1));
            setTimeout(() => {texto.innerHTML += "H" }, 4300+(time*time1));
            setTimeout(() => {texto.innerHTML += "u" }, 4400+(time*time1));
            setTimeout(() => {texto.innerHTML += "n" }, 4500+(time*time1));
            setTimeout(() => {texto.innerHTML += "g" }, 4600+(time*time1));
            setTimeout(() => {texto.innerHTML += "r" }, 4700+(time*time1));
            setTimeout(() => {texto.innerHTML += "y" }, 4800+(time*time1));
            setTimeout(() => {texto.innerHTML += " " }, 4900+(time*time1));
            setTimeout(() => {texto.innerHTML += "L" }, 5000+(time*time1));
            setTimeout(() => {texto.innerHTML += "i" }, 5100+(time*time1));
            setTimeout(() => {texto.innerHTML += "o" }, 5200+(time*time1));
            setTimeout(() => {texto.innerHTML += "n" }, 5300+(time*time1));
        }, 10000); 
     }
 }


 function dishestab(){
     let main = document.querySelectorAll(".dishes .dishes-tab");
     if(main.length >= 1){
        const tab = main[0];
        const header = tab.querySelector(".tab-header");
        const bodytab = tab.querySelector(".tab-body");
        let btn = header.querySelectorAll("li");
        let container = bodytab.querySelectorAll("aside");
        for(let i = 0; i < btn.length; i++){
            btn[i].onclick = ()=>{
                header.querySelector(".active").classList.remove("active");
                btn[i].classList.add("active");
                bodytab.querySelector(".active").classList.remove("active");
                container[i].classList.add("active");
            }
        } 
     }
 }









 headertextanimation(); 
 togglenavbar();
 dishestab();