<template>
  <div>
    <div class="filters">
      <div class="date-chooser">
        <date-picker
          v-model="dateFrom"
          format="YYYY-MM-DD"
          valueType="format"
        ></date-picker>
        <i class="bi bi-arrow-down-up"></i>
        <date-picker
          v-model="dateTo"
          format="YYYY-MM-DD"
          valueType="format"
        ></date-picker>
      </div>
      <FilterBrand />
      <!-- <div class="clear-filter">
        <i class="bi bi-x"></i>
        <div class="">Clear filters</div>
      </div> -->
      <div class="show-creative">
        <a href="#">Run Report</a>
      </div>
    </div>
    <div class="main-content">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Created</th>
            <th scope="col">Amount</th>
            <th scope="col">Commission Type</th>
            <th scope="col">User ID</th>
            <th scope="col">AFP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">01/10/2023</th>
            <td>$600</td>
            <td>CPA</td>
            <td>amir_mubarak</td>
            <td>customAFP</td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td>$600</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import FilterBrand from "../components/filters/filter-brand";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

@Component({
  name: "Earnings",
  components: {
    FilterBrand,
    DatePicker,
  },
})
export default class Earnings extends Vue {
  dateFrom = this.$dayjs().subtract(7, "day").format("YYYY-MM-DD");
  dateTo = this.$dayjs().format("YYYY-MM-DD");
}
</script>

<style scoped lang="scss">
.filters {
  width: 100%;
  height: 60px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .date-chooser {
    height: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  i {
    font-size: 20px;
  }
  .clear-filter {
    cursor: pointer;
    color: red;
    height: 100%;
    display: flex;
    gap: 1px;
    justify-content: center;
    align-items: center;
  }
  .show-creative {
    a {
      align-items: center;
      background-color: #01aeab;
      border-radius: 8px;
      color: #fff;
      display: flex;
      font-size: 12px;
      font-weight: 700;
      gap: 10px;
      height: 40px;
      justify-content: center;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
.main-content {
  height: 100vh;
  width: 100%;
  margin-top: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
