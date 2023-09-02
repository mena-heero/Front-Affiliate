<template>
  <div>
    <div class="filter-brand" v-on-clickaway="close">
      <div class="info" @click="toggleFilter">
        <div class="label">Dynamic Parameters</div>
        <i class="bi bi-caret-down-fill" style="text-align: right"></i>
      </div>
      <div class="content" v-show="openFilter == true">
        <div class="item-list">
          <div class="item">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="evest"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Link (15)
              </label>
            </div>
          </div>
          <div class="item">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="exness"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Banner (10)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";

@Component({
  name: "Afp",
  components: {},
})
export default class Afp extends Vue {
  openFilter = false;

  toggleFilter() {
    this.openFilter = !this.openFilter;
  }

  close() {
    this.openFilter = false;
  }
}
</script>

<style scoped lang="scss">
.filter-brand {
  height: 30px;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .label {
    }
  }
  .content {
    position: absolute;
    width: 200px;
    border: 1px solid grey;
    top: 30px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding-bottom: 20px;
    .item-list {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      .item {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        padding-left: 15px;
        padding-right: 15px;
      }
    }
  }
}
</style>
