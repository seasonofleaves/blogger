<script setup>
import { Blog } from '@/models/Blogs.js';
import { blogsService } from '@/services/BlogsService.js';


const props = defineProps({
  blogProp: { type: Blog, required: true}
})

function setActiveBlog(){
  blogsService.setActiveBlog(props.blogProp)
}

</script>


<template>
  <div class="card">
    <section class="row">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ blogProp.title }}</h5>
          <p class="card-text">{{ blogProp.body }}</p>
          <button @click="setActiveBlog()" class="btn btn-primary">Read Post</button>
        </div>
        <img :src="blogProp.creator.picture" :alt="blogProp.creator.name" class="creator-img">
      </div>
      <div class="col-md-4">
        <img :src="blogProp.imgUrl" class="card-img-top" alt="...">
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.creator-img{
  height: 15dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
img{
  object-fit: cover;
  object-fit: center;
}
</style>