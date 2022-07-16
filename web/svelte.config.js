const preprocess = require('svelte-preprocess');

module.exports = {

    preprocess: [
        preprocess(),
    ],
    vitePlugins:{
        disableDependencyReinclusion: ['@roxi/routify'],
    }
};
