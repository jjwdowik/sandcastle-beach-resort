var keystone = require('keystone')

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'groups';
  locals.title = 'Groups';


  view.query('groups', keystone.list('Groups').model.find());

  // Render the view
  view.render('groups');

  };
