<template>
  <div class="card">
    <h2 class="card-title">Exemplos Modal do https://bootstrap-vue.org/docs/components/modal</h2>
  
      <div>
        <b-button v-b-modal.modalPopover>Show Modal</b-button>
      
        <b-modal id="modalPopover" title="Modal with Popover" ok-only>
          <p>
            This
            <b-button v-b-popover="'Popover inside a modal!'" title="Popover">Button</b-button>
            triggers a popover on click.
          </p>
          <p>
            This <a href="#" v-b-tooltip title="Tooltip in a modal!">Link</a> will show a tooltip on
            hover.
          </p>
        </b-modal>
      </div>
<br>
      <div>
  <!-- Using modifiers -->
  <b-button v-b-modal.my-modal>Show Modal</b-button>

  <!-- Using value -->
  <b-button v-b-modal="'my-modal'">Show Modal</b-button>

  <!-- The modal -->
  <b-modal id="my-modal">Hello From My Modal!</b-modal>
</div>

<br>
<div>
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template v-slot:modal-title>
      Using <code>$bvModal</code> Methods
    </template>
    <div class="d-block text-center">
      <h3>Hello From This Modal!</h3>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
  </b-modal>
</div>

  </div>
  
</template>

<script>
var Tabulator = require("tabulator-tables");

export default {
  name: "Test",
  data() {
    return {};
  }
};
</script>
