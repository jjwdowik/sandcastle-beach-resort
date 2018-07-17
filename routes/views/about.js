var keystone = require('keystone')
	// About = keystone.list('About');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'about';
	locals.title = 'About Us';


	view.query('abouts', keystone.list('About').model.find());

	// Render the view
	view.render('about');

	};	
