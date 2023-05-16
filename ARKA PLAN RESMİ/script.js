

let body = document.querySelector("body")
console.log(body)

let backraund = [


    { url: "./resimler/car-gb47be6d52_1920.jpg" },
    { url: "./resimler/car-gf1893c8cb_1920.jpg" },
    { url: "./resimler/lamborghini-ga8832cb4c_1920.jpg" },
    { url:"./resimler/porsche-g1f27e13db_1920.jpg"}

]
console.log(backraund[0].url)
const buton = document.querySelector(".btn")

let sayac=0;
function degistir(){
    
    sayac+=1

    document.body.style.backgroundImage=`url(${backraund[sayac-1].url})`;
    if(sayac>=backraund.length){
        sayac=0;
    }

   
}