slideshowWrite()
VaucerWrite()
formWrite()
galleryrWrite()
AutorWrite()

// Dinamicki navigacioni meni

const navigacioniMeni = document.querySelector('.nav-menu');

const imenovanjeNavigacije = ['Početna','Meni','Aktuelno','Galerija','Kontakt','Autor'];

const linkovanjeNavigacije = ['index.html','#prvo','#drugo','#blok3','#blok4','#autor'];

 
for (let i = 0; i < linkovanjeNavigacije.length; i++) {
        let elementListe = document.createElement('li');
       elementListe.setAttribute('class','nav-item')
        let linkNavigacije = document.createElement('a');
        let imeNavigacije = document.createTextNode(imenovanjeNavigacije[i]);
       linkNavigacije.setAttribute('href', linkovanjeNavigacije[i]);
       linkNavigacije.setAttribute('class', 'nav-link');
        linkNavigacije.append(imeNavigacije);
        elementListe.append(linkNavigacije);
        navigacioniMeni.append(elementListe);}

window.onscroll = function() {funkcijaZaHeader()};



var header = document.querySelector(".navbar");

var sticky = header.offsetTop;

function funkcijaZaHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.style.backgroundColor="#3E363F";
    header.style.transition="0.3s";

  } else {
    header.classList.remove("sticky");
    header.style.backgroundColor="";
    header.style.transition="0.3s";
  }
}

let burger=document.createElement("div")
burger.classList.add("hamburger");
let spanovi=`
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>

                `;
burger.innerHTML=spanovi;

document.querySelector(".navbar").appendChild(burger);


const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click",()=>{
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        header.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
       
}))


//Dropdown lista za Usluge

const OpcijeUsluge= ['Kafe','Hladne Kafe','Tople Čokolade','Čajevi'];
const valueUsluge=['kafa','hk','tc','c'];


let ElementSelect=document.getElementById("select1")

for (let i=0; i<OpcijeUsluge.length; i++){

        var tagOptionOstali = document.createElement("option");
        tagOptionOstali.setAttribute("value", valueUsluge[i]);
    
        var sadrzajOstalihOptionTagova= document.createTextNode(OpcijeUsluge[i]);
    
        tagOptionOstali.appendChild(sadrzajOstalihOptionTagova);
        ElementSelect.appendChild(tagOptionOstali); 
         
               
    }



const izaberite=["Espresso","Cappucino","Caffe Latte","Mocha","Ledena Kafa","Klasik","Crna","Nana i moringa","Crni čaj","Zeleni čaj"];
const CenaIzaberite=["225 rsd","275 rsd","285 rsd","345 rsd","335 rsd","345 rsd","345 rsd","275 rsd","275 rsd","275 rsd"];


var ispisIzaberite="";
var brojac=0;

for(let i=0;i<izaberite.length;i++){
                
                        
        
        if(brojac/5==1||i==0){
                                
                ispisIzaberite+=`<div class="rowCard">` 
        
        }

        ispisIzaberite+=`
        <div class="card">
        <img src="assets/img/Slike Izaberite/Slika${i}.jpg" alt="Avatar">
        <div class="container">
                <div class="tekstKartice"><h4><b>${izaberite[i]}</b></h4></div>
                <div class="CenaKartice"><p>${CenaIzaberite[i]}</p></div>
                </div>
                </div>`;
    
                 if(brojac/4==1){

                        ispisIzaberite+=`</div>`;

                        }

                        brojac++;

}
ispisIzaberite+=`</div>`;

document.querySelector("#IspisivanjeKartica").innerHTML=ispisIzaberite;






const Kafe=["Espresso","Dupli Espresso","Macchiato","Cappuccino","Americano","Caffe Latte"];
const CenaKafe=["225 rsd","305 rsd","245 rsd","275 rsd","225 rsd","285 rsd"];

const HladneKafe=["Hladni Espresso","Ledena Kafa","Ledena Mocha"];
const CenaHladneKafe=["315 rsd","335 rsd","355 rsd"];

const TopleCokolade=["Klasik","Lešnik","Crna"];
const CenaTopleCokolade=["345 rsd","345 rsd","345 rsd"];

