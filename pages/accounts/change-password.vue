<template>
  <div>
    <div class="filters">Change Password</div>
    <div class="main-content">
      <ValidationObserver
        v-slot="{ invalid }"
        tag="form"
        @submit.prevent="handleSignup"
      >
        <ValidationProvider
          :rules="{ required: true }"
          v-slot="{ errors }"
          tag="div"
          class="mb-3 form-item"
        >
          <div class="form-input mb-1">
            <input
              type="password"
              name="Current Password"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="Current Password"
              v-model="formData.current_password"
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
              type="password"
              name="New Password"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="New Password"
              v-model="formData.new_password"
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
              type="password"
              name="Retype Password"
              :class="{
                'form-control': true,
                redborder: errors[0],
              }"
              class="form-control"
              placeholder="Retype Password"
              v-model="formData.new_password2"
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
  name: "ChangePassword",
  components: {},
})
export default class ChangePassword extends Vue {
  formData = {
    current_password: "",
    new_password: "",
    new_password2: "",
  };
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
