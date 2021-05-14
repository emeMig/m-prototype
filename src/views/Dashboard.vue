<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col class="aerea" xl="2" lg="6">
          <stats-card title="GENERAR INFORMES"
                      type="gradient-info"
                      sub-title=""
                      icon="ni ni-briefcase-24"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2"></span>
              <span class="text-nowrap"></span>
            </template>
          </stats-card>
        </b-col>
        <b-col class="aerea" xl="2" lg="6">
          <stats-card title="CALENDARIO"
                      type="gradient-red"
                      sub-title=""
                      icon="ni ni-calendar-grid-58"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2"></span>
              <span class="text-nowrap"></span>
            </template>
          </stats-card>
        </b-col>
        <b-col class="aerea" xl="2" lg="6">
          <stats-card title="ACTIVIDAD"
                      type="gradient-orange"
                      sub-title=""
                      icon="ni ni-atom"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2"></span>
              <span class="text-nowrap"></span>
            </template>
          </stats-card>
        </b-col>
        <b-col class="aerea" xl="2" lg="6">
          <stats-card title="HISTÓRICO"
                      type="gradient-blue"
                      sub-title=""
                      icon="ni ni-watch-time"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2"></span>
              <span class="text-nowrap"></span>
            </template>
          </stats-card>
        </b-col>
        <b-col class="aerea" xl="2" lg="6">
          <stats-card title="MONETIZACION"
                      type="gradient-green"
                      sub-title=""
                      icon="ni ni-money-coins"
                      class="mb-4">

            <template slot="footer">
              <span class="text-danger mr-2"></span>
              <span class="text-nowrap"></span>
            </template>
          </stats-card>

        </b-col>
        <b-col class="aerea" xl="2" lg="6">
          <stats-card title="RATINGS"
                      type="gradient-default"
                      sub-title=""
                      icon="ni ni-chart-bar-32"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2"></span>
              <span class="text-nowrap"></span>
            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    
    <b-container fluid class="mt--7">
      
      <!--Tables-->
      <b-row class="mt-5">
        <b-col xl="12" class="mb-5 mb-xl-0">
          <page-visits-table class="my-3"></page-visits-table>
        </b-col>

        <b-col xl="12" class="mb-5 mb-xl-0" @click="emitChange">
          <social-traffic-table class="my-5" ></social-traffic-table>
        </b-col>
      </b-row>


      <!--End tables-->

      <!--Charts-->
      <b-row>
        <b-col xl="6" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Impactos</h6>
                <h5 class="h3 mb-0">Impactos totales</h5>
              </b-col>
            </b-row>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData[indexRedChartData]"
            >
            </bar-chart>
          </card>
        </b-col>
        
        <b-col xl="6" class="mb-5 mb-xl-0" id="lineChart2">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-white text-uppercase ls-1 mb-1">Monetizables</h6>
                <h5 class="h3 text-white mb-0">Demanda agregada</h5>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                  <b-nav-item
                       class="mr-2 mr-md-0"
                       :active="bigLineChart.activeIndex === 0"
                       link-classes="py-2 px-3"
                       @click.prevent="initBigChart(0)">
                      <span class="d-none d-md-block">Mes</span>
                      <span class="d-md-none">M</span>
                  </b-nav-item>
                  <b-nav-item
                    link-classes="py-2 px-3"
                    :active="bigLineChart.activeIndex === 1"
                    @click.prevent="initBigChart(1)"
                  >
                    <span class="d-none d-md-block">Semana</span>
                    <span class="d-md-none">S</span>
                  </b-nav-item>
                </b-nav>
              </b-col>
            </b-row>
            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </card>
        </b-col>
      </b-row>
      <!-- End charts-->

    </b-container>

  </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    data() {
      return {
        indexRedChartData: 0,
        bigLineChart: {
          allData: [
            [0, 30, 20, 50, 25, 10, 20, 30, 60],
            [0, 10, 45, 15, 20, 60, 55, 40, 10]
          ],        
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Rendimiento',
                data: [0, 40, 30, 20, 15, 60, 40, 50, 10],
              }
            ],
            labels: ['My', 'Jn', 'Jl', 'Ag', 'Sp', 'Oc', 'Nv', 'Dc'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        }, 

        redBarChart: {
          chartData: [{
            labels: ['Jl', 'Ag', 'Sp', 'Oc', 'Nv', 'Dc'],
            datasets: [{
              label: 'Impactos mensuales',
              data: [35, 10, 20, 32, 17, 59],
            }]
          },
          {
            labels: ['L', 'M', 'X', 'J', 'V', 'S'],
            datasets: [{
              label: 'Impactos semanales',
              data: [5, 45, 65, 52, 47, 19],
            }]
          }],
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Rendimiento',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['My', 'Jn', 'Jl', 'Ag', 'Sp', 'Oc', 'Nv', 'Dc'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      },
      emitChange() {
        let valor = this.indexRedChartData;
        valor === 0 ? valor++ : valor--;
        this.indexRedChartData = valor;
        this.initBigChart(valor);

      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
.aerea {
  min-width: 260px;
}
.aerea :hover {
  right: 3px;
  top: 3px;
}
</style>
