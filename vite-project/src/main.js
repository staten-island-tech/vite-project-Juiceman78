import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

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

function inject(item) {
  container = document.querySelector("#app");
  container.insertAdjacentHTML(
    "Afterbegin",
    `<div class ="card">
    <h2 class ="title">${item - title}</h2>
    <h2 class ="artist">${item - artist}</h2>
    </div>`
  );
}
songs.forEach((element) => {
  inject(element);
});
/* document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter")); */
