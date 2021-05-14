<template>
  <footer class="footer px-4">
    <b-row align-v="center" class="justify-content-lg-between">
      <b-col lg="6">
        <div class="copyright text-center text-lg-left text-muted">
          <a style="color:red" href="https://cuende.com" class="font-weight-bold ml-1" target="_blank">CUENDE Infometrics S.A. © {{year}} </a>
        </div>
      </b-col>
    </b-row>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: 2020
    };
  }
};
</script>
<style>

</style>
