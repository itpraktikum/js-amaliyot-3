const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");
const errorBtn = document.querySelector("#error");
const modal = document.querySelector(".modal");

yesBtn.addEventListener("click", () => {
    modal.classList.add("active");
    modal.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    modal.style.display = "flex"
    setTimeout(() => {
        modal.style.display = "none";
    },3000)
})

noBtn.addEventListener("click", () => {
    modal.classList.add("noActive");
    modal.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    modal.style.display = "flex"
    setTimeout(() => {
        modal.style.display = "none";
    },3000)
})

errorBtn.addEventListener("click", () => {
    modal.classList.add("error");
    modal.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
    modal.style.display = "flex"
    setTimeout(() => {
        modal.style.display = "none";
    },3000)
})