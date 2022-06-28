<template>
  <div class="maps-section">
      <div class="map-banner">
        <img src="@/assets/images/mapBanner.png" alt="" />
        <div class="map-content">
          <span class="contact">İletişim</span>
          <span class="address"
            >Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi
            D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul Email:
            bilgi@tesodev.com</span
          >
          <span class="email">Email: bilgi@tesodev.com</span>
        </div>
      </div>

      <div class="real-map">
          <map-geo/>
      </div>
    </div>
</template>

<script>
import mapGeo from '@/components/home/maps/mapGeo.vue'
export default{
  components:{
    mapGeo
  },
}
</script>

<style scoped lang="scss">
.maps-section {
  width: 100%;
  background: rgba(41, 78, 152, 0.72);
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .map-banner {
    padding-left: 55px;
    display: flex;
    align-items: center;
    img {
      width: 217px;
      height: 180px;
    }
    .map-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 25px;
      margin-right: 30px;
      width: 424px;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;

      color: #ffffff;
    }
    .address {
      margin-bottom: 50px;
    }
  }

  .real-map {
    margin-right: 55px;
    width: 470px;
    height: 222px;
    margin-bottom: 30px;
  }
}
</style>