var keystone = require('keystone')

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'cancellation-policy';
	locals.title = 'Cancellation Policy';

	view.query('cancellations', keystone.list('Cancellation').model.find());
	view.query('linkData', keystone.list('Links').model.findOne());

	// Render the view
	view.render('cancellation-policy');

};
