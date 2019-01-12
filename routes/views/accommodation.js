var keystone = require('keystone'),
	Accomodation = keystone.list('Accommodation');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'accommodations';
	locals.title = 'Accomodations';

	view.query('accommodation', keystone.list('Accommodation').model.find().populate('buildings').sort( { type: 1 } ).populate('amenities').populate('whatToBring'));
	view.query('linkData', keystone.list('Links').model.findOne());

	// Render the view
	view.render('accommodation');

};
