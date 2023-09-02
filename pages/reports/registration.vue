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
            <th scope="col">User ID</th>
            <th scope="col">Registration Date</th>
            <th scope="col">AFP</th>
            <th scope="col">Status</th>
            <th scope="col">Qualification Date</th>
            <th scope="col">Country</th>
            <th scope="col">Position Count</th>
            <th scope="col">First Deposit</th>
            <th scope="col">First Deposit Date</th>
            <th scope="col">Net Deposits</th>
            <th scope="col">Deposit Count</th>
            <th scope="col">Account ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Commission</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">amir_mubarak</th>
            <td>10/01/2023</td>
            <td>customAfp</td>
            <td>Answer</td>
            <td>01/01/2023</td>
            <td>BD</td>
            <td>1</td>
            <td>$300</td>
            <td>10/01/2023</td>
            <td>$600</td>
            <td>2</td>
            <td>ACC1212313</td>
            <td>Amir MubaraK</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td>$300</td>
            <td></td>
            <td>$600</td>
            <td>2</td>
            <td></td>
            <td></td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import FilterBrand from "../../components/filters/filter-brand";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

@Component({
  name: "Registration",
  components: {
    FilterBrand,
    DatePicker,
  },
})
export default class Registration extends Vue {
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
