var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Customer Review Model
 * =============
 */

var CustomerReview = new keystone.List('CustomerReview', {
	autokey: { from: 'name', path: 'key', unique: true }
});

CustomerReview.add({
	name: { type: String, required: true },
	review: { type: Types.Textarea, required: true, initial: true },
	stars: { 
		type: Types.Select,
		initial: true, 
		numeric: true, 
		options: [
			{ value: 1, label: 'One' }, 
			{ value: 2, label: 'Two' },
			{ value: 3, label: 'Three' }, 
			{ value: 4, label: 'Four' },
			{ value: 5, label: 'Five' }
		]
	},


});

CustomerReview.register();