const Caj=["Godži bobice i jagoda","Nana i moringa","Mango crni čaj","Beli čaj","Crni čaj","Zeleni čaj","Mača zeleni čaj","Marakuja","Čaj od maline","Ledeni čaj od breskve ","Čaj od borovnice"];
const CenaCaja=["275 rsd","275 rsd","275 rsd","275 rsd","275 rsd","275 rsd","285 rsd","295 rsd","295 rsd","295 rsd","295 rsd"];

document.getElementById("select1").addEventListener('change',funkcijaZaUsluge);


function funkcijaZaUsluge(){       

        document.querySelector("#IspisivanjeKartica").innerHTML=ispis;

       
       
        if(ElementSelect.options[ElementSelect.options.selectedIndex].value=="kafa"){
        var ispis="";
        var brojac=0;
                for(let i=0;i<Kafe.length;i++){
                
                        
                        if(brojac/6==1||i==0){
                                
                                ispis+=`<div class="rowCard">` 
                        
                        }
                        
                
                        ispis+=`
                        <div class="card fade2">
                        <img src="assets/img/Slike kafe/Slika${i}.jpg" alt="Avatar">
                        <div class="container">
                                <div class="tekstKartice"><h4><b>${Kafe[i]}</b></h4></div>
                                <div class="CenaKartice"><p>${CenaKafe[i]}</p></div>
                                </div>
                                </div>`;

                        if(brojac/5==1){

                                ispis+=`</div>`;

                        }

                        brojac++;

                }
                document.querySelector("#IspisivanjeKartica").innerHTML=ispis;
                ispis="";  
               
       }

          // document.querySelector("#IspisivanjeKartica").innerHTML=ispis;
            //    ispis="";

             else if(ElementSelect.options[ElementSelect.options.selectedIndex].value=="hk"){
                ispis="";
                brojac=0;
                
                        for(let i=0;i<HladneKafe.length;i++){
        
                                
                                if(brojac/5==1||i==0){
                                        
                                        ispis+=`<div class="rowCard">` 
                                
                                }
                                
                        
                                ispis+=`
                                <div class="card fade2">
                                <img src="assets/img/Slike hladne kafe/Slika${i}.jpg" alt="Avatar">
                                <div class="container">
                                        <div class="tekstKartice"><h4><b>${HladneKafe[i]}</b></h4></div>
                                        <div class="CenaKartice"><p>${CenaHladneKafe[i]}</p></div>
                                        </div>
                                        </div>`;
        
                                if(brojac/4==1){
        
                                        ispis+=`</div>`;
        
                                }
        
                                brojac++;

                                
        
                        }
        
                document.querySelector("#IspisivanjeKartica").innerHTML=ispis;
                ispis="";       
        

        }


       
        else if(ElementSelect.options[ElementSelect.options.selectedIndex].value=="tc"){
        ispis="";
        brojac=0;
        
                for(let i=0;i<TopleCokolade.length;i++){

                        
                        if(brojac/5==1||i==0){
                                
                                ispis+=`<div class="rowCard">` 
                        
                        }
                        
                
                        ispis+=`
                        <div class="card fade2">
                        <img src="assets/img/Slike tople cokolade/Slika${i}.jpg" alt="Avatar">
                        <div class="container">
                                <div class="tekstKartice"><h4><b>${TopleCokolade[i]}</b></h4></div>
                                <div class="CenaKartice"><p>${CenaTopleCokolade[i]}</p></div>
                                </div>
                                </div>`;

                        if(brojac/5==1){

                                ispis+=`</div>`;

                        }       

                        brojac++;

                        

                }

                document.querySelector("#IspisivanjeKartica").innerHTML=ispis;
                ispis="";


        }   



        else if(ElementSelect.options[ElementSelect.options.selectedIndex].value=="c"){
                ispis="";
                brojac=0;
                
                        for(let i=0;i<Caj.length;i++){
        
                                
                                if(brojac/6==1||i==0){
                                        
                                        ispis+=`<div class="rowCard">` 
                                
                                }
                                
                        
                                ispis+=`
                                <div class="card fade2">
                                <img src="assets/img/Slike cajeva/Slika${i}.jpg" alt="Avatar">
                                <div class="container">
                                        <div class="tekstKartice"><h4><b>${Caj[i]}</b></h4></div>
                                        <div class="CenaKartice"><p>${CenaCaja[i]}</p></div>
                                        </div>
                                        </div>`;
        
                                if(brojac/5==1){
        
                                        ispis+=`</div>`;
        
                                }
        
                                brojac++;
        
                                
        
                        }
        
                        document.querySelector("#IspisivanjeKartica").innerHTML=ispis;
                        ispis="";
        
        
                }        
        

}


