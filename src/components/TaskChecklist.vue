<template>
  <div style="padding-top: 50px;">
    <hr />
    <h2 style="padding-top: 20px; padding-bottom: 20px;">Summary</h2>
    <ul >
      <li v-for="(item, index) in list" :key="item.description">
        <input type="checkbox" disabled :checked="item.status" /> {{ item.description }}
        <br />
        <div style="color: gray" v-if="item.comment">{{ item.comment }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { TaskChecklist } from '@/models/taskChecklist'
import taskChecklist from '@/models/taskChecklist'

const defaultTasks = taskChecklist()


interface Props {
  list: TaskChecklist[]
}

const props = defineProps<Props>()
</script>
