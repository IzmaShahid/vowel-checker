
  function Click() {
    let alpha = document.getElementById("alpha").value;
    let para = document.getElementById("para");
    if (
      alpha === "a" ||
      alpha === "e" ||
      alpha === "i" ||
      alpha === "o" ||
      alpha === "a"
    ) {
      para.innerHTML = `The alphabet '${alpha}' is <b>vowel</b>`;
      para.style.color = 'green';
    }
    else{
      para.innerHTML = `The alphabet '${alpha}' is'nt <b>vowel</b>`;
      para.style.color = 'black';
    }
  }