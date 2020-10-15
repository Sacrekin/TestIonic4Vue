<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-title size="large">Tab 3</ion-title>
      <vExpansion header="Tab 3 Expandable 1">
        Accordion body
      </vExpansion>
      <vExpansion color="orange" textColor="white" header="Tab 3 Expandable 2">
        <ion-list>
          <ion-item>
            <ion-label position="stacked">Custom</ion-label>
            <ion-input clearInput />
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Select</ion-label>
            <ion-select>
              <ion-select-option value="cats">Cats</ion-select-option>
              <ion-select-option value="dogs">Dogs</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>
      </vExpansion>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonTitle, IonContent,IonList, IonLabel, IonItem, IonInput, IonSelect, IonSelectOption } from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue';
import vExpansion from '@/components/vExpansion.vue';

export default  {
  name: 'Tab3',
  components: { IonTitle, IonContent, IonPage, IonList, IonLabel, IonItem, IonInput, IonSelect, IonSelectOption, vExpansion }
}
</script>