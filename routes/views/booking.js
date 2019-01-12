var keystone = require('keystone'),
  Booking = keystone.list('Booking');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'booking';
  locals.title = 'Booking';

  view.query('bookings', keystone.list('Booking').model.find());
  view.query('linkData', keystone.list('Links').model.findOne());


  var q = keystone.list('Booking').model.findOne();
  q.exec(function(err, result) {
    if(!result || !result.enabled) {
      return res.status(404).send(keystone.wrapHTMLError('Sorry, no page could be found at this address (404)'));
    }
  });

  view.render('booking');

};
