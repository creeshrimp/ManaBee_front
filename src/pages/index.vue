<template>
    <!-- search bar -->
    <v-container>
        <v-toolbar dense floating class="pa-1">
            <v-text-field
                :loading="loading"
                append-inner-icon="mdi-magnify"
                label="尋找志同道合的夥伴"
                variant="outlined"
                hide-details
                single-line
                @click:append-inner="search"
            ></v-text-field>
        </v-toolbar>
    </v-container>
    <v-container>
        <v-row>
            <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4">
                <v-card elevation="0" class="">
                    <v-card-title>
                        <v-avatar>
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-img>
                        </v-avatar>
                        <span class="ml-2">Yu-chin</span>
                    </v-card-title>

                    <v-card-text>
                        <div>
                            <h3 class="pt-3 mr-1 opacity-80 mb-2">我想學</h3>
                            <v-chip link class="mr-1" color="primary-darken-1" variant="tonal" size="small">#平面設計</v-chip>
                            <v-chip link class="mr-1" color="primary-darken-1" variant="tonal" size="small">#料理</v-chip>
                            <v-chip link class="mr-1" color="primary-darken-1" variant="tonal" size="small">#運動</v-chip>
                        </div>
                        <div class="pt-3 pb-1">
                            <h3 class="mr-1 opacity-80 mb-2">我能教</h3>
                            <v-chip link class="mr-1" color="primary-darken-1" variant="tonal" size="small">#linux安裝</v-chip>
                            <v-chip link class="mr-1" color="primary-darken-1" variant="tonal" size="small">#英語會話</v-chip>
                        </div>
                        <div class="pt-3 pb-1">
                            <h3 class="mr-1 opacity-80 mb-2">自我介紹</h3>
                            <p class="text-truncate">大家好我是YU-CHIN，我很會各種冷門技能，歡迎找我學習交流</p>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn variant="tonal" color="secondary-darken-1" block>聯絡Yu-Chin</v-btn>
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