//Dinamicki ispis forme

function formWrite() {

        let ispis = "";

    const arrayAttr = ["name", "lastname", "brojTel", "email", "ddRazlog", "message"];
   
    const arrayType = ["text", "text", "tel", "email", "select", "textarea"];

    const arrayPlaceholder = ["Ime", "Prezime", "Broj telefona","E-mail adresa","","   Vaša poruka"];

        const ArrayGreska=["Ime mora početi velikim slovom i imati barem 3 karaktera, bez korišćenja razmaka",
        "Prezime mora početi velikim slovom i imati barem 3 karaktera, bez korišćenja razmaka","Broj telefona mora biti u dobrom formatu i bez razmaka primer: +381601234567",
        "Email nije u dobrom formatu! primer: example@gmail.com", "", ""]
        
       

    const arrayOptionValue=["0","Za","Pi"];

    const arrayOptionName=["Izaberite razlog kontaktiranja","Zaposlenje","Pitanje"]

    let form = document.querySelector("#forma1");
    form.setAttribute("submit", " ");

        ispis=`<div class="red">`; 
        for (let i = 0; i < arrayAttr.length; i++) {
                if(arrayType[i]!="select" && arrayType[i]!="textarea"){
                 ispis += `
                <div class="kolon">
        
                <input name="${arrayAttr[i]}" type="${arrayType[i]}" class="form-control" id="${arrayAttr[i]}" placeholder="${arrayPlaceholder[i]}" >
                <div class="formaGreska sakri">${ArrayGreska[i]}</div>
                 </div>`;
                         if(i==1){


                         ispis+=`</div><div class="red">`;

                        }
                        else if(i==3){
                                ispis+=`</div>`;
                        }

                        
                 }  
        
                 
                else if(arrayType[i]=="select"){

                   ispis+= `    <div class="kolona1">
                                    <select id="${arrayAttr[i]}">`;
                        
                        for( let i=0; i<arrayOptionValue.length;i++){
                                ispis+=` <option value="${arrayOptionValue[i]}">${arrayOptionName[i]}</option>
                                `;
                        }
                    ispis+=`</select>
                    <div class="formaGreska sakri">Izaberite jedan od razloga vaseg kontaktiranja!</div>
                </div>`; 
                

                }      
                else if (arrayType[i]=="textarea"){

                        ispis+=`<div class="kolona1">
                              
                            
                        <textarea name="${arrayAttr[i]}" rows="6" class="form-control" id="${arrayAttr[i]}" placeholder="${arrayPlaceholder[i]}"></textarea>
                        <span  class="formaGreska sakri">Polje ne sme biti prazno!</span>   
                        </div>`;
                         
                }




        }
       

        form.innerHTML=ispis;

        var div1 = document.createElement("div");
        var inp = document.createElement("input");
        var tn1 = document.createTextNode("Da li se slažete sa uslovima korišćenja?");

        div1.classList.add("kolona");
      
        inp.setAttribute("type", "checkbox");
        inp.setAttribute("id", "chk");
        inp.setAttribute("name", "chk");
        div1.appendChild(inp);
        div1.appendChild(tn1);

        var div2=document.createElement("div");
        var div2dugme=document.createElement("div");
        var btn=document.createElement("button");
        var tn2=document.createTextNode("Pošalji")
        div2.classList.add("kolona");
        div2dugme.classList.add("divdugme");
        btn.setAttribute("id","btn");
        btn.setAttribute("type","button");
        btn.classList.add("button")
        btn.appendChild(tn2);
        div2dugme.appendChild(btn);
        div2.appendChild(div2dugme);

        var div3  = document.createElement("div");  
        var spn= document.createElement("span");
        div3.setAttribute("id","uspehForma")
        div3.classList.add("kolona");
        spn.classList.add("poslataFormaText");
        div3.appendChild(spn);

        form.appendChild(div1);
        form.appendChild(div2);
        form.appendChild(div3);
        

}











