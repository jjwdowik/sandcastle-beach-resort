var keystone = require('keystone')

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'privacy-policy';
	locals.title = 'Privacy Policy';

	view.query('privacys', keystone.list('Privacy').model.find());
	view.query('linkData', keystone.list('Links').model.findOne());

	// Render the view
	view.render('privacy-policy');

	};
