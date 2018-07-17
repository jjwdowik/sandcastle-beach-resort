var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Privacy Page Model
 * =============
 */

var Privacy = new keystone.List('Privacy', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Privacy Policy Page'
});

Privacy.add({
	content: {type: Types.Html, wysiwyg: true, required: true, initial: true}
});



Privacy.register();
