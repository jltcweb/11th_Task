window.addEventListener("scroll", ()=> {
    let content1 = document.querySelector(".fourth-animation");
    let contentPosition1 = content1.getBoundingClientRect().top;
    let screenPosition1 = window.innerHeight /1.7;
    if(contentPosition1 < screenPosition1) {
        content1.classList.add("active2");
    }
    else {
        content1.classList.remove("active2");
    }
});