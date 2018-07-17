var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Cancellation Page Model
 * =============
 */

var Cancellation = new keystone.List('Cancellation', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Cancellation Policy'
});

Cancellation.add({
	content: {type: Types.Html, wysiwyg: true, required: true, initial: true}
});



Cancellation.register();
