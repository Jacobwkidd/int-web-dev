module.exports = function(api) {
    api.cache(true);
    return {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "browsers": "ie > 4" // Just added this to test if it would actually change anything
                    }
                }
            ]
        ],
        "plugins":  ["@babel/plugin-syntax-class-properties"]
    };
};