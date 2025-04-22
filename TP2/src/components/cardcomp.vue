
<script lang="ts">
import { defineComponent, ref } from "vue";
import type { Pelicula } from "../interface/Pelicula";

export default defineComponent({
  props: {
    movie: {
      type: Object as () => Pelicula,
      required: true,
    },
  },
  emits: ["update_likes"],
  setup(props, { emit }) {
    const likes = ref(props.movie.likes);
    const userLiked = ref(false);

    const toggleLike = () => {
      userLiked.value = !userLiked.value;
      likes.value += userLiked.value ? 1 : -1;
      emit("update_likes", { id: props.movie.id, likes: likes.value });
    };

    return { likes, userLiked, toggleLike };
  },
});
</script>


<template>
  <div class="peli">
    <img v-if="movie.portada" :src="movie.portada" :alt="movie.titulo" class="movie-poster" />
    <p v-else class="no-poster">Portada no disponible</p>

    <div class="movie-informacion">
      <h3>{{ movie.titulo }}</h3>
      <p><strong>Año:</strong> {{ movie.anio }}</p>
      <p><strong>Género:</strong> {{ movie.genero }}</p>
      <p><strong>Director:</strong> {{ movie.director }}</p>
      <p><strong>Likes:</strong> {{ likes }}</p>

      <button @click="toggleLike" class="like-button" :class="{active: userLiked}">
        {{ userLiked ? " Quitar Me Gusta" : " Dar Me Gusta" }}
      </button>
    </div>
  </div>
</template>


<style scoped>
.peli {
  border: 1px solid #c50505;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  background-color: #000000;
}
.movie-poster {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}
.no-poster {
  font-size: 14px;
  color: red;
}
.movie-informacion {
  margin-top: 10px;
}
.like-button {
background-color: #0059b8;
color: rgb(221, 217, 0);
border: none;
padding: 10px;
border-radius: 5px;
margin-top: 10px;

transition: background-color 0.3s;
}

.like-button:hover {
background-color: #000000;
}

.like-button.active {
background-color: rgb(153, 3, 3); 
}
</style>