// Validacija forma 



document.getElementById("btn").addEventListener("click", provera);

function provera(){

    var objIme, objPrezime, objTel, objEmail, objRazlog, objTema, objTextarea, objChk;

    let error= false;

    objIme=document.querySelector("#name");

    objPrezime=document.querySelector("#lastname");
    
    objTel=document.querySelector("#brojTel");

    objEmail=document.querySelector("#email");
    
    objRazlog=document.querySelector("#ddRazlog");
    let razlog = objRazlog.options[objRazlog.selectedIndex].value;

    objTema=document.getElementsByName("d");

    objTextarea=document.getElementById("message");
    
    objChk=document.querySelector("#chk")

    let regImePrezime = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,14}$/;
    let regEmail = /^[a-z|A-Z][a-z|A-Z+.|0-9]{2,40}[a-z|A-Z|0-9][@]([a-z]{3,12}[.])*[a-z]{2,4}$/;
    let regPhone = /^(\+381|[0])6[0-79][\d]{6,7}$/;
   
    //provera za ime i prezime
   

    if(!regImePrezime.test(objIme.value)){

        objIme.classList.add("border-greska");
        objIme.nextElementSibling.classList.remove("sakri");
        error=true
    }
    else{
        objIme.classList.remove("border-greska");
        objIme.nextElementSibling.classList.add("sakri");

    }


    if(!regImePrezime.test(objPrezime.value)){

        objPrezime.classList.add("border-greska");
        objPrezime.nextElementSibling.classList.remove("sakri");
        error=true
    }
    else{
        objPrezime.classList.remove("border-greska");
        objPrezime.nextElementSibling.classList.add("sakri");

    }

    //provera telefona


    if (!regPhone.test(objTel.value)) {
        objTel.classList.add("border-greska");
        objTel.nextElementSibling.classList.remove("sakri");
        error=true
    } else {
        objTel.classList.remove("border-greska");
        objTel.nextElementSibling.classList.add("sakri");
    }


    //provera email adrese


    if(!regEmail.test(objEmail.value)){

        objEmail.classList.add("border-greska");
        objEmail.nextElementSibling.classList.remove("sakri");
        error=true;
    }
    else{
        objEmail.classList.remove("border-greska");
        objEmail.nextElementSibling.classList.add("sakri");

    }

//provera razloga

        if (razlog == "0")
        {
        objRazlog.classList.add("border-greska");
        objRazlog.nextElementSibling.classList.remove("sakri");
        error=true
        }

    else{
        objRazlog.classList.remove("border-greska");
        objRazlog.nextElementSibling.classList.add("sakri");

    }




    //provera tekstboksa
    
    if(objTextarea.value.length==0){

        objTextarea.classList.add("border-greska");
        objTextarea.nextElementSibling.classList.remove("sakri");
       error=true;
    }
    
    else{
        objTextarea.classList.remove("border-greska");
        objTextarea.nextElementSibling.classList.add("sakri");
    }


    //provera checkboxa

    if (!objChk.checked) {
        objChk.classList.add("border-greska");
        error=true;
    } else {
        objChk.classList.remove("border-greska");
    }


    //ispis

   

   if(!error){
        document.querySelector("#uspehForma").innerHTML= "Uspešno ste poslali poruku.";
        }
        else{
                document.querySelector("#uspehForma").innerHTML="";
        }
     
}

//dinamcki ispis dela za slajdshow
function slideshowWrite() {
    let ispis = "";
    let arraySlike = ["img1.jpg", "img2.jpg", "img3.jpg"];
    let arrayTekst= ["Najbolja kafa u gradu", "Zapošljavamo nove radnike", "Velika ponuda kafa kao i čajeva"];


    let destination = document.querySelector(".slajdshow")

    for (let i = 0; i < arraySlike.length; i++) {
        ispis += `
        <div class="Slajd fade">
        <div class="naslov">
            Dobro došli
        </div>
        <img src="assets/img/${arraySlike[i]}" >
        <div class="tekst"><p>${arrayTekst[i]}</p></div>
        </div>
        `
    }

    destination.innerHTML = ispis;
}



//slideshow



