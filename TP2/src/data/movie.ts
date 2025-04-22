import type { Pelicula } from "../interface/Pelicula";


const movies: Pelicula[] = [
  
  {
    id: 1,
    titulo: "The Shawshank Redemption",
    genero: "Drama",
    anio: 1994,
    director: "Frank Darabont",
    likes: 2800000,
    portada: "https://image.tmdb.org/t/p/original/uRRTV7p6l2ivtODWJVVAMRrwTn2.jpg",
  },

  {
    id: 2,
    titulo: "The Godfather",
    genero: "Crime, Drama",
    anio: 1972,
    director: "Francis Ford Coppola",
    likes: 2500000,
    portada: "https://image.tmdb.org/t/p/original/so55lmelL3JbcK2GiVH98I6Iy8u.jpg",
  },

  {
    id: 3,
    titulo: "The Dark Knight",
    genero: "Action, Crime, Drama",
    anio: 2008,
    director: "Christopher Nolan",
    likes: 2300000,
    portada: "https://image.tmdb.org/t/p/original/wsOr8j0xoUwDfcY7k815rEJXgr1.jpg",
  },

  {
    id: 4,
    titulo: "Forrest Gump",
    genero: "Drama, Romance",
    anio: 1994,
    director: "Robert Zemeckis",
    likes: 2100000,
    portada: "https://image.tmdb.org/t/p/original/azV6hV99lYkdhydsQbJCI6FqMl4.jpg",
  },
  {
    id: 5,
    titulo: "Inception",
    genero: "Action, Adventure, Sci-Fi",
    anio: 2010,
    director: "Christopher Nolan",
    likes: 2100000,
    portada: "https://image.tmdb.org/t/p/original/t5WUY5ZSxwVIVExaMZmmIj88BKA.jpg",
  },

  {
    id: 6,
    titulo: "Fight Club",
    genero: "Drama",
    anio: 1999,
    director: "David Fincher",
    likes: 2000000,
    portada: "https://image.tmdb.org/t/p/original/t1i10ptOivG4hV7erkX3tmKpiqm.jpg",
  },

  {
    id: 7,
    titulo: "The Matrix",
    genero: "Action, Sci-Fi",
    anio: 1999,
    director: "The Wachowskis",
    likes: 1900000,
    portada: "https://image.tmdb.org/t/p/original/2P14LNK2zDBf84tF016blkz4Q4C.jpg",
  },

  {
    id: 8,
    titulo: "The Lord of the Rings: The Return of the King",
    genero: "Action, Adventure, Drama",
    anio: 2003,
    director: "Peter Jackson",
    likes: 1800000,
    portada: "https://image.tmdb.org/t/p/original/mWuFbQrXyLk2kMBKF9TUPtDwuPx.jpg",
  },

  {
    id: 9,
    titulo: "Pulp Fiction",
    genero: "Crime, Drama",
    anio: 1994,
    director: "Quentin Tarantino",
    likes: 1700000,
    portada: "https://picfiles.alphacoders.com/371/371109.jpg",
  },

  {
    id: 10,
    titulo: "Schindler's List",
    genero: "Biography, Drama, History",
    anio: 1993,
    director: "Steven Spielberg",
    likes: 1600000,
    portada: "https://image.tmdb.org/t/p/original/ydZovpIVgph3AKTPXRIYKon4ZKc.jpg",
  },

  {
    id: 11,
    titulo: "The Silence of the Lambs",
    genero: "Crime, Drama, Thriller",
    anio: 1991,
    director: "Jonathan Demme",
    likes: 1500000,
    portada: "https://upload.wikimedia.org/wikipedia/commons/f/ff/The_Silence_of_the_Lambs.png",
  },

  {
    id: 12,
    titulo: "Interstellar",
    genero: "Adventure, Drama, Sci-Fi",
    anio: 2014,
    director: "Christopher Nolan",
    likes: 1400000,
    portada: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Interstellar-logo.jpg",
  },

  {
    id: 13,
    titulo: "Gladiator",
    genero: "Action, Adventure, Drama",
    anio: 2000,
    director: "Ridley Scott",
    likes: 1300000,
    portada: "https://image.tmdb.org/t/p/original/o6XhzKghQFliN49iE4M4RX94PTB.jpg",
  },

  {
    id: 14,
    titulo: "The Social Network",
    genero: "Biography, Drama",
    anio: 2010,
    director: "David Fincher",
    likes: 1200000,
    portada: "https://image.tmdb.org/t/p/original/istpaMFKlRkypxLGOBrclHsPaaL.jpg",
  },

  {
    id: 15,
    titulo: "The Prestige",
    genero: "Drama, Mystery, Sci-Fi",
    anio: 2006,
    director: "Christopher Nolan",
    likes: 1100000,
    portada: "https://image.tmdb.org/t/p/original/cibtd0x7yrEnbl2by7OnNY61bEM.jpg",
  },

  {
    id: 16,
    titulo: "Senna",
    genero: "Documentary, Biography",
    anio: 2010,
    director: "Asif Kapadia",
    likes: 1230000,
    portada: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Ayrton_Senna_Pesawat_RC_Cropped.jpg",
  },

  {
    id:17,
    titulo: "Okupa",
    genero: "Drama",
    anio: 2000,
    director: "Bruno Stangnaro",
    likes:45600000,
    portada:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Okupas_%28miniserie%29.jpg"
  },

  {
  id: 18,
  titulo: "Joker",
  genero: "Crime, Drama, Thriller",
  anio: 2019,
  director: "Todd Phillips",
  likes: 2300,
  portada: "https://image.tmdb.org/t/p/original/v0eQLbzT6sWelfApuYsEkYpzufl.jpg",
},

{
  id: 19,
  titulo: "Parasite",
  genero: "Comedy, Drama, Thriller",
  anio: 2019,
  director: "Bong Joon-ho",
  likes: 2100,
  portada: "https://image.tmdb.org/t/p/original/uJZTGqNwkD5EoQje5umXIvPcZ97.jpg",
},

{
  id: 22,
  titulo: "Avengers: Endgame",
  genero: "Action, Adventure, Drama",
  anio: 2019,
  director: "Anthony Russo, Joe Russo",
  likes: 3000,
  portada: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
},

{
  id: 23,
  titulo: "La La Land",
  genero: "Comedy, Drama, Music",
  anio: 2016,
  director: "Damien Chazelle",
  likes: 1800,
  portada: "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SL1500_.jpg",
},

{
  id: 24,
  titulo: "Django Unchained",
  genero: "Drama, Western",
  anio: 2012,
  director: "Quentin Tarantino",
  likes: 2000,
  portada: "https://image.tmdb.org/t/p/original/jhuwS5KzaB7jrX74YCm1iHTDntq.jpg",
},

{
  id: 25,
  titulo: "Coco",
  genero: "Animation, Adventure, Family",
  anio: 2017,
  director: "Lee Unkrich",
  likes: 1900,
  portada: "https://image.tmdb.org/t/p/original/sZqcEV3KhDITHlUBmyj1a3RRvT9.jpg",
},

{
  id: 26,
  titulo: "WALL·E",
  genero: "Animation, Adventure, Family",
  anio: 2008,
  director: "Andrew Stanton",
  likes: 1800,
  portada: "https://image.tmdb.org/t/p/original/6EXhV5285KcDD4Pex6d3RuzvpkK.jpg",
},

{
  id: 27,
  titulo: "The Lion King",
  genero: "Animation, Adventure , Drama",
  anio: 1994,
  director: "Roger Allers, Rob Minkoff",
  likes: 2500,
  portada: "https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_SL1500_.jpg",
},

{
  id: 28,
  titulo: "Toy Story",
  genero: "Animation, Adventure,Comedy",
  anio: 1995,
  director: "John Lasseter",
  likes: 2000,
  portada: "https://image.tmdb.org/t/p/original/jvn7wy3RSNEXnFSXLpH2of2LcV6.jpg",
},

{
  id: 29,
  titulo: "Shrek",
  genero: "Animation, Adventure, Comedy",
  anio: 2001,
  director: "Andrew Adamson, Vicky Jenson",
  likes: 2100,
  portada: "https://image.tmdb.org/t/p/original/5G1RjHMSt7nYONqCqSwFlP87Ckk.jpg",
},

{
  id: 30,
  titulo: "Spider-Man: Into the Spider-Verse",
  genero: "Animation, Action, Adventure",
  anio: 2018,
  director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
  likes: 2200,
  portada: "https://image.tmdb.org/t/p/original/k08eAedr7nUQTLf7btIaO3eXk1l.jpg",
},

{
  id: 31,
  titulo: "Minecraft: The Movie",
  genero: "Adventure, Fantasy, Animation",
  anio: 2025,
  director: "Jared Hess",
  likes: 10000000000000000, 
  portada: "https://image.tmdb.org/t/p/original/m3paT74qJ1TkDYMihmni3OFdcjZ.jpg"
}

];


export default movies;
