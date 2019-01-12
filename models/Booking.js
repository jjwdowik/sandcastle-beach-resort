var keystone = require('keystone'),
  Types = keystone.Field.Types;

/**
 * Booking Page Model
 * =============
 */

var Booking = new keystone.List('Booking', {
  autokey: { from: 'name', path: 'key', unique: true },
  label: 'Booking Policy'
});

Booking.add({
  content: {type: Types.Html, wysiwyg: true, required: true, initial: true},
  enabled: { type: Boolean, label: 'Enable page to show up on site' }
});

Booking.register();
