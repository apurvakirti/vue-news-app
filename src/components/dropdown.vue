<template>
  <div class="custom-select" @blur="open = false">
    <div
      class="selected"
      :class="{
        open: open,
        'selected-text': isSelected,
        'not-selected': !isSelected,
      }"
      @click="toggleDropdown">
      {{ getSelectedVal }}
    </div>
    <div
      class="items"
      :class="{
        selectHide: !open,
      }"
      ref="dropdown"
      id="dropdown">
      <input
        v-model="searchKey"
        placeholder="Search"
        class="dropdown-input"
        type="text"
        ref="input"
        v-if="showSearchBox" />
      <div
        v-for="(option, i) of searchArr"
        :key="i"
        @click="selectOption(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options', 'defaultVal', 'value', 'showSearchBox'],
  data() {
    return {
      selected: this.value,
      open: false,
      searchKey: '',
    };
  },
  computed: {
    isSelected() {
      return this.options.includes(this.selected);
    },
    getSelectedVal() {
      return this.selected == '' ? this.defaultVal : this.selected;
    },
    searchArr() {
      return this.searchKey
        ? this.options.filter((el) =>
            el.toLowerCase().includes(this.searchKey.toLowerCase())
          )
        : this.options;
    },
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  watch: {
    value(newValue) {
      this.selected = newValue;
    },
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;
      this.$nextTick(() => {
        this.$refs.input &&  this.$refs.input.focus();
      });
    },
    handleOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.open = false;
        this.searchKey = '';
      }
    },
    selectOption(option) {
      this.selected = option;
      this.$emit('input', option);
      this.open = false;
    },
  },
};
</script>

<style scoped>

.dropdown-input {
  width: 95%;
  margin: 5px;
  color: #000;
  padding: 10px;
}
.custom-select {
  position: relative;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 34px;
  height: fit-content;
  width: 250px;
}
.custom-select div {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.custom-select .selected {
  text-transform: capitalize;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #a8a8a8;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #a8a8a8;
  border-radius: 5px;
}

.custom-select .selected:after {
  position: absolute;
  content: '';
  top: 16px;
  right: 0.75em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #666674 transparent transparent transparent;
}

.custom-select .items {
  text-transform: capitalize;
  color: #fff;
  border-radius: 0px 0px 5px 5px;
  overflow-y: scroll;
  max-height: 300px;
  position: absolute;
  background-color: #666674;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #6f6f74;
}

.selectHide {
  display: none;
}
.selected-text {
  color: black;
}
.not-selected {
  color: #a8a8a8;
}
</style>
