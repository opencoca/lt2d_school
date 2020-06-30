<template>
  <div :class="rootClass">
    <ul :class="`${rootClass}__wrapper`">
      <li v-for="(dataText, index) in dataTextsLocal" :key="index" :class="`${rootClass}__item`">
        <div
          :class="classTextBock(singleSelected.id, dataText.id, dataText.disabled)"
          @click="onSelectText(dataText)"
          v-if="!isMultiple"
        >
          <div
            :src="dataText.src"
            :alt="dataText.alt"
            :id="dataText.id"
            :height="h"
            :width="w"
            :class="`${rootClass}__img`"
          >{{ dataText.title }}</div>

          <label :for="dataText.id" v-if="useLabel" :class="`${rootClass}__lbl`">{{dataText.alt}}</label>
        </div>

        <div
          :class="classTextBockMultiple(dataText.id, dataText.disabled)"
          @click="onSelectMultipleText(dataText)"
          v-if="isMultiple"
        >
          <div
            :src="dataText.src"
            :alt="dataText.alt"
            :id="dataText.id"
            :height="h"
            :width="w"
            :class="`${rootClass}__img`"
          >{{ dataText.title }}</div>

          <label :for="dataText.id" v-if="useLabel" :class="`${rootClass}__lbl`">{{dataText.alt}}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "select-text",
  props: {
    dataTexts: {
      type: Array,
      default: () => []
    },
    selectedTexts: {
      type: Array,
      default: () => []
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    useLabel: {
      type: Boolean,
      default: false
    },
    rootClass: {
      type: String,
      default: "select-text"
    },
    activeClass: {
      type: String,
      default: "--selected"
    },
    h: {
      type: String,
      default: "auto"
    },
    w: {
      type: String,
      default: "auto"
    },
    limit: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      singleSelected: {
        id: ""
      },
      multipleSelected: []
    };
  },
  computed: {
    dataTextsLocal: function() {
      return this.dataTexts || [];
    }
  },
  mounted() {
    // set initial selectedText
    this.setInitialSelection();
  },
  methods: {
    classTextBock(selectedId, textId, isDisabled) {
      const baseClass = `${this.rootClass}__textBock`;
      if (isDisabled) {
        return `${baseClass} ${baseClass}--disabled`;
      }
      if (selectedId === textId) {
        return `${baseClass} ${baseClass}${this.activeClass}`;
      }
      return `${baseClass}`;
    },
    classTextBockMultiple(id, isDisabled) {
      const baseClass = `${this.rootClass}__textBock`;
      const baseMultipleClass = `${baseClass} is--multiple`;
      if (isDisabled) {
        return `${baseMultipleClass} ${baseClass}--disabled`;
      }
      if (this.isExistInArray(id)) {
        return `${baseMultipleClass} ${baseClass}${this.activeClass}`;
      }
      return `${baseMultipleClass}`;
    },
    onSelectText(objectText) {
      if (!objectText.disabled) {
        this.singleSelected = Object.assign(
          {},
          this.singleSelected,
          objectText
        );
        this.$emit("onselecttext", objectText);
      }
    },
    isExistInArray(id) {
      return this.multipleSelected.find(item => {
        return id === item.id;
      });
    },
    removeFromSingleSelected() {
      this.singleSelected = {};
      this.$emit("onselecttext", {});
    },
    removeFromMultipleSelected(id, dontFireEmit) {
      this.multipleSelected = this.multipleSelected.filter(item => {
        return id !== item.id;
      });
      if (!dontFireEmit) {
        this.$emit("onselectmultipletext", this.multipleSelected);
      }
    },
    resetMultipleSelection() {
      this.multipleSelected = [];
    },
    onSelectMultipleText(objectText) {
      if (!objectText.disabled) {
        if (!this.isExistInArray(objectText.id)) {
          if (this.limit > 0) {
            if (this.multipleSelected.length < this.limit) {
              this.multipleSelected.push(objectText);
              this.$emit("onselectmultipletext", this.multipleSelected);
            } else {
              this.$emit("onreachlimit", this.limit);
            }
          } else {
            this.multipleSelected.push(objectText);
            this.$emit("onselectmultipletext", this.multipleSelected);
          }
        } else {
          this.removeFromMultipleSelected(objectText.id, true);
          this.$emit("onselectmultipletext", this.multipleSelected);
        }
      }
    },
    setInitialSelection() {
      if (this.selectedTexts) {
        if (!this.isMultiple && this.selectedTexts.length === 1) {
          this.singleSelected = Object.assign({}, this.selectedTexts[0]);
        } else {
          this.multipleSelected = [].concat(this.selectedTexts);
        }
      }
    }
  }
};
</script>

<style>
.select-text__wrapper {
  overflow: auto;
  list-style-text: none;
  list-style-position: outside;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}

.select-text__item {
  margin: 0px 12px 12px 0px;
  float: left;
}

.select-text__textBock {
  cursor: pointer;
  padding: 6px;
  border: 1px solid #dddddd;
  display: block;
  padding: 4px;
  line-height: 20px;
  border: 1px solid #ddd;

  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;

  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);

  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.select-text__textBock--selected {
  background: #0088cc;
}

.select-text__textBock--disabled {
  background: #b9b9b9;
  cursor: not-allowed;
}

.select-text__textBock--disabled > .select-text__img {
  opacity: 0.5;
}

.select-text__img {
  -webkit-user-drag: none;
  display: block;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
}

.select-text__lbl {
  line-height: 3;
}

@media only screen and (min-width: 1200px) {
  .select-text__item {
    margin-left: 30px;
  }
}
</style>