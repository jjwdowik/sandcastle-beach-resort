var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Accommodation Page Model
 * =============
 */

var Accommodation = new keystone.List('Accommodation', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Accommodation Page'
});

Accommodation.add({
	backgroundImage1: {
		type: Types.CloudinaryImage,
		folder: 'sandcastle',
		autoCleanup: true
	},
	name: { type: String, required: true },
	headerFirst: { type: Types.Text, required: true, initial: true },
	subHeaderFirst: { type: Types.Text, required: true, initial: true },
	buttonTextFirst: { type: Types.Text, required: true, initial: true },
	announcementFirst: { type: Types.Text, required: false, initial: true },
	ratesFirstHeader: { type: String, required: true, initial: true},
	ratesFirstDates: { type: Types.Textarea, required: true, initial: true },
	ratesFirstTitle: { type: String, required: true, initial: true },
	ratesSecondTitle: { type: String, required: true, initial: true },
	ratesSecondHeader: { type: String, required: true, initial: true },
	ratesSecondDates: { type: Types.Textarea, required: true, initial: true },
	ratesThirdTitle: { type: String, required: true, initial: true },
	ratesFourthTitle: { type: String, required: true, initial: true },
	disclaimer:  { type: Types.Textarea, required: true, initial: true },
	amenities: { type: Types.Relationship, ref: 'AmenityType', many: true, initial: true },
	whatToBring: { type: Types.Relationship, ref: 'WhatToBring', many: true, initial: true},
	buildings: {type: Types.Relationship, ref: 'Building', many: true, initial: true }

});



Accommodation.register();
