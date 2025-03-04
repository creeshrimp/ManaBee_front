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
            <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="5" lg="4">
                <div class="honeycomb">
                    <v-card elevation="0" color="surface" variant="flat" align="center">
                        <!-- <div class="decoration-line bg-primary"></div> -->
                        <v-card-title class="">
                            <v-avatar>
                                <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-img>
                            </v-avatar>
                            <div class="ml-1 mt-2">Yu-chin</div>
                            <!-- message btn -->
                            <!-- <v-btn
                                    icon="mdi-message-plus"
                                    color="secondary-darken-1"
                                    variant="tonal"
                                    class="ml-auto float-end"
                                ></v-btn> -->
                        </v-card-title>

                        <v-card-text class="text-center">
                            <div>
                                <h3 class="mt-2 mr-1 mb-2">想學</h3>
                                <v-chip link class="mr-1" color="" variant="tonal" size="small">#平面設計</v-chip>
                                <v-chip link class="mr-1" color="" variant="tonal" size="small">#料理</v-chip>
                                <v-chip link class="mr-1" color="" variant="tonal" size="small">#運動</v-chip>
                            </div>
                            <div class="mt-5 pb-1">
                                <h3 class="mr-1 mb-2">想教</h3>
                                <v-chip link class="mr-1" color="" variant="tonal" size="small">#linux安裝</v-chip>
                                <v-chip link class="mr-1" color="" variant="tonal" size="small">#英語會話</v-chip>
                            </div>
                            <div class="mt-5 pb-0">
                                <h3 class="mr-1 mb-2">自我介紹</h3>
                                <p class="text-truncate">大家好我是YU-CHIN，我很會各種冷門技能，歡迎找我學習交流</p>
                            </div>
                        </v-card-text>

                        <v-card-actions class="d-flex justify-center">
                            <v-btn variant="flat" color="primary-lighten-1" size="large">聯絡他</v-btn>
                        </v-card-actions>
                    </v-card>
                    <!-- <v-btn variant="flat" color="secondary-darken-1" size="large" class="contact-btn">聯絡他</v-btn> -->
                </div>
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

.honeycomb {
    min-width: 410px;
    aspect-ratio: 1/1.15;
    position: relative;

    /* content */
    & > :nth-child(1) {
        width: 96%;
        height: 98%;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;

        padding-top: 1.8rem;
        /* padding: 1.5rem 0 0 1.5rem; */
    }

    /* border */
    &:before {
        content: '';
        background-color: rgb(190, 190, 187);
        width: 100%;
        height: 100%;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

        position: absolute;
        top: 52%;
        left: 53.5%;
        translate: -50% -50%;
    }

    .contact-btn {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        translate: -50% -50%;
    }
}
</style>
