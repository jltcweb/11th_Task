let openNav = () => {
    let openEl = document.getElementById("right-side");
    openEl.style.right = "0px";
}

let openRight = document.getElementById("open");
openRight.addEventListener("click", openNav);

let closeNav = () => {
    let openEl = document.getElementById("right-side");
    openEl.style.right = "-350px"; 
}

let closeRight = document.getElementById("close");
closeRight.addEventListener("click", closeNav);

let changeMode = () => {
    let changeBody = document.getElementById("body");
    changeBody.classList.toggle("change-body");
    let changeColor = document.getElementById("home-txt");
    changeColor.classList.toggle("change-text-color");
    let changeColor1 = document.getElementById("sub-footer-txt");
    changeColor1.classList.toggle("change-text-color");
}

let leftEl = document.getElementById("left-side");
leftEl.addEventListener("click", changeMode);

let popUp = () => {
    let displayPop = document.getElementById("form-container");
    displayPop.style.display = "block";
}

let popEl = document.getElementById("emailContainer");
popEl.addEventListener("click", popUp);

let closePopUP = () => {
    let displayPop = document.getElementById("form-container");
    displayPop.style.display = "none";
}

let closePopEl = document.getElementById("closeForm");
closePopEl.addEventListener("click", closePopUP);

function openModalBtn () {
    var firstMap = document.getElementById("firstMap");
    var secondMap = document.getElementById("secondMap");
    var thirdMap = document.getElementById("thirdMap");
    var fourthMap = document.getElementById("fourthMap");
    var fifthMap = document.getElementById("fifthMap");
    var sixthMap = document.getElementById("sixthMap");
    var seventhMap = document.getElementById("seventhMap");
    var eightMap = document.getElementById("eightMap");
    let modalElBox = document.getElementById("modal-container-box");
    modalElBox.style.display = "block";
    firstMap.style.display = "block";
    secondMap.style.display = "none";
    thirdMap.style.display = "none";
    fourthMap.style.display = "none";
    fifthMap.style.display = "none";
    sixthMap.style.display = "none";
    seventhMap.style.display = "none";
    eightMap.style.display = "none";
}

function openModalBtn1 () {
    let modalElBox = document.getElementById("modal-container-box");
    modalElBox.style.display = "block";
    firstMap.style.display = "none";
    secondMap.style.display = "block";
    thirdMap.style.display = "none";
    fourthMap.style.display = "none";
    fifthMap.style.display = "none";
    sixthMap.style.display = "none";
    seventhMap.style.display = "none";
    eightMap.style.display = "none";
    
}

function openModalBtn2 () {
    let modalElBox = document.getElementById("modal-container-box");
    modalElBox.style.display = "block";
    firstMap.style.display = "none";
    secondMap.style.display = "none";
    thirdMap.style.display = "block";
    fourthMap.style.display = "none";
    fifthMap.style.display = "none";
    sixthMap.style.display = "none";
    seventhMap.style.display = "none";
    eightMap.style.display = "none";
    
}

function openModalBtn3 () {
    let modalElBox = document.getElementById("modal-container-box");
    modalElBox.style.display = "block";
    firstMap.style.display = "none";
    secondMap.style.display = "none";
    thirdMap.style.display = "none";
    fourthMap.style.display = "block";
    fifthMap.style.display = "none";
    sixthMap.style.display = "none";
    seventhMap.style.display = "none";
    eightMap.style.display = "none";
    
}

function openModalBtn4 () {
    let modalElBox = document.getElementById("modal-container-box");
    modalElBox.style.display = "block";
    firstMap.style.display = "none";
    secondMap.style.display = "none";
    thirdMap.style.display = "none";
    fourthMap.style.display = "none";
    fifthMap.style.display = "block";
    sixthMap.style.display = "none";
    seventhMap.style.display = "none";
    eightMap.style.display = "none";
    
}

function openModalBtn5 () {
    let modalElBox = document.getElementById("modal-container-box");
    modalElBox.style.display = "block";
    firstMap.style.display = "none";
    secondMap.style.display = "none";
    thirdMap.style.display = "none";
    fourthMap.style.display = "none";
    fifthMap.style.display = "none";
    sixthMap.style.display = "block";
    seventhMap.style.display = "none";
    eightMap.style.display = "none";
    
}

function openModalBtn6 () {
    let modalElBox = document.getElementById("modal-container-box");
    modalElBox.style.display = "block";
    firstMap.style.display = "none";
    secondMap.style.display = "none";
    thirdMap.style.display = "none";
    fourthMap.style.display = "none";
    fifthMap.style.display = "none";
    sixthMap.style.display = "none";
    seventhMap.style.display = "block";
    eightMap.style.display = "none";
    
}

function openModalBtn7 () {
    let modalElBox = document.getElementById("modal-container-box");
    modalElBox.style.display = "block";
    firstMap.style.display = "none";
    secondMap.style.display = "none";
    thirdMap.style.display = "none";
    fourthMap.style.display = "none";
    fifthMap.style.display = "none";
    sixthMap.style.display = "none";
    seventhMap.style.display = "none";
    eightMap.style.display = "block";
    
}

function closeModalBtn () {
    let modalElBox = document.getElementById("modal-container-box");
    modalElBox.style.display = "none";
}


function submitForm() {
    alert("Your Enrollment Form Has Been Sent! ");
    clearForm();
}

let clearForm = () => {

    from_nameEl = document.getElementById("fullName").value = "";
    emailEl = document.getElementById("email").value = "";
    numberEl = document.getElementById("number").value = "";
    languageEl = document.getElementById("language").value = "";
    addressEl = document.getElementById("address").value = "";
    ageEl = document.getElementById("age").value = "";
    birthdayEl = document.getElementById("birthday").value = "";
    birthplaceEl = document.getElementById("birthPlace").value = "";
    genderEl = document.getElementById("gender").value = "";
    citizenshipEl = document.getElementById("citizenship").value = "";
    heightEl = document.getElementById("height").value = "";
    weightEl = document.getElementById("weight").value = "";
    statusEl = document.getElementById("status").value = "";
    spouseEl = document.getElementById("spouse").value = "";
    guardianEl = document.getElementById("guardian").value = "";
    guardianNumberEl = document.getElementById("guardianNumber").value = "";
    guardianAddressEl = document.getElementById("guardianAddress").value = "";
    schoolEl = document.getElementById("school").value = "";
    schoolAddressEl = document.getElementById("schoolAddress").value = "";
    yearGraduatedEl = document.getElementById("yearGraduated").value = "";
    school1El = document.getElementById("school1").value = "";
    schoolAddress1El = document.getElementById("schoolAddress1").value = "";
    yearGraduated1El = document.getElementById("yearGraduated1").value = "";
    school2El = document.getElementById("school2").value = "";
    schoolAddress2El = document.getElementById("schoolAddress2").value = "";
    yearGraduated2El = document.getElementById("yearGraduated2").value = "";

}


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_199hdnm';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        closePopUP();
        submitForm();
        
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});









