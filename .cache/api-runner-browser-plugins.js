module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-fontawesome-css/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Wideway Engineering Solutions","short_name":"WES","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/assets/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"81890bcb809b51a3bd9fbe82770c4901"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
