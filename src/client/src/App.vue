<script setup>
import { ref, onMounted } from 'vue'
import XEUtils from 'xe-utils'
import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const request = axios.create({
  baseURL: '/api',
  
})

const tableData = ref([])
const show = ref(false)
const formData = ref({})
const formTableData = ref([])

const defaultFormData = {
  custom_name: '',
  custom_code: '',
  single_charge: '',
  export_receipt_detail: 1,
  export_collection_detail: 1,
}

const handleAdd = () => {
  formData.value = XEUtils.clone(defaultFormData, true)
  formTableData.value = XEUtils.clone(defalutFormTableData, true)
  show.value = true
}

const handleEdit = () => {
}

const getList = () => {
  request.get('/all').then(res=>{
    console.log(res)
  })
}

const getDetail = () => {

}

const save = () => {

}

onMounted(()=>{
  getList()
})


const defalutFormTableData = [
  {
    custom_code: '',
    area_name: '一区',
    first_weight_fee: 4,
    start_price: 0,
    start_weight: 3,
    renewal_fee: 0.8,
    weightDeal: '',
    weight_30_fee: 2
  },
  {
    custom_code: '',
    area_name: '二区',
    first_weight_fee: 4,
    start_price: 0,
    start_weight: 3,
    renewal_fee: 1.8,
    weightDeal: '',
    weight_30_fee: 2.5
  },
  {
    custom_code: '',
    area_name: '三区',
    first_weight_fee: 4,
    start_price: 0,
    start_weight: 3,
    renewal_fee: 2.5,
    weightDeal: '',
    weight_30_fee: 3.5
  },
  {
    custom_code: '',
    area_name: '四区1',
    first_weight_fee: 4,
    start_price: 0,
    start_weight: 3,
    renewal_fee: 5.5,
    weightDeal: '',
    weight_30_fee: 0
  },
  {
    custom_code: '',
    area_name: '四区2',
    first_weight_fee: 4,
    start_price: 0,
    start_weight: 0,
    renewal_fee: 5.5,
    weightDeal: '',
    weight_30_fee: 0
  },
  {
    custom_code: '',
    area_name: '五区',
    first_weight_fee: 4,
    start_price: 7,
    start_weight: 0.5,
    renewal_fee: 18,
    weightDeal: '',
    weight_30_fee: 0
  }
]

const cancelEvent = () => {
  show.value = false
}

const confirmEvent = () => {
  show.value = false
}

</script>

<template>
  <vxe-toolbar>
    <template #buttons>
      <vxe-button @click="handleAdd">新增</vxe-button>
    </template>
  </vxe-toolbar>
  <vxe-table :data="tableData">
    <vxe-column type="seq" width="60"></vxe-column>
    <vxe-column field="custom_name" title="账单结算对象名称"></vxe-column>
    <vxe-column field="custom_code" title="账单结算对象编码"></vxe-column>
    <vxe-column field="single_charge" title="冲单价"></vxe-column>
    <vxe-column title="操作">
      <template #default="{ row }">
        <vxe-button type="text" status="danger" @click="handleEdit(row)">编辑</vxe-button>
      </template>
    </vxe-column>
  </vxe-table>
  <vxe-modal v-model="show" width="1200" height="550" show-zoom resize show-footer>
    <template #default>
      <vxe-form :data="formData">
        <vxe-form-item title="账单结算对象名称" field="custom_name" :item-render="{}">
          <template #default="{ data }">
            <vxe-input v-model="data.custom_name" placeholder="请输入名称" clearable></vxe-input>
          </template>
        </vxe-form-item>
        <vxe-form-item title="账单结算对象编码" field="custom_code" :item-render="{}">
          <template #default="{ data }">
            <vxe-input v-model="data.custom_code" placeholder="请输入编码" clearable></vxe-input>
          </template>
        </vxe-form-item>
        <vxe-form-item title="冲单价" field="single_charge" :item-render="{}">
          <template #default="{ data }">
            <vxe-input v-model="data.single_charge" placeholder="请输入编码" clearable></vxe-input>
          </template>
        </vxe-form-item>
      </vxe-form>

      <vxe-table border show-overflow :data="formTableData" :column-config="{ resizable: true }"
        :edit-config="{ trigger: 'click', mode: 'row' }">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="custom_code" title="账单结算对象编码"></vxe-column>
        <vxe-column field="area_name" title="地区"></vxe-column>
        <vxe-column field="first_weight_fee" title="首重价" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.first_weight_fee" type="number"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="start_price" title="低于首重价格" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.start_price" type="number" placeholder="请输入数值"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="start_weight" title="续重起算重量" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.start_weight" type="number" placeholder="请输入数值" transfer></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="renewal_fee" title="续重费" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.renewal_fee" type="number" placeholder="请输入数值" transfer></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="weightDeal" title="重量处理" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.weightDeal" type="text" placeholder="" transfer></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="weight_30_fee" title="超过30公斤价格" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.weight_30_fee" type="number"></vxe-input>
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

<style scoped></style>
