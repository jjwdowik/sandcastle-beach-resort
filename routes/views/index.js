var keystone = require('keystone'),
	Home = keystone.list('Home');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// keystone.list('Home').model.find().populate('amenities').exec(function(err, home) { console.log(home) });

	view.query('homes', keystone.list('Home').model.find().populate('amenities').populate('customerReviews'));


	// Render the view
	view.render('index');
	
};
