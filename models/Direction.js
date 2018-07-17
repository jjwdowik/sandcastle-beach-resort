var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Direction Page Model
 * =============
 */

var Direction = new keystone.List('Direction', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Direction Page'
});

Direction.add({
	backgroundImage1: {
		type: Types.CloudinaryImage,
		folder: 'sandcastle',
		autoCleanup: true
	},
	name: { type: String, required: true },
	headerFirst: { type: String, required: true, initial: true },
	linkContent: {type: Types.Html, wysiwyg: true, required: true, initial: true}
});



Direction.register();
