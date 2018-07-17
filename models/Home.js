var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Home Page Model
 * =============
 */

var Home = new keystone.List('Home', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Home Page'
});

Home.add({
	backgroundImage1: {
		type: Types.CloudinaryImage,
		folder: 'sandcastle',
		autoCleanup: true
	},
	name: { type: String, required: true },
	headerFirst: { type: Types.Text, required: true, initial: true },
	subHeaderFirst: { type: Types.Text, required: true, initial: true },
	buttonTextFirst: { type: Types.Text, required: true, initial: true },
	announcement: { type: Types.Textarea, required: false, initial: true },
	headerSecond: { type: Types.Text, required: true, initial: true },
	amenities: { type: Types.Relationship, ref: 'AmenityType', many: true, initial: true},
	backgroundImage2: {
		type: Types.CloudinaryImage,
		folder: 'sandcastle',
		autoCleanup: true
	},
	headerThird: { type: Types.Text, required: true, initial: true },
	subHeaderThird: { type: Types.Text, required: true, initial: true },
	buttonTextThird: { type: Types.Text, required: true, initial: true },
	announcementThird: { type: Types.Text, required: false, initial: true },
	headerFourth: { type: Types.Text, required: true, initial: true },
	customerReviews: {type: Types.Relationship, ref: 'CustomerReview', many: true, initial: true }

});



Home.register();
