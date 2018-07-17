var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * WhatToBring Model
 * =============
 */

var WhatToBring = new keystone.List('WhatToBring', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'What to Bring'
});

WhatToBring.add({
	name: { type: String, required: true },
	image: {
		type: Types.CloudinaryImage,
		folder: 'sandcastle/amenities',
		autoCleanup: true
	}

});

WhatToBring.register();