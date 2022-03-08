    function load(){
        if (screen.width <= 700){
            window.open("./mobile/index.html","_self");
             }else{
                 console.log(screen.width)
             }
    }

    function oyna(oynanan_at){
        var toplampara=document.getElementById("para").innerHTML;
        var bahistutari=document.getElementById("tutar").value;
        if(bahistutari=="" || bahistutari=="0" || bahistutari==NaN){
            document.getElementById("tutar").value="";
            window.alert("Lütfen bahis tutarı giriniz.")
            stop;
        }else if(parseInt(toplampara)<parseInt(bahistutari)){
            window.alert("Bahis tutarı bakiyenizden büyük olamaz!");
        } else{
            document.getElementById("para").innerHTML=parseInt(toplampara)-parseInt(bahistutari);
            document.getElementById("tutar").value="";

        document.getElementById("bahisbilgi").innerHTML="<b>Yatırdığınız Tutar:</b> "+bahistutari+"TL<b> Oynadığınız At:</b> "+atrengi(oynanan_at);
        document.getElementById("oyna1").style.display="none";
        document.getElementById("oyna2").style.display="none";
        document.getElementById("oyna3").style.display="none";

        setTimeout("sifirlabutonu()",8500)
        
        var kazanan=random(1,4);
        
        var randomhiz=random(10000,15000);
        var randomhiz2=random(10000,15000);
        if(kazanan==1){
            document.getElementById("at2").style.transition=randomhiz+"ms all";
            document.getElementById("at3").style.transition=randomhiz2+"ms all";
        } else if(kazanan==2){
            document.getElementById("at1").style.transition=randomhiz+"ms all";
            document.getElementById("at3").style.transition=randomhiz2+"ms all";
        } else if(kazanan==3){
            document.getElementById("at1").style.transition=randomhiz+"ms all";
            document.getElementById("at2").style.transition=randomhiz2+"ms all";
        }

        var kazananId="at"+kazanan;
        console.log(kazananId)
        document.getElementById(kazananId).style.transition="9000ms all"
        
        document.getElementById("at1").style.marginLeft="610px";
        document.getElementById("at2").style.marginLeft="610px";
        document.getElementById("at3").style.marginLeft="610px";

        setTimeout(function(){
            if(parseInt(kazanan)==parseInt(oynanan_at)){
                var yenibakiye=parseInt(toplampara)+parseInt(bahistutari);
                document.getElementById("para").innerHTML=yenibakiye;
                document.getElementById("bahisbilgi").innerHTML=bahistutari+"TL KAZANDINIZ!";
            }else{
                document.getElementById("bahisbilgi").innerHTML=bahistutari+"TL Kaybettiniz.";
            }
        },8500)


        
    }
    }

    function sifirlabutonu(){
        document.getElementById("sifirla").style.display="block";
    }
    function sifirla(){
        document.getElementById("bahisbilgi").innerHTML="";
        document.getElementById("oyna1").style.display="";
        document.getElementById("oyna2").style.display="";
        document.getElementById("oyna3").style.display="";
        document.getElementById("sifirla").style.display="none";
        animkapat();
        document.getElementById("at1").style.marginLeft="0px";
        document.getElementById("at2").style.marginLeft="0px";
        document.getElementById("at3").style.marginLeft="0px";
    }
    function animkapat(){
        document.getElementById("at1").style.transition="0ms all";
        document.getElementById("at2").style.transition="0ms all";
        document.getElementById("at3").style.transition="0ms all";
    }

    function random(min,max){
        return Math.floor(Math.random()*(max-min))+min;
    }

    function atrengi(x){
        if(x==1){
            return "Mavi";
        }else if(x==2){
            return "Kırmızı";
        }else if(x==3){
            return "Beyaz";
        }
    }