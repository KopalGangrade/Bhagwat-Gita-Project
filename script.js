let inputSearch = document.querySelector("#searchbar");
let inputButton = document.querySelector("#button");
let inputResult = document.querySelector(".result");

function bhagwatgita(number) {
  fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=${number}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "04dcd9b5a3msh47f6ae5bc35910bp1d78d4jsnfeac8586a6b5",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const chapter = data.find((chapter) => chapter.chapter_number === parseInt(number));
      if (chapter) {
        let chapterNumber = document.createElement("h1");
        chapterNumber.textContent = `CHAPTER : ${chapter.chapter_number}`;
        inputResult.appendChild(chapterNumber);
        chapterNumber.style.fontSize="20px";

        let chapterName_Meaning = document.createElement("h1");
        chapterName_Meaning.textContent = `chapterName_Meaning:${chapter.name_meaning}`;
        inputResult.appendChild(chapterName_Meaning);
        chapterName_Meaning.style.fontSize="20px";

        let slug = document.createElement("h1");
        slug.textContent = `SLUG: ${chapter.slug}`;
        inputResult.appendChild(slug);
        slug.style.fontSize="20px";

        let chapterSummary = document.createElement("h1");
        chapterSummary.textContent = `chapterSummary: ${chapter.chapter_summary}`;
        inputResult.appendChild(chapterSummary);
        chapterSummary.style.fontSize="20px";

      } else {
        let notFound = document.getElementById("alertmessage")
        notFound.innertext= "chapter not found";
      }

      
    let hindiTranslation = document.querySelector("#hindi");
    hindiTranslation.addEventListener('click', () => {
      inputResult.textContent = "";
      let chapterNumber = document.createElement("h1");
      chapterNumber.textContent = `CHAPTER : ${chapter.chapter_number}`;
      inputResult.appendChild(chapterNumber);
      chapterNumber.style.fontSize="20px";

      let chapterName = document.createElement("h1");
        chapterName.textContent = `chapterName: ${chapter.name}`;
        inputResult.appendChild(chapterName);
        chapterName.style.fontSize="20px";

      let chapterSummary_Hindi = document.createElement("h1");
      chapterSummary_Hindi.textContent = `chapterSummary_Hindi: ${chapter.chapter_summary_hindi}`;
      inputResult.appendChild(chapterSummary_Hindi);
      chapterSummary_Hindi.style.fontSize="20px";
    });

    let englishTranslation = document.querySelector("#english");

    englishTranslation.addEventListener('click', () => {
      inputResult.textContent = "";
      let chapterNumber = document.createElement("h1");
        chapterNumber.textContent = `CHAPTER : ${chapter.chapter_number}`;
        inputResult.appendChild(chapterNumber);
        chapterNumber.style.fontSize="20px";

        let chapterName_Meaning = document.createElement("h1");
        chapterName_Meaning.textContent = `chapterName_Meaning:${chapter.name_meaning}`;
        inputResult.appendChild(chapterName_Meaning);
        chapterName_Meaning.style.fontSize="20px";

        let slug = document.createElement("h1");
        slug.textContent = `SLUG: ${chapter.slug}`;
        inputResult.appendChild(slug);
        slug.style.fontSize="20px";

        let chapterSummary = document.createElement("h1");
        chapterSummary.textContent = `chapterSummary: ${chapter.chapter_summary}`;
        inputResult.appendChild(chapterSummary);
        chapterSummary.style.fontSize="20px";

    });

    

    })
    .catch((error) => console.error(error));
}

inputButton.addEventListener('click', () => {
  inputResult.innerHTML = "";
  bhagwatgita(inputSearch.value);
});





let blog_title= document.querySelector("title");
let blog_artical= document.querySelector("artical");
publish = document.querySelector("publish");


publish.addEventListener("click", ()=>{

});


function publishartical(){
  
}
