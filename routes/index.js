/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	// enforce HTTPS
  if (process.env.NODE_ENV === 'production') {
      var enforce = require('express-sslify');
      app.use(enforce.HTTPS({ trustProtoHeader: true }));
  }
	// Views
	app.get('/', routes.views.index);
	app.get('/accommodations', routes.views.accommodation);
	app.get('/accommodations/:slug', routes.views.building);
	app.get('/about', routes.views.about);
  app.get('/groups', routes.views.groups);
	app.get('/location-links', routes.views.directions);
	app.get('/privacy-policy', routes.views.privacy);

	app.get('/cancellation-policy', routes.views.cancellation);

  app.get('/booking', routes.views.booking);

	app.all('/contact', routes.views.contact);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
