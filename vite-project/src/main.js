import "./style.css";

let playlist = [];
const songs = [
  {
    name: "Self Control",
    artist: "Frank Ocean",
    length: "4:09",
    album: "Blonde",
    image: "Blonde.png",
  },
  {
    name: "Runway, Houses, City, Clouds",
    artist: "Tame Impala",
    length: "7:15",
    album: "Innerspeaker",
    image: "Innerspeaker.png",
  },
  {
    name: "Wasted",
    artist: "Don Toliver",
    length: "3:05",
    album: "Donny Womack",
    image: "Donny_Womack.png",
  },
  {
    name: "Elephant",
    artist: "Tame Impala",
    length: "3:31",
    album: "Lonerism",
    image: "Lonerism.png",
  },
  {
    name: "After Party",
    artist: "Don Toliver",
    length: "3:06",
    album: "Heaven or Hell",
    image: "Heaven_or_Hell.png",
  },
  {
    name: "Pink + White",
    artist: "Frank Ocean",
    length: "3:04",
    album: "Blonde",
    image: "Blonde.png",
  },
  {
    name: "Mind Mischief",
    artist: "Tame Impala",
    length: "4:31",
    album: "Lonerism",
    image: "Lonerism.png",
  },
  {
    name: "No Idea",
    artist: "Don Toliver",
    length: "2:33",
    album: "Heaven or Hell",
    image: "Heaven_or_Hell.png",
  },
  {
    name: "Patience",
    artist: "Tame Impala",
    length: "4:52",
    album: "Singles",
    image: "Patience.png",
  },
  {
    name: "Godspeed",
    artist: "Frank Ocean",
    length: "2:58",
    album: "Blonde",
    image: "Blonde.png",
  },
  {
    name: "Endors Toi",
    artist: "Tame Impala",
    length: "3:06",
    album: "Lonerism",
    image: "Lonerism.png",
  },
  {
    name: "Company",
    artist: "Don Toliver",
    length: "3:23",
    album: "Life of a Don",
    image: "Life_Of_A_Don.png",
  },
  {
    name: "White Ferrari",
    artist: "Frank Ocean",
    length: "4:08",
    album: "Blonde",
    image: "Blonde.png",
  },
  {
    name: "Lucidity",
    artist: "Tame Impala",
    length: "4:31",
    album: "Innerspeaker",
    image: "Innerspeaker.png",
  },
  {
    name: "Cardigan",
    artist: "Don Toliver",
    length: "3:27",
    album: "Heaven or Hell",
    image: "Heaven_or_Hell.png",
  },
  {
    name: "It Might Be Time",
    artist: "Tame Impala",
    length: "4:33",
    album: "The Slow Rush",
    image: "The_Slow_Rush.png",
  },
  {
    name: "Nights",
    artist: "Frank Ocean",
    length: "5:07",
    album: "Blonde",
    image: "Blonde.png",
  },
  {
    name: "Mamma Mia",
    artist: "Don Toliver",
    length: "3:01",
    album: "Love Sick",
    image: "Love_Sick.png",
  },
  {
    name: "Lost",
    artist: "Frank Ocean",
    length: "3:54",
    album: "Channel ORANGE",
    image: "Channel_ORANGE.png",
  },
  {
    name: "Yes I'm Changing",
    artist: "Tame Impala",
    length: "4:31",
    album: "Currents",
    image: "Currents.png",
  },
  {
    name: "Private Landing",
    artist: "Don Toliver",
    length: "3:58",
    album: "Love Sick",
    image: "Love_Sick.png",
  },
  {
    name: "One More Hour",
    artist: "Tame Impala",
    length: "7:13",
    album: "The Slow Rush",
    image: "The_Slow_Rush.png",
  },
  {
    name: "Pyramids",
    artist: "Frank Ocean",
    length: "9:52",
    album: "Channel ORANGE",
    image: "Channel_ORANGE.png",
  },
  {
    name: "Borderline",
    artist: "Tame Impala",
    length: "4:34",
    album: "The Slow Rush",
    image: "The_Slow_Rush.png",
  },
  {
    name: "Ivy",
    artist: "Frank Ocean",
    length: "4:09",
    album: "Blonde",
    image: "Blonde.png",
  },
  {
    name: "Feels Like We Only Go Backwards",
    artist: "Tame Impala",
    length: "3:21",
    album: "Lonerism",
    image: "Lonerism.png",
  },
  {
    name: "New Person, Same Old Mistakes",
    artist: "Tame Impala",
    length: "6:03",
    album: "Currents",
    image: "Currents.png",
  },
  {
    name: "Sweet Life",
    artist: "Frank Ocean",
    length: "4:22",
    album: "Channel ORANGE",
    image: "Channel_ORANGE.png",
  },
  {
    name: "Solitude Is Bliss",
    artist: "Tame Impala",
    length: "3:55",
    album: "Innerspeaker",
    image: "Innerspeaker.png",
  },
  {
    name: "Let It Happen",
    artist: "Tame Impala",
    length: "7:47",
    album: "Currents",
    image: "Currents.png",
  },
  {
    name: "Do It Right",
    artist: "Don Toliver",
    length: "2:52",
    album: "Life of a Don",
    image: "Life_Of_A_Don.png",
  },
  {
    name: "Lost in Yesterday",
    artist: "Tame Impala",
    length: "4:09",
    album: "The Slow Rush",
    image: "The_Slow_Rush.png",
  },
  {
    name: "Seigfried",
    artist: "Frank Ocean",
    length: "5:34",
    album: "Blonde",
    image: "Blonde.png",
  },
  {
    name: "Eventually",
    artist: "Tame Impala",
    length: "5:19",
    album: "Currents",
    image: "Currents.png",
  },
  {
    name: "Can't Feel My Legs",
    artist: "Don Toliver",
    length: "2:41",
    album: "Life of a Don",
    image: "Life_Of_A_Don.png",
  },
  {
    name: "Apocalypse Dreams",
    artist: "Tame Impala",
    length: "5:57",
    album: "Lonerism",
    image: "Lonerism.png",
  },
  {
    name: "Thinkin Bout You",
    artist: "Frank Ocean",
    length: "3:21",
    album: "Channel ORANGE",
    image: "Channel_ORANGE.png",
  },
  {
    name: "Why Won't You Make Up Your Mind?",
    artist: "Tame Impala",
    length: "3:19",
    album: "Innerspeaker",
    image: "Innerspeaker.png",
  },
  {
    name: "Nikes",
    artist: "Frank Ocean",
    length: "5:14",
    album: "Blonde",
    image: "Blonde.png",
  },
  {
    name: "Alter Ego",
    artist: "Tame Impala",
    length: "4:47",
    album: "Innerspeaker",
    image: "Innerspeaker.png",
  },
  {
    name: "The Less I Know the Better",
    artist: "Tame Impala",
    length: "3:36",
    album: "Currents",
    image: "Currents.png",
  },
];

