//1.
function clickMe() {
    const remBtn = document.getElementById('btn')
    remBtn.remove();
}
//2.
const body = document.querySelector("body");
const image = document.createElement("img");
const divImg = document.createElement("div");
divImg.classList.add("img");
divImg.innerHTML = ` <img class=img src="https://picsum.photos/id/1/200/300" alt="img" >`;
body.append(divImg);


//4.
