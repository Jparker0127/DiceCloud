<template lang="html">
  <single-card-layout class="tabletops">
    <v-list
      v-if="tabletops.length"
      class="tabletops"
    >
      <v-list-tile
        v-for="tabletop in tabletops"
        :key="tabletop._id"
        :to="`/tabletop/${tabletop._id}`"
      >
        <v-list-tile-content>
          <v-list-tile-title>
            {{ tabletop.name || 'Unnamed Tabletop' }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-card-text v-else>
      You don't own or belong to any tabletops yet
    </v-card-text>
    <v-btn
      color="primary"
      fab
      fixed
      bottom
      right
      :loading="addTabletopLoading"
      @click="addTabletop"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </single-card-layout>
</template>

<script>
import SingleCardLayout from '/imports/ui/layouts/SingleCardLayout.vue'
import Tabletops, { insertTabletop } from '/imports/api/tabletop/Tabletops.js';

export default {
  components: {
    SingleCardLayout,
  },
  data(){return {
    addTabletopLoading: false,
  }},
  meteor: {
    tabletops(){
      return Tabletops.find();
    },
    $subscribe: {
      'tabletops': [],
    },
  },
  methods: {
    addTabletop(){
      this.addTabletopLoading = true;
      insertTabletop.call(() => {
        this.addTabletopLoading = false;
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
