<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="center">{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="triangle" />
            <ion-label>Tab 1</ion-label>
          </ion-tab-button>
            
          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="ellipse" />
            <ion-label>Tab 2</ion-label>
          </ion-tab-button>
          
          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="square" />
            <ion-label>Tab 3</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonTabBar, IonTabButton, IonTabs, IonContent, IonLabel, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import { reactive, toRefs } from 'vue';

export default {
  name: 'Layout',
  components: { IonHeader, IonContent, IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonTitle, IonToolbar },
  setup() {
    const state = reactive({
      title: "Ionic BoilerPlate App"
    })
    return {
      ellipse, 
      square, 
      triangle,
      ...toRefs(state)
    }
  }
}
</script>
<style scoped>
.center {
  width: 99%;
  padding: 1px;
  margin: auto;
  text-align: center;
}
</style>