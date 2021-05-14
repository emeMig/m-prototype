<template>
  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">Paneles recientes</h3>
        </b-col>
        <b-col class="text-right">
          <base-button size="sm" type="primary">Ver todos</base-button>
        </b-col>
      </b-row>
    </template>


    <el-table
      class="table-responsive table"
      :data="tableData"
      header-row-class-name="thead-light">
      <el-table-column label="Referencia" min-width="115px" prop="name">
        <template v-slot="{row}">
          <div class="font-weight-600">{{row.name}}</div>
        </template>
      </el-table-column>

      <el-table-column label="Impactos / día" min-width="110px" prop="visitors">
      </el-table-column>

      <el-table-column label="Demanda Agregada" min-width="220px" prop="progress">
        <template v-slot="{row}">
          <div class="d-flex align-items-center">
            <span class="mr-2">{{row.progress}}%</span>
            <base-progress :type="row.progressType" :value="row.progress" />
          </div>
        </template>
      </el-table-column>
    </el-table>
  </b-card>
</template>
<script>
  import { BaseProgress } from '@/components';
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'social-traffic-table',
    components: {
      BaseProgress,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      return {
        tableData: [
          {
            name: 'M_308841',
            visitors: '1,480',
            progress: 66,
            progressType: 'gradient-warning',
          },
          {
            name: 'M_947687',
            visitors: '5,480',
            progress: 72,
            progressType: 'gradient-warning',
          },
          {
            name: 'M_289402',
            visitors: '4,807',
            progress: 80,
            progressType: 'gradient-warning',
          },
          {
            name: 'K_026718',
            visitors: '3,678',
            progress: 75,
            progressType: 'gradient-warning',
          },
          {
            name: 'K_490378',
            visitors: '2,645',
            progress: 30,
            progressType: 'gradient-warning',
          }
        ]
      }
    }

  }
</script>
<style>
</style>
