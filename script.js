const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");

const answers = {
  "cortis": "CORTIS is a co-ed group 💗",
  "suvi": "Suvi is a Filipino singer ✨",
  "love": "love♡attack 💌"
};

function handleSearch() {
  const value = input.value.toLowerCase();
  let result = "no results... 🐰";

  for (let key in answers) {
    if (value.includes(key)) {
      result = answers[key];
      break;
    }
  }

  input.value = result; // ✨ THIS is what puts the answer inside the bar
}

// click button
button.addEventListener("click", handleSearch);

// press Enter
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    handleSearch();
  }
});
