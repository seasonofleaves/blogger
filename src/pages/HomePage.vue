<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/globals/BlogCard.vue';
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import BlogModal from '../components/globals/BlogModal.vue';

const blogs = computed(() => AppState.blogs)

onMounted(()=>{
  getAllBlogs()
})

async function getAllBlogs(){
  try {
    await blogsService.getAllBlogs()

  } catch (error) {
    Pop.error(error)
    logger.error(error)
  }
}

</script>

<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Blogs</h1>
      </div>
    </section>
    <section class="row">
      <div v-for="blog in blogs" :key="blog.id" class="col-12 mb-4">
        <BlogCard :blogProp="blog"/>
      </div>
    </section>
  </div>
  <BlogModal/>
</template>

<style scoped lang="scss">

</style>
