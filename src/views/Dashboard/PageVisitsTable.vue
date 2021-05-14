<template>

  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">Circuitos recientes</h3>
        </b-col>
        <b-col class="text-right">
          <a href="#!" class="btn btn-sm btn-primary">Ver todos</a>
        </b-col>
      </b-row>
    </template>

    <el-table class="table-responsive table"
              :data="tableData"
              header-row-class-name="thead-light">
      <el-table-column label="Nombre circuito"
                       min-width="130px"
                       prop="page">
        <template v-slot="{row}">
          <div class="font-weight-600">{{row.page}}</div>
        </template>
      </el-table-column>
      <el-table-column label="PPP Valores"
                       min-width="70px"
                       prop="visitors">
      </el-table-column>
      <el-table-column label="Visitas"
                       min-width="90px"
                       prop="unique">
      </el-table-column>

      <el-table-column label="Ratio conversión"
                       min-width="90px"
                       prop="bounceRate">
        <template v-slot="{row}">
          {{row.bounceRate}}
        </template>
      </el-table-column>
    </el-table>
  </b-card>
</template>
<script>
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'page-visits-table',
    components: {
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
            page: 'CANAL 3',visitors: '4.569',unique: '340',bounceRate: '46,53%'
          },
          {
            page: 'A-2 / SS DE LOS REYES',visitors: '3.985',unique: '319',bounceRate: '44,12%'
          },
          {
            page: 'A-2 / ALCOBENDAS',visitors: '3.513',unique: '294',bounceRate: '36,49%'
          },
          {
            page: 'PLAZA NORTE 2',visitors: '2.050',unique: '147',bounceRate: '50,87%'
          },
          {
            page: 'BARAJAS-T4',visitors: '1.795',unique: '210',bounceRate: '61,23%'
          },
          {
            page: 'BARAJAS-ENSANCHE',visitors: '4.795',unique: '65',bounceRate: '33,88%'
          },
          {
            page: 'SN TELEFONICA',visitors: '2.728',unique: '229',bounceRate: '13,51%'
          },
          {
            page: 'LAS TABLAS / OLIVARES',visitors: '1.239',unique: '141',bounceRate: '41,52%'
          },
          {
            page: 'LA MORALEJA CENTRO',visitors: '1.456',unique: '540',bounceRate: '16,09%'
          },
          {
            page: 'A2 / SOTO CAÑADA',visitors: '2.902',unique: '90',bounceRate: '67,50%'
          },                                                  
        ]
      }
    }
  }
</script>
<style>
</style>
