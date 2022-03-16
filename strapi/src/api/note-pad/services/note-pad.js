'use strict';

/**
 * note-pad service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::note-pad.note-pad');
