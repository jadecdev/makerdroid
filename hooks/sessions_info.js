'use strict';
const i18n = require('i18n');

exports.list = function (app) {
  let wip = `${i18n.__('WIP')}`;

  let richResponse = app.buildRichResponse()
		.addSimpleResponse(`<speak>${wip}</speak>`);

  app.ask(richResponse);
};
