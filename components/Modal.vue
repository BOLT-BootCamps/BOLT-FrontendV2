<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <img class="check" src="" alt="">
        <h6>{{ title }}</h6>
        <p>{{ dialog }}</p>
        <button class="confirm-button" @click="$emit('confirm-modal')">
          {{ confirmMessage }}
        </button>
        <button class="back-button" @click="$emit('close-modal')">
          Back
        </button>
      </div>
      <div class="close" @click="$emit('close-modal')">
        <img class="close-img" src="" alt="">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Modal Title'
    },
    dialog: {
      type: String,
      default: 'Modal Dialog'
    },
    confirmMessage: {
      type: String,
      default: 'Yes'
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 2;
}
.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}
.close-img {
  width: 25px;
}
.check {
  width: 150px;
}
h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}
p {
  /* font-weight: 500; */
  font-size: 16px;
  margin: 20px 0;
}
.confirm-button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
.back-button {
  width: 150px;
  height: 40px;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
  @apply border-2 border-black;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>
