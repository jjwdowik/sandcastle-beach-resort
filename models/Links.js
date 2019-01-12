var keystone = require('keystone'),
  Types = keystone.Field.Types;

/**
 * Link Page Model
 * =============
 */

var Links = new keystone.List('Links', {
  autokey: { from: 'name', path: 'key', unique: true },
  label: 'Links'
});

Links.add({
  name: { type: String, required: true },
  bookingLink: { type: String, required: true, initial: true }
});

Links.register();
