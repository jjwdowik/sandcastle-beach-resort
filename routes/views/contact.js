var keystone = require('keystone'),
	Enquiry = keystone.list('Enquiry');

var axios = require('axios');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// Set locals
	locals.section = 'contact';
	locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;
	locals.title = 'Contact Us';

	view.query('linkData', keystone.list('Links').model.findOne());
	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'contact' }, function(next) {

		var newEnquiry = new Enquiry.model(),
			updater = newEnquiry.getUpdateHandler(req);

		var googleUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + process.env.GOOGLE_RECAPTCHA_SECRETKEY +
			"&response=" + req.body["g-recaptcha-response"];

		var googleCall = axios.post(googleUrl, {
        headers: {
            'Content-Type': 'application/json',
        }
		  })
		  .then(function (response) {
		  	return response;
		  })
		  .catch(function (error) {
		    req.flash('error', 'Error with request. Please try again. ');
		    next();
		  });

		googleCall.then(function(response) {
	  	if(response.data.success) {
				updater.process(req.body, {
					flashErrors: true,
					fields: 'name, email, phone, enquiryType, message',
					errorMessage: 'There was a problem submitting your enquiry:'
				}, function(err) {
					if (err) {
						locals.validationErrors = err.detail;
					} else {
						locals.enquirySubmitted = true;
					}
					next();
				});
	  	} else {
	  		req.flash('error', 'Error processing reCAPTCHA. Please try again. ');
	  		next();
	  	}
		}).catch(function (response) {
    	req.flash('error', 'Error with request. Please try again. ');
		});



	});

	view.render('contact');

};
