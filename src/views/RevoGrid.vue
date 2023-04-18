<template>
  <h1>RevoGrid</h1>
  <div>
    <a href="https://revolist.github.io/revogrid/?ref=madewithvuejs.com" target="_blank">docs</a>
  </div>
  <div><a href="https://www.npmjs.com/package/@revolist/vue3-datagrid" target="_blank">npm</a></div>
  <h3>No endless/infinity/virtual/lazy-load scroll support - no more investigation</h3>
  <div style="padding-top: 20px">
    <button @click="addProducts">Add products</button>
    <button @click="onUpdateItem">onUpdateItem</button>

    <VGrid
      v-if="rows.length"
      :source="rows"
      :columns="columns"
      @viewportscroll="viewportscroll"
      ref="vgrid"
      theme="compact"
      resize
    />
  </div>
</template>

<script setup lang="ts">
import VGrid from '@revolist/vue3-datagrid'
import { ref, onMounted } from 'vue'
import api from '@/services/api'

const limit = 20

const columns = [
  {
    prop: 'id',
    name: 'id'
  },
  {
    prop: 'title',
    name: 'title'
  },
  { prop: 'brand', name: 'brand' },
  { prop: 'category', name: 'category' },
  { prop: 'stock', name: 'stock' },
  { prop: 'rating', name: 'rating' }
]
const rows = ref<any>([])
const vgrid = ref<any>(null)

const addProducts = async () => {
  const { products } = await api.fetchData(rows.value.length, limit)

  products.forEach((product) => {
    rows.value.push(product)
  })
  console.log(rows.value)
}

const viewportscroll = (e: any) => {
  console.log('viewportscroll', e)
}

const refresh = async () => {
  if (vgrid.value) {
    await vgrid.value.$el.refresh()
    console.log(await vgrid.value.$el.getColumns())
    // this.$refs.vgrid.$el.refresh();
  }
}

const onUpdateItem = async () => {
  const source = await vgrid.value.$el.getSource()
  source[0].stock = Math.floor(Math.random() * 100)

  await vgrid.value.$el.refresh()
}

onMounted(async () => {
  addProducts()
})
</script>

<style>
revo-grid {
  height: 500px;
  widows: 100%;
}
</style>
