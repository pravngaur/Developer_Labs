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
    model.textToShow = content.textToShow;

    var currentTime = new Date(Date.now());
    currentTime.setMinutes(currentTime.getMinutes() + 3);
    response.setExpires(currentTime);

    return new Template('experience/components/commerce_assets/renderText').render(model).text;
};
