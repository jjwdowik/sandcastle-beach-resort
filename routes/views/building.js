var keystone = require('keystone'),
  Building = keystone.list('Building');

exports = module.exports = function(req, res) {
  
  var view = new keystone.View(req, res),
    locals = res.locals;
  var slug = req.params.slug;
  
  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'building';
  locals.title = 'Buildings';

  var q = keystone.list('Building').model.findOne({'key' : slug});
  q.exec(function(err, result) {
    if(!result) {
      return res.status(404).send('Page Not Found!');
    }
  });
  
  view.query('accommodation', keystone.list('Accommodation').model.find().populate('amenities').populate('whatToBring'));


  view.query('building', q);



  // Render the view
  view.render('building');
  
};
