<template>
  <ion-split-pane when="sm">
    <ion-menu>
      <ion-content>
        <ion-list>
          <ion-list-header>
            Navigate
          </ion-list-header>
          <ion-menu-toggle auto-hide="false">
            <ion-item button detail @click="$router.push('home')"> 
              <ion-icon slot="start" name='home'></ion-icon>
              <ion-label>Home</ion-label>
            </ion-item>
            <ion-item button detail @click="$router.push('FormTst')"> 
              <ion-icon slot="start" name='search'></ion-icon>
              <ion-label>Form Test</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>
    <div class="ion-page" main>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                <ion-menu-toggle>
                    <ion-button>
                    <ion-icon slot="icon-only" name="menu"></ion-icon>
                    </ion-button>
                </ion-menu-toggle>
                </ion-buttons>
                <ion-title style="text-align: center">{{$route.meta.title}}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <ion-tabs>
                <!-- Match by "app.speakers" route name -->
                <ion-tab tab="home">
                </ion-tab>

                <!-- Match by an array of route names -->
                <ion-tab tab="FormTst">
                </ion-tab>
                <router-view />
                <!-- Use v-slot:bottom with Vue ^2.6.0 -->
                <template slot="bottom">
                    <ion-tab-bar>
                        <ion-tab-button tab="home">
                        <ion-icon name="home"></ion-icon>
                        <ion-label>Home</ion-label>
                        </ion-tab-button>
                        <ion-tab-button tab="FormTst">
                        <ion-icon name="search"></ion-icon>
                        <ion-label>Form</ion-label>
                        </ion-tab-button>
                </ion-tab-bar>
                </template>
            </ion-tabs>
        </ion-content>
    </div>
  </ion-split-pane>
</template>

<script>

</script>

<style>

</style>
