<template lang="html">
  <v-list-tile
    class="spell-slot-list-tile"
    v-on="hasClickListener ? {click} : {}"
  >
    <v-list-tile-content>
      <v-list-tile-title>
        <div
          v-if="model.value > 4"
          class="layout row value"
          style="align-items: baseline;"
        >
          <div
            style="font-weight: 500; font-size: 24px"
            class="current-value"
          >
            {{ model.currentValue }}
          </div>
          <div class="ml-2 max-value">
            /{{ model.value }}
          </div>
        </div>
        <div
          v-else
          class="layout row align-center slot-bubbles"
        >
          <v-icon
            v-for="i in model.value"
            :key="i"
          >
            {{
              i > model.currentValue ?
                'radio_button_unchecked' :
                'radio_button_checked'
            }}
          </v-icon>
        </div>
      </v-list-tile-title>
      <v-list-tile-sub-title>
        {{ model.name }}
      </v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-avatar v-if="!hideCastButton">
      <v-btn
        icon
        flat
        class="primary--text"
        :data-id="`spell-slot-cast-btn-${model._id}`"
        @click.stop="$emit('cast')"
      >
        <v-icon>$vuetify.icons.spell</v-icon>
      </v-btn>
    </v-list-tile-avatar>
  </v-list-tile>
</template>

<script>
import numberToSignedString from '/imports/ui/utility/numberToSignedString.js';
export default {
	props: {
		model: {
      type: Object,
      required: true,
    },
    dark: Boolean,
    hideCastButton: Boolean,
	},
	computed: {
		currentValue(){
			return this.value - this.damage;
		},
    hasClickListener(){
      return this.$listeners && !!this.$listeners.click;
    },
	},
	methods: {
		signed: numberToSignedString,
		click(e){
			this.$emit('click', e);
		},
	},
};
</script>

<style lang="css" scoped>
	.spell-slot-list-tile {
		background: inherit;
	}
	.v-list__tile__action {
		width: 112px;
    flex-shrink: 0;
	}
	.spell-slot-list-tile.hover {
		background: #f5f5f5 !important;
	}
	.theme--dark .spell-slot-list-tile.hover {
		background: #515151 !important;
	}
	.content {
		cursor: pointer;
	}
	.max-value {
		color: rgba(0,0,0,.54);
	}
	.theme--dark .max-value {
		color: rgba(255, 255, 255, 0.54);
	}
  .primary--text .v-icon, .primary--text .max-value, .primary--text .current-value, .primary--text .v-list__tile__sub-title {
    color: #b71c1c
  }
</style>
