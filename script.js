let textOutput = document.getElementById("text-output");

function updateText() {
  let text = document.getElementById("text-input").value;
  textOutput.innerHTML = text;
}

function makeBold(element) {
  element.classList.toggle("active");
  textOutput.classList.toggle("bold");
}

function makeItalic(element) {
  element.classList.toggle("active");
  textOutput.classList.toggle("italic");
}

function makeUnderline(element) {
  element.classList.toggle("active");
  textOutput.classList.toggle("underline");
}

function alignText(elem, alignType) {
  elem.classList.toggle("active");
  textOutput.style.textAlign = alignType;
  let buttonList = document.getElementsByClassName("align");
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].classList.remove("active");
  }

  elem.classList.add("active");
}
