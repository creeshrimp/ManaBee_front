/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables

import { createVuetify } from 'vuetify'

// 自定義主題色
const manabeeLight = {
    dark: false,
    // colors: {
    //     primary: '#ffe8b7',
    //     secondary: '#676767',
    //     tertiary: '#8f3e00',
    //     accent: '#333333',
    //     error: '#FF5252',
    //     info: '#2196F3',
    //     success: '#4CAF50',
    //     warning: '#FFC107',
    // },
    colors: {
        background: '#ebebeb',
        surface: '#ffffff',
        'surface-bright': '#ffffff',
        'surface-light': '#EEEEEE',
        'surface-variant': '#424242',
        'on-surface-variant': '#EEEEEE',
        primary: '#fce77c',
        'primary-darken-1': '#b59505',
        'primary-darken-2': '#c47b31',
        'primary-lighten-1': '#fff1a3',
        'primary-lighten-2': '#fffbd9',
        secondary: '#555555',
        'secondary-darken-1': '#1F5592',
        'secondary-darken-2': '#1F5592',
        'secondary-lighten-1': '#737373',
        'secondary-lighten-2': '#949494',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
    variables: {
        'border-color': '#000000',
        'border-opacity': 0.12,
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.6,
        'disabled-opacity': 0.38,
        'idle-opacity': 0.04,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.08,
        'activated-opacity': 0.12,
        'pressed-opacity': 0.12,
        'dragged-opacity': 0.08,
        'theme-kbd': '#212529',
        'theme-on-kbd': '#FFFFFF',
        'theme-code': '#F5F5F5',
        'theme-on-code': '#000000',
    },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        defaultTheme: 'manabeeLight',
        themes: {
            manabeeLight,
        },
    },
})
