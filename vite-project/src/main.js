import "./style.css";

const songs = [
  { title: "Lose Control", artist: "Teddy Swims" },
  { title: "Beautiful Things", artist: "Benson Boone" },
  { title: "Lover", artist: "Taylor Swift" },
  { title: "Greedy", artist: "Tate McRae" },
  { title: "Stick Season", artist: "Noah Kahan" },
  { title: "Paint The Town Red", artist: "Doja Cat" },
  { title: "Espresso", artist: "Sabrina Carpenter" },
  { title: "Cruel Summer", artist: "Taylor Swift" },
  { title: "I Remember Everything", artist: "Zach Bryan ft. Kacey Musgraves" },
  { title: "Flowers", artist: "Miley Cyrus" },
  { title: "Vampire", artist: "Olivia Rodrigo" },
  { title: "Dance The Night", artist: "Dua Lipa" },
  { title: "Anti-Hero", artist: "Taylor Swift" },
  { title: "Calm Down", artist: "Rema & Selena Gomez" },
  { title: "Unholy", artist: "Sam Smith & Kim Petras" },
  { title: "As It Was", artist: "Harry Styles" },
  { title: "Shivers", artist: "Ed Sheeran" },
  { title: "Save Your Tears", artist: "The Weeknd & Ariana Grande" },
  { title: "Peaches", artist: "Justin Bieber ft. Daniel Caesar & Giveon" },
  { title: "Levitating", artist: "Dua Lipa ft. DaBaby" },
  { title: "Good 4 U", artist: "Olivia Rodrigo" },
  { title: "Watermelon Sugar", artist: "Harry Styles" },
  { title: "Blinding Lights", artist: "The Weeknd" },
  { title: "Drivers License", artist: "Olivia Rodrigo" },
  { title: "Montero (Call Me By Your Name)", artist: "Lil Nas X" },
  { title: "Stay", artist: "The Kid LAROI & Justin Bieber" },
  { title: "Happier Than Ever", artist: "Billie Eilish" },
  { title: "Heat Waves", artist: "Glass Animals" },
  { title: "Bad Guy", artist: "Billie Eilish" },
  { title: "Sunflower", artist: "Post Malone & Swae Lee" },
  { title: "Shape Of You", artist: "Ed Sheeran" },
  { title: "Perfect", artist: "Ed Sheeran" },
  { title: "Someone You Loved", artist: "Lewis Capaldi" },
  { title: "Shallow", artist: "Lady Gaga & Bradley Cooper" },
  { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" },
];
let container = null;
function inject(songs) {
  songs.forEach((song) => {
    container = document.querySelector("#app");
    container.insertAdjacentHTML(
      "Afterbegin",
      `<div class = "songs"><h1 class="song">${song.title}</h1><h1 class="song">${song.artist}</h1></div>`
    );
  });
}
inject(songs);

document.querySelector(".mode").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});
