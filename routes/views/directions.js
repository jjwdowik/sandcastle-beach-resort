var keystone = require('keystone')
	// Directions = keystone.list('Directions');



exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'directions';
	locals.title = 'Directions';

	view.query('directions', keystone.list('Direction').model.find());
	view.query('linkData', keystone.list('Links').model.findOne());

	// Render the view
	view.render('directions');

	};
