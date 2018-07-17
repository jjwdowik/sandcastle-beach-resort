var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Building Model
 * =============
 */

var Building = new keystone.List('Building', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Building.add({
	name: { type: String, required: true },
	type: { 
		type: Types.Select,
		initial: true, 
		options: [
			{ value: 1, label: 'Cottage' }, 
			{ value: 2, label: 'Suite' }, 
			{ value: 3, label: 'House' }, 
		]
	},
	previewText: { type: Types.Textarea, required: true, initial: true },
	ratesFirstPrice: { type: Types.Money, format: '$ 0,0[.]00', initial: true },
	ratesSecondPrice: { type: Types.Money, format: '$ 0,0[.]00', initial: true },
	ratesThirdPrice: { type: Types.Money, format: '$ 0,0[.]00', initial: true},
	ratesFourthPrice: { type: Types.Money, format: '$ 0,0[.]00', initial: true},
	frontImage: {
		type: Types.CloudinaryImage,
		folder: 'sandcastle/buildings',
		autoCleanup: true
	},
	images: {
		type: Types.CloudinaryImages,
		folder: 'sandcastle/buildings',
		autoCleanup: true
	},
	description: { type: Types.Textarea, required: true, initial: true }
});

Building.register();