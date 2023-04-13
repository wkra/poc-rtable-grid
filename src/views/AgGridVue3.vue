<template>
  <h1>ag grid vue 3</h1>
  <div><a href="https://www.npmjs.com/package/ag-grid-vue3" target="_blank">https://www.npmjs.com/package/ag-grid-vue3</a></div>
  <div><a href="https://www.ag-grid.com/" target="_blank">https://www.ag-grid.com/</a></div>
  <div style="padding-top: 20px">
    <button @click="onUpdateItem">Update first item stock</button>
    <ag-grid-vue
      style="height: 400px; width: 100%"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :cacheBlockSize="10"
      rowModelType="infinite"
      multiSortKey="ctrl"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
  </div>
  <TaskChecklist :list="checklist" />
</template>

<script setup lang="ts">
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { AgGridVue } from 'ag-grid-vue3'
import TaskChecklist from '@/components/TaskChecklist.vue'
import { ref } from 'vue'
import taskChecklist from '@/models/taskChecklist'
import api from '@/services/api'
import type { Product } from '@/services/api'
import type { DetailGridInfo, GridApi, SortDirection } from 'ag-grid-community'

interface sortModelItem {
  sort: SortDirection
  colId: string
}

interface getRowsParams {
  startRow: number
  endRow: number
  sortModel: sortModelItem[]
  successCallback(products: Product[], total: number): void
}

const checklist = taskChecklist()
checklist[0].status = true
checklist[0].comment = 'implemented - look at network browser console'
checklist[1].status = false
checklist[1].comment = 'only enterprice - https://www.ag-grid.com/vue-data-grid/server-side-model/'
checklist[2].status = true
checklist[2].comment = 'implemented'
checklist[3].status = true
checklist[3].comment = `implemented - use 'Ctrl' or 'Command' on Apple and click on column header`
checklist[4].status = true
checklist[4].comment = `change css variables or use greater specificity`
checklist[5].status = false
checklist[5].comment = 'https://www.ag-grid.com/license-pricing'
checklist[6].status = false
checklist[6].comment = 'In enterprice - https://www.ag-grid.com/javascript-data-grid/grouping/'
checklist[7].status = true
checklist[7].comment =
  'You can redraw all or one row - click update first item to change first item stock value'
checklist[8].status = true
checklist[9].status = true
checklist[10].status = true
checklist[10].comment = 'Not all is covered, but there is some typing'

let gridApi: GridApi | null = null

const columnDefs = ref([
  { field: 'id', resizable: true, width: 70, sortable: true },
  { field: 'title', resizable: true, sortable: true },
  { field: 'brand', resizable: true, sortable: true },
  { field: 'category', resizable: true, sortable: true },
  { field: 'stock', resizable: true, sortable: true },
  { field: 'rating', resizable: true, sortable: true }
])

const setQueryParams = (sortModel: sortModelItem[]) => {
  if (sortModel.length) {
    return sortModel.reduce((acc: string, item, index, items) => {
      const param = `${item.sort}(${item.colId}),`
      acc += param

      if (index === items.length - 1) {
        acc = acc.substring(0, acc.length - 1)
      }

      return acc
    }, 'sort_by=')
  }

  return ''
}

const onGridReady = (agGridParams: DetailGridInfo) => {
  if (agGridParams.api) {
    gridApi = agGridParams.api

    const dataSource = {
      rowCount: -1,
      getRows: async (params: getRowsParams) => {
        const { startRow, endRow, sortModel } = params
        const limit = endRow - startRow
        const queryParams = setQueryParams(sortModel)
        console.log('asking for ' + startRow + ' to ' + endRow)
        console.log({ sortModel })

        const { products, total } = await api.fetchData(startRow, limit, queryParams)
        params.successCallback(products, total)
      }
    }
    gridApi.setDatasource(dataSource)
  }
}

const onUpdateItem = () => {
  if (gridApi) {
    const rowNode = gridApi.getRowNode('0')
    if (rowNode) {
      rowNode.setData({
        ...rowNode.data,
        stock: Math.floor(Math.random() * 100)
      })
    }
  }
}
</script>

<style>
.ag-theme-alpine {
  --ag-odd-row-background-color: #fbfbfb;
}
</style>
