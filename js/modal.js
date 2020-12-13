const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4");

const openModal1 = () =>{
    modal1.style.display = "block";
}
const openModal2 = () => {
    modal2.style.display = "block";
}
const openModal3 = () => {
    modal3.style.display = "block";
}
const openModal4 = () => {
    modal4.style.display = "block";
}

const closeModal1 = () => {
    modal1.style.display = "none";
}
const closeModal2 = () => {
    modal2.style.display = "none";
}
const closeModal3 = () => {
    modal3.style.display = "none";
}
const closeModal4 = () => {
    modal4.style.display = "none";
}


window.onclick =  (event) =>{
    if (event.target == modal1) {
        modal1.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    } else if (event.target == modal3) {
        modal3.style.display = "none";
    } else if (event.target == modal4) {
        modal4.style.display = "none";
    }else{
       return
    }
}