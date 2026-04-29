const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");
const response = document.getElementById("response");

const answers = {
  "cortis": "CORTIS is a co-ed group 💗",
  "suvi": "Suvi is a Filipino singer and dancer ✨",
  "love": "love♡attack mode activated 💌"
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

  response.textContent = result;
}

// click button
button.addEventListener("click", handleSearch);

// press enter
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    handleSearch();
  }
});

// live typing (optional)
input.addEventListener("input", handleSearch);
