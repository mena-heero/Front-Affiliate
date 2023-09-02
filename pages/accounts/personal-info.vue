<template>
  <div>
    <div class="filters">Personal Information</div>
    <div class="main-content">
      <ValidationObserver
        v-slot="{ invalid }"
        tag="form"
        @submit.prevent="handleSignup"
      >
        <ValidationProvider
          :rules="{ required: true, regex: /^[a-zA-Z0-9\.]*$/ }"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <input
              type="text"
              name="Full name"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="Full name"
              v-model="formData.full_name"
            />
          </div>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <input
              type="email"
              name="Email"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="Email"
              v-model="formData.email"
            />
          </div>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <select
            v-model="formData.country"
            class="form-select country-select"
            name="Country"
          >
            <option value="">Select Country</option>
            <option
              v-for="(item, idx) in countries"
              :key="'country_' + idx"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <input
              type="text"
              name="Phone"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="Phone number"
              v-model="formData.phone"
            />
          </div>
          <small v-if="errors.length" class="error">
            {{ errors[0] }}
          </small>
        </ValidationProvider>

        <div class="d-grid">
          <button
            type="submit"
            :disabled="invalid"
            class="btn btn-primary btn-block py-2 fw-semibold"
          >
            Update
          </button>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";

@Component({
  name: "PersonalInfo",
  components: {},
})
export default class PersonalInfo extends Vue {
  formData = {
    full_name: "Amir Mubarak",
    email: "mubarak117136@gmail.com",
    country: 1,
    phone: "+8801623539982",
  };

  countries = [
    {
      id: 1,
      name: "Bangladesh",
    },
    {
      id: 2,
      name: "India",
    },
  ];
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
  font-size: 18px;
  font-weight: 600;
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
form {
  width: 30%;
  .form-item {
    display: flex;
    gap: 10px;
    flex-direction: column;
    .form-input {
      input {
        border: 1px solid gray;
        background: white;
        background-color: white;
        color: black;
      }
    }
  }
}
</style>
