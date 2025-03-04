<template>
    <!-- search bar -->
    <v-container>
        <v-toolbar dense floating class="pa-1" color="transparent">
            <v-text-field
                :loading="loading"
                append-inner-icon="mdi-magnify"
                label="尋找志同道合的夥伴"
                variant="outlined"
                hide-details
                single-line
                color="secondary"
                @click:append-inner="search"
            ></v-text-field>
        </v-toolbar>
    </v-container>
    <v-container>
        <v-row>
            <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4">
                <v-card elevation="0" class="rounded-lg" color="white " variant="flat">
                    <div class="decoration-line bg-primary"></div>
                    <v-card-title class="d-flex align-center bg-primary-lighten-1">
                        <v-avatar>
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-img>
                        </v-avatar>
                        <span class="ml-2">Yu-chin</span>
                        <!-- message btn -->
                        <!-- <v-btn
                            icon="mdi-message-plus"
                            color="secondary-darken-1"
                            variant="tonal"
                            class="ml-auto float-end"
                        ></v-btn> -->
                    </v-card-title>

                    <v-card-text>
                        <div>
                            <h3 class="pt-5 mr-1 mb-2">想<span class="text-h5 text-primary-darken-1">學</span></h3>
                            <v-chip link class="mr-1" color="" variant="tonal" size="small">#平面設計</v-chip>
                            <v-chip link class="mr-1" color="" variant="tonal" size="small">#料理</v-chip>
                            <v-chip link class="mr-1" color="" variant="tonal" size="small">#運動</v-chip>
                        </div>
                        <div class="pt-5 pb-1">
                            <h3 class="mr-1 mb-2">想<span class="text-h5 text-primary-darken-1">教</span></h3>
                            <v-chip link class="mr-1" color="" variant="tonal" size="small">#linux安裝</v-chip>
                            <v-chip link class="mr-1" color="" variant="tonal" size="small">#英語會話</v-chip>
                        </div>
                        <div class="pt-5 pb-0">
                            <h3 class="mr-1 mb-2">自我介紹</h3>
                            <p class="text-truncate">大家好我是YU-CHIN，我很會各種冷門技能，歡迎找我學習交流</p>
                        </div>
                    </v-card-text>

                    <v-card-actions class="">
                        <v-btn variant="flat" color="primary-lighten-1" class="" block>聯絡Yu-Chin</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
function search() {
    console.log('search')
}
</script>

<style scoped>
.decoration-line {
    width: 100%;
    height: 5px;
}
</style>
