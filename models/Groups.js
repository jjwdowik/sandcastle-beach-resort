var keystone = require('keystone'),
  Types = keystone.Field.Types;

/**
 * Groups Page Model
 * =============
 */

var Groups = new keystone.List('Groups', {
  autokey: { from: 'name', path: 'key', unique: true },
  label: 'Group Page'
});

Groups.add({
  name: { type: String, required: true },
  headerFirst: { type: Types.Text, required: false, initial: false },
  subHeaderSection: { type: Types.Html, wysiwyg: true, required: false, initial: false },
  backgroundHero: {
    type: Types.CloudinaryImage,
    folder: 'sandcastle',
    autoCleanup: true
  },
  header1: { type: Types.Text, required: false, initial: false },
  section1: {type: Types.Html, wysiwyg: true, required: false, initial: false},
  image1: {
    type: Types.CloudinaryImage,
    folder: 'sandcastle',
    autoCleanup: true
  },
  header2: { type: Types.Text, required: false, initial: false },
  section2: {type: Types.Html, wysiwyg: true, required: false, initial: false},
  image2: {
    type: Types.CloudinaryImage,
    folder: 'sandcastle',
    autoCleanup: true
  },
  header3: { type: Types.Text, required: false, initial: false },
  section3: {type: Types.Html, wysiwyg: true, required: false, initial: false},
  image3: {
    type: Types.CloudinaryImage,
    folder: 'sandcastle',
    autoCleanup: true
  }

});



Groups.register();