var slideIndex = 1;
 

showSlides(slideIndex);



setInterval(() => {
      n=+1;
      showSlides(slideIndex+=1);
},5000);



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slajd");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}



// Dinamicki ispis vaucera
function VaucerWrite() {
        let ispis = "";
        let arraySlike = ["Standardni.png", "Srebrni.png", "Zlatni.png"];
        let arrayALT=["Avatar1","Avatar2","Avatar3"]
        let arrayTekst= ["Na svakih 5 poseta ostvarite 20% popusta na bilo koju kafu", "Na svakih 15 poseta ostvarite 50% popusta na bilo koju kafu", 
        "Na svakih 30 poseta dobijate besplatnu kafu"];
    
    
        let destination = document.querySelector(".rowGift")
    
        for (let i = 0; i < arraySlike.length; i++) {
            ispis += `
            <div class="card2">
            <img src="assets/img/Slike kartica/${arraySlike[i]}" alt="${arrayALT[i]}">
            <div class="locationText"><p>${arrayTekst[i]}</p></div>
                    </div>
            `
        }
    
        destination.innerHTML = ispis;
    }
    






//Mali Jquery sa vaucerima

$(document).ready(function(){

$('.locationText').hide();
$("img[src='assets/img/Slike kartica/Standardni.png']").mouseover(function(e) {
       
    $(this).next().show();
    e.stopPropagation();
}).mouseout(function(e) {
        $(this).next().hide();
    });

$('.locationText').hide();
$("img[src='assets/img/Slike kartica/Srebrni.png']").mouseover(function(e) {
        $(this).next().show();
        e.stopPropagation();
    }).mouseout(function(e) {
        $(this).next().hide();
        });
       


$('.locationText').hide();
$("img[src='assets/img/Slike kartica/Zlatni.png']").mouseover(function(e) {
       
        $(this).next().show();
        e.stopPropagation();
    }).mouseout(function(e) {
            $(this).next().hide();
           
});

});

//Dinamicki ispis galerije


function galleryrWrite() {
        let ispis = "";
        const arraySlike = ["galerija1", "galerija2", "galerija3","galerija4", "galerija5", "galerija6"];
       
        const arrayTitle= ["Kvalitetna mlevena kafa", "Kafa za poneti","Cappucino, omiljeni medju našim gostima", 
        "Razbudite se uz esspreso","Kafa spremljena s ljubavlju","Dezert uz čaj, dobra kombinacija"];
        ispis=`<div class="row01">`
        
        let destination = document.querySelector(".row-galerija")
    
        for (let i = 0; i < arraySlike.length; i++) {
            ispis += `
            <div class="column">
            <a href="assets/img/Slike galerije/${arraySlike[i]}.jpg" data-lightbox="mygallery" 
            data-title="${arrayTitle[i]}"><img src="assets/img/Slike galerije/${arraySlike[i]}.jpg" 
            alt="${arraySlike[i]}"> </a>
             </div>
            `
        if(i==2){
                ispis+=`</div>
                <div class="row01">`;
        }
        

        }
        ispis+=`</div>`
        destination.innerHTML=ispis;
        
    }
    
//Dinamcki ispis podataka iz autora{

function AutorWrite() {
        let ispis = "";
        const h2Tagovi = ["Ime i Prezime:", "Grad:", "Studije","Zanimanja","Volim:"];
        const pTagovi=["Nemanja Pavlović","Beograd","ICT","Radio sam kao junior tehničar u fabrici izduvnih grana <br/> i kućišta turbina za automobile, <br/> trenutno sam student","Kafu"];
    
        let destination = document.querySelector(".kolona2din")
    
        for (let i = 0; i <h2Tagovi.length; i++) {
            ispis += `
                <h2>${h2Tagovi[i]}</h2>
                <p>${pTagovi[i]}</p>
         `
        }
        ispis+=`<h2>Dokumentacija</h2>   
        <div class="dokumentacija">
          <a href="Nemanja Pavlovic 129-18.pdf" target="_blank">Dokumentacija</a></div>`;
    
        destination.innerHTML = ispis;
    }
    


//Strelica za vracanje na pocetak




$(document).ready(function(){
        var btn = $('#backToTop');
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });
        btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });
    });