const container = document.getElementById("app");
function inject(song, container) {
  container.insertAdjacentHTML(
    "Afterbegin",
    `<div class = "songs">
      <div class="song">
      ${song.name}</div>
      <div class="song">
      ${song.length}</div>
      <div class="song">
      ${song.artist}</div>
      <div class="song">
      ${song.album}</div>
      <div class="song">
      <img class="img" src ="${song.image}"></div>
      <button class ="add" id = "${song.name}"> Add to playlist </button>
      </div>`
  );
}
songs.forEach((song) => inject(song, container));

document.querySelector(".mode").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});
let inputSong = null;
let inputLength = null;
let inputAlbum = null;
let inputArtist = null;
let imginput = null;
function getValue() {
  inputSong = document.getElementById("song").value;
  inputLength = document.getElementById("length").value;
  inputArtist = document.getElementById("artist").value;
  inputAlbum = document.getElementById("album").value;
  imginput = document.getElementById("imginput").value;
  container.insertAdjacentHTML(
    "Afterbegin",
    `<div class = "songs">
      <div class="song"> ${inputSong}</div>
      <div class="song"> ${inputLength}</div>
      <div class="song"> ${inputArtist}</div>
      <div class="song"> ${inputAlbum}</div>
      <div class="song">
      <img class = "img" src ="${imginput}"></div>
      <button class ="insert" id = "${song.name}"> Add to playlist </button>
      </div>`
  );
}
document.querySelector(".search").addEventListener("click", function () {
  getValue();
});

function applyFilter() {
  let value = document.getElementById("album-filter").value;
  if (value === "all") {
    container.innerHTML = "";
    songs.forEach((song) => inject(song));
  } else {
    container.innerHTML = "";
    songs.forEach((song) => {
      if (song["artist"] === value) {
        inject(song);
      }
    });
  }
}
document.querySelector("#album-filter").addEventListener("change", function () {
  applyFilter();
});

function addPlaylist() {
  playlist = document.querySelector("#playlist");
  inject(song, playlist);
}

document.querySelector("#insert").addEventListener("click", function () {
  addPlaylist();
});
