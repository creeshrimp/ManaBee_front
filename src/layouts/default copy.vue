<template>
    <v-app>
        <v-app-bar
            color="primary"
            :height="60"
            :rounded="0"
            :image="false"
            :tile="false"
            density="default"
            scroll-behavior="hide"
        >
            <v-app-bar-nav-icon variant="text" />
            <v-toolbar-title> Vuetify Layout Designer </v-toolbar-title>
            <v-spacer />
            <template v-if="$vuetify.display.mdAndUp">
                <v-btn
                    icon="mdi-magnify"
                    variant="text"
                />
                <v-btn
                    icon="mdi-filter"
                    variant="text"
                />
            </template>
            <v-btn
                icon="mdi-dots-vertical"
                variant="text"
            />
        </v-app-bar>

        <v-navigation-drawer>
            <v-list-item
                title="My Application"
                subtitle="Vuetify"
            />
            <v-divider />
            <v-list-item
                link
                title="List Item 1"
            />
            <v-list-item
                link
                title="List Item 2"
            />
            <v-list-item
                link
                title="List Item 3"
            />
        </v-navigation-drawer>

        <v-navigation-drawer location="end">
            <template #prepend>
                <v-list-item
                    lines="two"
                    prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                    subtitle="Logged in"
                    title="Jane Smith"
                />
            </template>

            <v-divider />

            <v-list
                density="compact"
                nav
            >
                <v-list-item
                    prepend-icon="mdi-home-city"
                    title="Home"
                    value="home"
                />
                <v-list-item
                    prepend-icon="mdi-account"
                    title="My Account"
                    value="account"
                />
                <v-list-item
                    prepend-icon="mdi-account-group-outline"
                    title="Users"
                    value="users"
                />
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view></router-view>
        </v-main>

        <v-footer
            color="deep-purple-lighten-5"
            :app="true"
        >
            Made with 💜 Ameer Hamza
        </v-footer>
    </v-app>
</template>

<script setup>
//
</script>
