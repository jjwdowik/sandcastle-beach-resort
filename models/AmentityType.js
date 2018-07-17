var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * AmenityType Model
 * =============
 */

var AmenityType = new keystone.List('AmenityType', {
	autokey: { from: 'name', path: 'key', unique: true }
});

AmenityType.add({
	name: { type: String, required: true },
	description: { type: Types.Textarea, required: true, initial: true },
	image: {
		type: Types.CloudinaryImage,
		folder: 'sandcastle/amenities',
		autoCleanup: true
	}

});

AmenityType.register();
