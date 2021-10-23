if (window.location.search === "?uploaded") {
  alert("Files uploaded!");
  history.replaceState(null, null, "/");
}

const selectFilesBtn = document.querySelector("input[type='file']");
const fileCardsCont = document.getElementById("file-cards-cont");

selectFilesBtn.onchange = () => {
  for (let i = 0; i < selectFilesBtn.files.length; i++) {
    const file = selectFilesBtn.files.item(i);

    const fileCard = document.createElement("div");
    fileCard.className = "file-card";

    fileCardsCont.appendChild(fileCard);

    const fileCard_txt = document.createElement("span");
    fileCard_txt.className = "txt";
    fileCard_txt.innerText = file.name;

    fileCard.appendChild(fileCard_txt);
    const fileCard_delBtn = document.createElement("button");
    fileCard_delBtn.type = "button";
    fileCard_delBtn.className = "del-btn";
    fileCard_delBtn.innerHTML = "&times;";
    fileCard_delBtn.addEventListener("click", () =>
      removeFile(fileInput, fileCard)
    );

    fileCard.appendChild(fileCard_delBtn);
  }
};
