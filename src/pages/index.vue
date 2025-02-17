<template>
    <!-- search bar -->
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
    <v-container>
        <v-row>
            <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4">
                <v-card color="secondary">
                    <v-card-title>
                        <v-avatar>
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-img>
                        </v-avatar>
                        <span class="ml-2">冬日暖陽</span>
                    </v-card-title>

                    <v-card-text>
                        <div>Whitehaven Beach</div>

                        <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn variant="outlined" color="white" block>聯絡冬日暖陽</v-btn>
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
