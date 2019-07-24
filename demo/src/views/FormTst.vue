<template>
  <div class="ion-page">
    <ion-content fullscreen>
      <form @submit.prevent="submitForm">
        <ion-list>
          <ion-item>
            <ion-label position="stacked">Custom</ion-label>
            <IonInputVue v-model="user.custom" />
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Select</ion-label>
            <IonSelectVue v-model="user.pet">
              <ion-select-option value="cats">Cats</ion-select-option>
              <ion-select-option value="dogs">Dogs</ion-select-option>
            </IonSelectVue>
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Date</ion-label>
            <IonDatetimeVue v-model="user.date" />
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Address</ion-label>
            <IonInputVue v-model="user.address"></IonInputVue>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Notes</ion-label>
            <IonTextareaVue v-model="user.notes"></IonTextareaVue>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Toggle</ion-label>
            <IonToggleVue v-model="user.isCool"></IonToggleVue>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Radio</ion-label>
            <IonRadioVue v-model="user.enabled" value="enabled"></IonRadioVue>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Checkbox</ion-label>
            <IonCheckboxVue v-model="user.large"></IonCheckboxVue>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Search</ion-label>
            <IonSearchbarVue v-model="user.query"></IonSearchbarVue>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Toggle</ion-label>
            <IonRangeVue min="-200" max="200" color="secondary" v-model="user.range">
              <ion-label slot="start">-200</ion-label>
              <ion-label slot="end">200</ion-label>
            </IonRangeVue>
          </ion-item>
        </ion-list>
        <ion-button expand="block" type="submit">Submit</ion-button>
      </form>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "FormTst",
  methods: {
    submitForm() {
      console.log('Submitting form', this.user);
    }
  },
  data() {
    return {
      title: 'Form v-model test',
      user: {
        name: 'Max',
        address: 'Home',
        custom: 'This is custom',
        date: '',
        date2: '',
        range: 100,
        isCool: false,
        notes: 'Very legal, very cool',
        large: false,
        query: 'This is a query'
      }
    }
  }
};
</script>
