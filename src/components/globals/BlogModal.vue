<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const blog = computed(() => AppState.activeBlog)

</script>


<template>
<div class="modal fade" id="blogModal" tabindex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <!-- NOTE inner part of the modal is hidden until an active project is set in the appstate -->
      <div v-if="blog" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="blogModalLabel">{{ blog.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <!-- <div v-for="(projectImg, index) in project.projectImgs" :key="projectImg" class="col-12 mb-3">
                <img :src="projectImg" :alt="`Picture ${index + 1} of ${project.projectImgs.length}`"
                  class="img-fluid w-100">
              </div> -->
              <!-- <img :src="blog.imgUrl" alt=""> -->
              <div class="col-12 mb-3">
                {{ blog.body }}
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>