<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'PANEL DE CONTROL',
            path: '/dashboard',
            icon: 'ni ni-tv-2 text-primary',
          }"
        >
        </sidebar-item>

        <sidebar-item
            :link="{
              name: 'CIRCUITOS',
              path: '/circuitos',
              icon: 'ni ni-ni ni-bus-front-12 text-green'
              }"
            >
        </sidebar-item>

                <!-- <sidebar-item
            :link="{
              name: 'ICONOS',
              path: '/iconos',
              icon: 'ni ni-ni ni-bus-front-12 text-green'
              }"
            >
        </sidebar-item> -->

        <sidebar-item
                :link="{
                  name: 'ESTADISTICAS POR PANEL',
                  path: '/tables',
                  icon: 'ni ni-bullet-list-67 text-red'
                }">
        </sidebar-item>

        <sidebar-item
              :link="{
                name: 'LOCALIZADOR',
                path: '/maps',
                icon: 'ni ni-pin-3 text-orange'
              }">
        </sidebar-item>

        <sidebar-item
              :link="{
                name: 'PERFIL DE USUARIO',
                path: '/profile',
                icon: 'ni ni-single-02 text-blue'
                }">
        </sidebar-item>

        <sidebar-item
                  :link="{
                    name: 'ACCESO CORPORATIVO',
                    path: '/login',
                    icon: 'ni ni-key-25 text-info'
                  }">
        </sidebar-item>

        <sidebar-item
                  :link="{
                    name: 'LOGOUT',
                    path: '/login',
                    icon: 'ni ni-circle-08 text-pink'
                  }">
        </sidebar-item>

        <!-- MENU DE SOPORTE / GENEDERADO POR SIDEBAR-PLUGIN -->

        <!-- <hr class="my-4">
        <h3 class="navbar-heading text-muted" style="margin-left: 25px;">DOCUMENTACIÓN</h3>

        <b-nav class="navbar-nav mb-md-4" style="margin-left: -35px;">
          <b-nav-item
               href="#"
               >
              <i class="ni ni-collection"></i>
              <b-nav-text class="p-0">Manual de Uso</b-nav-text>
          </b-nav-item>
          <b-nav-item href="#">
              <i class="ni ni-ui-04"></i>
              <b-nav-text class="p-0">F.A.Q.s</b-nav-text>
          </b-nav-item>
          <b-nav-item href="#">
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="p-0">Soporte</b-nav-text>
          </b-nav-item> 
        </b-nav> -->

      </template>

    </side-bar>
    <!-- HASTA AQUI EL SIDEBAR -->
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          
          <router-view></router-view>
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import DashboardContent from './Content.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      DashboardContent,
      FadeTransition
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('sidenav');
        }
      }
    },
    mounted() {
      this.initScrollbar()
    }
  };
</script>
<style lang="scss">
</style>
