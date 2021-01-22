<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32">
          <span class="white--text">CAN</span>
        </v-avatar>

        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list-item-group v-model="selectedMenuItem" color="primary">
                <v-list color="transparent">
                  <v-list-item v-for="n in menuItems" :key="n" link>
                    <v-list-item-content>
                      <v-list-item-title> {{ n }} </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-list-item-group>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      menuItems: ['Цены', 'Графики'],
      selectedMenuItem: 0
    }),
  };
</script>
