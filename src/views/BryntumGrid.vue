<template>
  <h1>Bryntum Grid</h1>
  <div>
    <a
      href="https://www.bryntum.com/products/grid/docs/guide/Grid/integration/vue/guide"
      target="_blank"
      >docs</a
    >
  </div>
  <div>
    <a
      href="https://bryntum.com/store/grid/"
      target="_blank"
      >price</a
    >
  </div>
  <div style="padding-top: 20px">
    <h3>Error during implementation:</h3>
    <code>
      Uncaught (in promise) TypeError: Cannot read properties of undefined (reading
      'beforeCancelCellEdit')</code
    >
  </div>
  <div>
  </div>
</template>
<script setup lang="ts">
import TaskChecklist from '@/components/TaskChecklist.vue'
import taskChecklist from '@/models/taskChecklist'

const gridConfig = {
  tooltip: 'My cool Bryntum Grid component'
}

const checklist = taskChecklist()

checklist[5].status = true
checklist[5].comment =
  'https://bryntum.com/store/grid/ $600-$680 per dev for internal and non-commercial use'
</script>
