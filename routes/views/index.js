var keystone = require('keystone'),
	Home = keystone.list('Home');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';


	view.query('homes', keystone.list('Home').model.find().populate('amenities').populate('customerReviews'));
	view.query('linkData', keystone.list('Links').model.findOne());

	// Render the view
	view.render('index');

};
