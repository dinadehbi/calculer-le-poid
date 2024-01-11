let calculer = document.getElementById("btn");
let check1 = document.getElementById("checkbox1");
let check2 = document.getElementById("checkbox2");
let check3 = document.getElementById("checkbox3");
let input1 =  document.getElementById("inp1");
let input2= document.getElementById("inp2");
let demo = document.getElementById("demo");



calculer.addEventListener("click", myFunction);
function myFunction(){
    if(check1.checked){
        let Mince = (input1.value)-100+(input2.value/10)*0.9;
        demo.innerHTML= Mince + " Kg";
        localStorage.setItem("value", Mince);

    }else if (check2.checked) {
        let Moyen = (input1.value)-100+(input2.value/10)*0.9*0.9;
        demo.innerHTML= Moyen + " Kg";
        localStorage.setItem("value", Moyen);

    } else if(check3.checked){
        let large = (input1.value)-100+(input2.value/10)*0.9*1.1;
        demo.innerHTML= large + " Kg";
        localStorage.setItem("value", large);

    }
}
if(localStorage.length >=0){
    demo.innerHTML= localStorage.getItem("value")
}
