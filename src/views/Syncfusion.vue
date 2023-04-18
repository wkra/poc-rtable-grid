<template>
  <h1>Syncfusion</h1>
  <div>
    <a href="https://ej2.syncfusion.com/vue/documentation/grid/getting-started-vue" target="_blank"
      >docs</a
    >
  </div>
  <div>
    <a href="https://www.npmjs.com/package/@syncfusion/ej2-vue-grids" target="_blank">npm</a>
  </div>
  <div style="padding-top: 20px">
    <GridComponent
      :dataSource="northwindData"
      :enableInfiniteScrolling="true"
      :pageSettings="options"
      :allowSorting="true"
      :allowResizing="true"
      height="300"
    >
      <ColumnsDirective>
        <ColumnDirective field="id" width="90"></ColumnDirective>
        <ColumnDirective field="title" width="120"></ColumnDirective>
        <ColumnDirective field="brand" format="C2" width="90"></ColumnDirective>
        <ColumnDirective field="category" width="120"></ColumnDirective>
        <ColumnDirective field="stock" width="90"></ColumnDirective>
        <ColumnDirective field="rating" width="90"></ColumnDirective>
      </ColumnsDirective>
    </GridComponent>
  </div>
  <TaskChecklist :list="checklist" />
</template>

<script setup lang="ts">
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  InfiniteScroll,
  Sort,
  Resize,
} from '@syncfusion/ej2-vue-grids'
import {
  DataManager,
  ODataAdaptor,
  Query,
  type CrudOptions,
  type DataOptions,
  type DataResult
} from '@syncfusion/ej2-data'
import TaskChecklist from '@/components/TaskChecklist.vue'
import taskChecklist from '@/models/taskChecklist'
import { provide } from 'vue'
import type { Ajax } from '@syncfusion/ej2-base'
import api from '@/services/api'

provide('grid', [InfiniteScroll, Sort, Resize])

interface requestParams {
  $skip: number
  $top: number
  $orderby: string
}

const options = { pageSize: 10 }
class ProductAdaptor extends ODataAdaptor {
  processResponse(
    data: DataResult,
    ds: DataOptions,
    query: Query,
    xhr: XMLHttpRequest,
    request: Ajax,
    changes: CrudOptions
  ) {
    const args: [DataResult, DataOptions, Query, XMLHttpRequest, Ajax, CrudOptions] = [
      data,
      ds,
      query,
      xhr,
      request,
      changes
    ]
    let original: any = super.processResponse.apply(this, args)

    return { result: original.products, count: original.total }
  }

  convertToQueryString(request: requestParams, query: Query, dm: DataManager) {
    const { $top, $skip, $orderby } = request
    const customRequest = {
      limit: $top || 10,
      skip: $skip || 0,
      orderby: $orderby || ''
    }
    const argsArr: [Object, Query, DataManager] = [customRequest, query, dm]

    return super.convertToQueryString.apply(this, argsArr)
  }
}

const northwindData = new DataManager({
  url: api.baseUrl,
  adaptor: new ProductAdaptor()
})

const checklist = taskChecklist()
checklist[0].status = true
checklist[0].comment = 'implemented - look at network browser console'
checklist[2].status = true
checklist[2].comment = 'implemented'
checklist[3].status = true
checklist[3].comment = `implemented - use 'Ctrl' or 'Command' on Apple and click on column header`
checklist[4].status = false
checklist[4].comment = `there are some css variables but most of the time we need to use greater specificity`
checklist[5].status = true
checklist[5].comment = `https://www.syncfusion.com/sales/teamlicense Up to a team of 10-$695 /per month`
checklist[6].status = false
checklist[6].comment = `https://ej2.syncfusion.com/vue/documentation/grid/grouping/grouping it is possible according to documentation but it's not working as expected`
checklist[7].status = false
checklist[7].comment = `there is no api to update one cell/row`
checklist[8].status = false
checklist[8].comment = `there is no api to update one cell/row`
checklist[9].status = true
checklist[10].status = true
</script>

<style>
@import '../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css';
</style>
