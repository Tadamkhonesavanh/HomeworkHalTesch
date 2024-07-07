<template>
  <div>
    <h1>Animals</h1>
    <p>{{ dog.getName() }} is a {{ dog.getBreed() }} and says: <button @click="makeDogSound">Make Sound</button></p>
    <p>{{ cat.getName() }} is a {{ cat.getColor() }} cat and says: <button @click="makeCatSound">Make Sound</button></p>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//defineComponent function in vue phuea kam nod conponent
import { Dog, Cat } from './homework';

//Polymorphism
export default defineComponent({
  name: 'homeworkcon',
  data() {
    return {
      dog: new Dog('Buddy', 'Golden Retriever'),
      cat: new Cat('Whiskers', 'gray')
    };//ern sai object t me u lw ma sai tr
  },
  methods: {
    makeDogSound() {
      this.dog.makeSound();
    },
    makeCatSound() {
      this.cat.makeSound();
    }
  }
});
</script>


