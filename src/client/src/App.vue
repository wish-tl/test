<script setup>
  import { ref,onMouted } from 'vue'
  const handleAdd = ()=>{

  }

  const handleEdit = () =>{

  }

  const getList = () => {
    
  }

  const getDetail = () => {

  }

  const save = () => {

  }

  const tableData = ref([])
  const show = ref(false)
  const formData = ref({

  })
  const formTableData = ref([])

  const cancelEvent = ()=>{
    show.value = false
  }

  const confirmEvent = () =>{
    show.value = false
  }

</script>

<template>
  <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="handleAdd">新增</vxe-button>
      </template>
    </vxe-toolbar>
    <vxe-table
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="编号"></vxe-column>
      <vxe-column field="sex" title="编码"></vxe-column>
      <vxe-column field="age" title="价格"></vxe-column>
      <vxe-column title="操作" width="640">
        <template #default="{ row }">
          <vxe-button type="text" status="danger" @click="handleEdit(row)">编辑</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
    <vxe-modal v-model="show" title="最大化显示" width="600" height="400" show-zoom resize fullscreen>
      <template #default>
        <vxe-form :data="formData">
          <vxe-form-item title="编号" field="name" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.name" placeholder="请输入名称" clearable></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item title="编码" field="sex" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.name" placeholder="请输入编码" clearable></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item title="价格" field="sex" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.name" placeholder="请输入编码" clearable></vxe-input>
            </template>
          </vxe-form-item>
        </vxe-form>

        <vxe-table
      border
      show-overflow
      :data="formTableData"
      :column-config="{resizable: true}"
      :edit-config="{trigger: 'click', mode: 'row'}">
      <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-column field="role" title="Role" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.name" type="text"></vxe-input>
          </template>
        </vxe-column>
          <vxe-column field="num1" title="Number" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.num1" type="number" placeholder="请输入数值"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="date12" title="Date" :edit-render="{}">
            <template #edit="{ row }">
            <vxe-input v-model="row.date12" type="date" placeholder="请选择日期" transfer></vxe-input>
          </template>
          </vxe-column>
          <vxe-column field="date13" title="Week" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.date13" type="week" placeholder="请选择日期" transfer></vxe-input>
            </template>
          </vxe-column>
        <vxe-column field="address" title="Address" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.address" type="text"></vxe-input>
          </template>
        </vxe-column>
      </vxe-table>
      </template>
      <template #footer>
          <vxe-button @click="cancelEvent">取消</vxe-button>
          <vxe-button status="primary" @click="confirmEvent">确定</vxe-button>
        </template>
    </vxe-modal>
</template>

<style scoped>
</style>
