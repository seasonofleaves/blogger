<script setup>
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';


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
  </div>
</template>

<style scoped lang="scss">

</style>
