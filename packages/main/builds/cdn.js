import PluginName from '../src/index'

document.addEventListener('alpine:initializing', () => {
    PluginName(window.Alpine)
})
