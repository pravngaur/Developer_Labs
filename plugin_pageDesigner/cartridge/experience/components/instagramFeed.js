'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');

/**
 * Render logic for youtubeComponent component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The template to be displayed
 */
module.exports.render = function (context) {
    var content = context.content;

    var model = new HashMap();
    model.postURL = content.postURL;
    model.sharedByURL = content.sharedByURL;

    return new Template('experience/components/commerce_assets/instagramPost').render(model).text;
};


