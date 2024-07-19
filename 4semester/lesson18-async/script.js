const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

async function updateDisplay(verse) {
  verse = verse.replace(" ", "").toLowerCase();
  const url = `task2-textFiles/${verse}.txt`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const text = await response.text();
    poemDisplay.textContent = text;
  } catch (error) {
    poemDisplay.textContent = `Could not fetch verse: ${error}`;
  }
}

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
