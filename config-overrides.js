const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            '@home': path.resolve(__dirname, 'src/home'),
            '@detailed_data': path.resolve(__dirname, 'src/detailed_data'),
            '@response_list': path.resolve(__dirname, 'src/response_list'),
            '@forecast_5_days': path.resolve(__dirname, 'src/forecast_5_days'),
            '@page_layout': path.resolve(__dirname, 'src/page_layout'),
            '@page_not_found': path.resolve(__dirname, 'src/page_not_found'),
            '@shared': path.resolve(__dirname, 'src/shared'),
        },
    };

    return config;
};
