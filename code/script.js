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

        let chapterName = document.createElement("h1");
        chapterName.textContent = `chapterName: ${chapter.name}`;
        inputResult.appendChild(chapterName);

        let chapterName_Meaning = document.createElement("h1");
        chapterName_Meaning.textContent = `chapterName_Meaning:${chapter.name_meaning}`;
        inputResult.appendChild(chapterName_Meaning);

        let slug = document.createElement("h1");
        slug.textContent = `SLUG: ${chapter.slug}`;
        inputResult.appendChild(slug);

        let chapterSummary = document.createElement("h1");
        chapterSummary.textContent = `chapterSummary: ${chapter.chapter_summary}`;
        inputResult.appendChild(chapterSummary);

        let chapterSummary_Hindi = document.createElement("h1");
        chapterSummary_Hindi.textContent = `chapterSummary_Hindi: ${chapter.chapter_summary_hindi}`;
        inputResult.appendChild(chapterSummary_Hindi);
      } else {
        let notFound = document.getElementById("alertmessage")
        notFound.innertext= "chapter not found";


        // console.log("Chapter not found");
      }
    })
    .catch((error) => console.error(error));
}

inputButton.addEventListener('click', () => {
  inputResult.innerHTML = "";
  bhagwatgita(inputSearch.value);
});




