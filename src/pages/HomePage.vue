<script setup>
import { AppState } from '@/AppState.js';
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

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
      {{ blogs }}
    </section>
  </div>
</template>

<style scoped lang="scss">

</style>
