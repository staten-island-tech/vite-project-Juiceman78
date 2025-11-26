import "./style.css";

const songs = [
  {
    name: "Self Control",
    artist: "Frank Ocean",
    length: "4:09",
    album: "Blonde",
  },
  {
    name: "Runway, Houses, City, Clouds",
    artist: "Tame Impala",
    length: "7:15",
    album: "Innerspeaker",
  },
  {
    name: "Wasted",
    artist: "Don Toliver",
    length: "3:05",
    album: "Donny Womack",
  },
  {
    name: "Elephant",
    artist: "Tame Impala",
    length: "3:31",
    album: "Lonerism",
  },
  {
    name: "After Party",
    artist: "Don Toliver",
    length: "3:06",
    album: "Heaven or Hell",
  },
  {
    name: "Pink + White",
    artist: "Frank Ocean",
    length: "3:04",
    album: "Blonde",
  },
  {
    name: "Mind Mischief",
    artist: "Tame Impala",
    length: "4:31",
    album: "Lonerism",
  },
  {
    name: "No Idea",
    artist: "Don Toliver",
    length: "2:33",
    album: "Heaven or Hell",
  },
  { name: "Patience", artist: "Tame Impala", length: "4:52", album: "Singles" },
  { name: "Godspeed", artist: "Frank Ocean", length: "2:58", album: "Blonde" },
  {
    name: "Endors Toi",
    artist: "Tame Impala",
    length: "3:06",
    album: "Lonerism",
  },
  {
    name: "Company",
    artist: "Don Toliver",
    length: "3:23",
    album: "Life of a DON",
  },
  {
    name: "White Ferrari",
    artist: "Frank Ocean",
    length: "4:08",
    album: "Blonde",
  },
  {
    name: "Lucidity",
    artist: "Tame Impala",
    length: "4:31",
    album: "Innerspeaker",
  },
  {
    name: "Cardigan",
    artist: "Don Toliver",
    length: "3:27",
    album: "Heaven or Hell",
  },
  {
    name: "It Might Be Time",
    artist: "Tame Impala",
    length: "4:33",
    album: "The Slow Rush",
  },
  { name: "Nights", artist: "Frank Ocean", length: "5:07", album: "Blonde" },
  {
    name: "Mamma Mia",
    artist: "Don Toliver",
    length: "3:01",
    album: "Love Sick",
  },
  {
    name: "Lost",
    artist: "Frank Ocean",
    length: "3:54",
    album: "channel ORANGE",
  },
  {
    name: "Yes I'm Changing",
    artist: "Tame Impala",
    length: "4:31",
    album: "Currents",
  },
  {
    name: "Private Landing",
    artist: "Don Toliver",
    length: "3:58",
    album: "Love Sick",
  },
  {
    name: "One More Hour",
    artist: "Tame Impala",
    length: "7:13",
    album: "The Slow Rush",
  },
  {
    name: "Pyramids",
    artist: "Frank Ocean",
    length: "9:52",
    album: "channel ORANGE",
  },
  {
    name: "Borderline",
    artist: "Tame Impala",
    length: "4:34",
    album: "The Slow Rush",
  },
  { name: "Ivy", artist: "Frank Ocean", length: "4:09", album: "Blonde" },
  {
    name: "Feels Like We Only Go Backwards",
    artist: "Tame Impala",
    length: "3:21",
    album: "Lonerism",
  },
  {
    name: "New Person, Same Old Mistakes",
    artist: "Tame Impala",
    length: "6:03",
    album: "Currents",
  },
  {
    name: "Sweet Life",
    artist: "Frank Ocean",
    length: "4:22",
    album: "channel ORANGE",
  },
  {
    name: "Solitude Is Bliss",
    artist: "Tame Impala",
    length: "3:55",
    album: "Innerspeaker",
  },
  {
    name: "Let It Happen",
    artist: "Tame Impala",
    length: "7:47",
    album: "Currents",
  },
  {
    name: "Do It Right",
    artist: "Don Toliver",
    length: "2:52",
    album: "Life of a DON",
  },
  {
    name: "Lost in Yesterday",
    artist: "Tame Impala",
    length: "4:09",
    album: "The Slow Rush",
  },
  { name: "Seigfried", artist: "Frank Ocean", length: "5:34", album: "Blonde" },
  {
    name: "Eventually",
    artist: "Tame Impala",
    length: "5:19",
    album: "Currents",
  },
  {
    name: "Can't Feel My Legs",
    artist: "Don Toliver",
    length: "2:41",
    album: "Life of a DON",
  },
  {
    name: "Apocalypse Dreams",
    artist: "Tame Impala",
    length: "5:57",
    album: "Lonerism",
  },
  {
    name: "Thinkin Bout You",
    artist: "Frank Ocean",
    length: "3:21",
    album: "channel ORANGE",
  },
  {
    name: "Why Won't You Make Up Your Mind?",
    artist: "Tame Impala",
    length: "3:19",
    album: "Innerspeaker",
  },
  { name: "Nikes", artist: "Frank Ocean", length: "5:14", album: "Blonde" },
  {
    name: "Alter Ego",
    artist: "Tame Impala",
    length: "4:47",
    album: "Innerspeaker",
  },
  {
    name: "The Less I Know the Better",
    artist: "Tame Impala",
    length: "3:36",
    album: "Currents",
  },
];

let container = null;
function inject(songs) {
  songs.forEach((song) => {
    container = document.querySelector("#app");
    container.insertAdjacentHTML(
      "Afterbegin",
      `<div class = "songs"><div class="song">
      ${song.name}
      ${song.length}
      ${song.artist}
      ${song.album}
      </div></div>`
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

/* document.querySelector(".filter").addEventListener("input", function () {
  
});
 */
