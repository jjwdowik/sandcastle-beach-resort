// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();
require('newrelic');

// Require keystone
var keystone = require('keystone');


// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'KeystoneBase',
	'brand': 'KeystoneBase',

	'sass': 'public',
	'static': ['public','files'],
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'emails': 'templates/emails',

	'auto update': false,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cloudinary config': process.env.CLOUDINARY_CONF,
	'cookie secret': process.env.COOKIE_SECRET

});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// auto compile sass
keystone.set('sass options', { force: true });

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

keystone.set('email locals', {
	logo_src: '/images/logo-email.gif',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7'
		}
	}
});

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.

// keystone.set('email rules', [{
// 	find: '/images/',
// 	replace: (keystone.get('env') == 'production') ? 'http://www.sandcastlebeachresort.com/images/' : 'http://localhost:3000/images/'
// }, {
// 	find: '/keystone/',
// 	replace: (keystone.get('env') == 'production') ? 'http://www.sandcastlebeachresort.com/keystone/' : 'http://localhost:3000/keystone/'
// }]);

// Load your project's email test routes

keystone.set('email tests', require('./routes/emails'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'home': 'homes',
	'accommodations': 'accommodations',
	'about': 'abouts',
	'groups': 'groups',
	'directions': 'directions'
});

keystone.set('cloudinary folders', true);
keystone.set('cloudinary prefix', (keystone.get('env') == 'production') ? 'keystone' : 'keystone-test');
keystone.set('cloudinary secure', true);
// Start Keystone to connect to your database and initialise the web server

keystone.start();
