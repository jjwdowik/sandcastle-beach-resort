var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * About Page Model
 * =============
 */

var About = new keystone.List('About', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'About Page'
});

About.add({
	backgroundImage1: {
		type: Types.CloudinaryImage,
		folder: 'sandcastle',
		autoCleanup: true
	},
	name: { type: String, required: true },
	headerFirst: { type: String, required: true, initial: true },
	storyDescription: { type: Types.Html, wysiwyg: true, required: true, initial: true }
});



About.register();
