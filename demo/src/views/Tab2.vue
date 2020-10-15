<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-title size="large">Form test</ion-title>
      <ExploreContainer name="Tab 2 page" />
      <form @submit.prevent="submitForm">
        <ion-list>
          <ion-item>
            <ion-label position="stacked">Custom</ion-label>
            <ion-input clearInput v-model="custom" />
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Select</ion-label>
            <ion-select v-model="pet">
              <ion-select-option value="cats">Cats</ion-select-option>
              <ion-select-option value="dogs">Dogs</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Date</ion-label>
            <ion-datetime display-format="DD-MMM-YY" v-model="date" />
            <ion-datetime display-format="HH:mm" v-model="date" />
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Address</ion-label>
            <ion-input clearInput v-model="address"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Notes</ion-label>
            <ion-textarea v-model="notes"></ion-textarea>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Toggle</ion-label>
            <ion-toggle v-model="isCool"></ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Radio: Names</ion-label>
            <ion-radio-group v-model="radioResult">
              <ion-item>
                <ion-label>Max</ion-label>
                <ion-radio slot="start" value="Max"></ion-radio>
              </ion-item>
              <ion-item>
                <ion-label>Ian</ion-label>
                <ion-radio slot="start" value="Ian"></ion-radio>
              </ion-item>
              <ion-item>
                <ion-label>Jean</ion-label>
                <ion-radio slot="start" value="Jean"></ion-radio>
              </ion-item>
            </ion-radio-group>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Checkbox</ion-label>
            <ion-checkbox v-model="large"></ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Search</ion-label>
            <ion-searchbar clearOnEdit v-model="query"></ion-searchbar>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Range</ion-label>
            <ion-range min="-200" max="200" color="secondary" v-model="range">
              <ion-label slot="start" v-if="range<0">{{range}}</ion-label>
              <ion-label slot="end" v-if="range>=0">{{range}}</ion-label>
            </ion-range>
          </ion-item>
        </ion-list>
        <ion-button expand="block" type="submit">Submit</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonTitle, IonContent, IonButton, IonList, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption, 
         IonDatetime,IonTextarea, IonToggle, IonRadio, IonRadioGroup, IonCheckbox, IonSearchbar, IonRange } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { reactive, toRefs, computed } from 'vue';

export default  {
  name: 'Tab2',
  components: { ExploreContainer, IonTitle, IonContent, IonPage, IonButton, IonList, IonItem, IonInput, IonLabel, IonSelect, IonSelectOption,
               IonDatetime,IonTextarea, IonToggle, IonRadio, IonRadioGroup, IonCheckbox, IonSearchbar, IonRange },
  setup() {
    const page = reactive({
          name: 'Max',
          address: 'Home',
          pet: "dogs",
          custom: 'This is custom',
          date: new Date().toISOString(),
          date2: '',
          range: 100,
          radioResult: "Max",
          isCool: false,
          notes: 'Very legal, very cool',
          large: false,
          query: 'This is a query'
    })
    // test reactive nested data structure
    const myDataStructure = computed(()=>{
      return {
          name: page.name,
          data: {
            address: page.address,
            date: page.date
          }
      }
    })
    function submitForm() {
      console.log('Submitting form:', {...page});
      console.log('structure:', myDataStructure.value);
    }
    return {
      ...toRefs(page), submitForm
    }
  }
}
</script>