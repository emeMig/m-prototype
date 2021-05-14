<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->

      <b-row>
        <b-col xl="6" class="aerea">
          <stats-card title="Crear"
                      type="gradient-default"
                      sub-title="Crear un circuito y añadirlo al sistema"
                      icon="ni ni-bulb-61"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">></span>
              <span class="text-nowrap">Seleccionar</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="6" class="aerea">
          <stats-card title="Filtrar"
                      type="gradient-default"
                      sub-title="Aplicar filtros a la vista"
                      icon="ni ni-bullet-list-67"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">></span>
              <span class="text-nowrap">Seleccionar</span>
            </template>
          </stats-card>
        </b-col>
        <!-- 
        <b-col xl="3" md="6">
          <stats-card title="Sales"
                      type="gradient-green"
                      sub-title="924"
                      icon="ni ni-money-coins"
                      class="mb-4">

            <template slot="footer">
              <span class="text-danger mr-2">5.72%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Performance"
                      type="gradient-info"
                      sub-title="49,65%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">54.8%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col> -->
      </b-row> 
    </base-header>
    <b-container fluid class="mt--7">
      <!-- <b-row>
        <b-col>
          <light-table/>
        </b-col>
      </b-row> -->
      <div class="mt-5"></div>
      <a href="http://192.168.1.40:8080/#/tables"><dark-table> </dark-table></a>
    </b-container>
  </div>
</template>
<script>
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import projects from './Tables/projects'
  import users from './Tables/users'
  import LightTable from "./Tables/RegularTables/LightTable";
  import DarkTable from "./Tables/RegularTables/DarkTable";
  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      LightTable,
      DarkTable,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        users,
        texto: '',
      };
    },
    methods: {
      ...mapActions [('getPanelExclusivistas')],
      
    },
    computed: {
      ...mapState([projects]),
      project() { 
        return this.projects.id.filter( e => e !== user.id)
        },
      exclusivista() { 
        return this.getPanelExclusivistas(this.project.id)
        },
    }
  }

</script>
<style>

.aerea :hover {
  right: 3px;
  top: 3px;
}
.el-table.table-dark{
  background-color:#172B4D !important;
  color: #f8f9fe;
}

.el-table.table-dark th,
.el-table.table-dark tr{
  background-color:#172B4D !important;
  color: #afc8d6;
  font-size: 11px;
}

.el-table.table-dark td,
.el-table.table-dark th.is-leaf{
  border-bottom: none;
}
</style>