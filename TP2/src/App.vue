<script lang="ts">
  import { defineComponent, ref } from "vue";
  import moviesData from "./movie";
  import MovieCard from "./cardcomp.vue";
  import type { Pelicula } from "./Pelicula";
  
  export default defineComponent({
    components: { MovieCard },
    setup() {
      const movies = ref < Pelicula[] > (moviesData);
  
      const updateLikes = (updatedMovie: { id: number; likes: number }) => {
        const movie = movies.value.find((m) => m.id === updatedMovie.id);
        if (movie) movie.likes = updatedMovie.likes;
      };
  
      return { movies, updateLikes };
    },
  });
  </script>





  <template>
    <div class="container">
      <h1>🎬 Peliculas que quizas te interesen</h1>
      <div class="movies-grid">
        <MovieCard 
          v-for="movie in movies" 
          :key="movie.id" 
          :movie="movie" 
          @update_likes="updateLikes"
        />
      </div>
    </div>
  </template>
  






  <style scoped>
.container {
  text-align: center;
  margin-top: 20px;
  background-image: url("./istockphoto-924212560-612x612.webp"); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; 
  min-height: 100vh; 
  padding: 20px;
  color: rgb(255, 255, 255); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}


.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  z-index: 1;
}

.container > * {
  position: relative;
  z-index: 2;
}


@media (max-width: 768px) {
  .container {
    background-attachment: scroll; 
  }
}
  .movies-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
  </style>
