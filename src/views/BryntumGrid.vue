<template>
  <h1>Bryntum Grid</h1>
  <div>In progress...</div>
  <TaskChecklist :list="checklist" />
</template>
<script setup lang="ts">
import TaskChecklist from '@/components/TaskChecklist.vue'
import taskChecklist from '@/models/taskChecklist';

const checklist = taskChecklist()

checklist[5].status = true
checklist[5].comment = 'https://bryntum.com/store/grid/ $600-$680 per dev for internal and non-commercial use'
</script>