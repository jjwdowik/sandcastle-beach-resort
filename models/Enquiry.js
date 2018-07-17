var keystone = require('keystone'),
	Types = keystone.Field.Types;

var api_key = 'key-3c72d1c120bcbe4daf32ed6257569f11';
var domain = 'sandbox95ece2594e0846d2ac084a0a0132d82a.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
	noedit: true
});

Enquiry.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	enquiryType: { type: Types.Select, options: [
		{ value: 'message', label: 'Just leaving a message' },
		{ value: 'question', label: 'I\'ve got a question' },
		{ value: 'reservation', label: 'Make a reservation' },
		{ value: 'other', label: 'Something else...' }
	] },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now }
});

Enquiry.schema.pre('save', function(next) {
	this.wasNew = this.isNew;
	next();
});

Enquiry.schema.post('save', function() {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Enquiry.schema.methods.sendNotificationEmail = function(callback) {
	
	if ('function' !== typeof callback) {
		callback = function() {};
	}
	
	var enquiry = this;
	
	keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {
		
		if (err) return callback(err);
		
		// new keystone.Email('enquiry-notification').send({
		// 	to: admins,
		// 	from: {
		// 		name: 'KeystoneBase',
		// 		email: 'contact@keystonebase.com'
		// 	},
		// 	subject: 'New Enquiry for KeystoneBase',
		// 	enquiry: enquiry
		// }, callback());

		// console.log(admins)


		// var emails = "";
		// for(var i = 0; i < admins.length; i++) {
		// 	if(i != 0) {
		// 		emails += ",";
		// 	}
		// 	emails += admins[i].email;
		// 	// console.log(admins[i].email)
		// }
		// override email admin for now, just go to one
		emails = "sandcastleoscoda@yahoo.com";
		var data = {
		  from: 'Sandcastle Beach Resort <contact@sandcastlebeachresort.com>',
		  to: emails,
		  "h:Reply-To": enquiry.email,
		  subject: 'New Enquiry for Sandcastle',
		  html: '<p>Senders Information:</p><br /><p>Name: ' +  enquiry.name.full + '</p><p>Email: ' + enquiry.email + '</p><p>Phone: ' + enquiry.phone + '</p><p>Enquiry Type: ' + enquiry._.enquiryType.format() + '</p><p>Message: ' + enquiry.message.html + '</p>'
		};

		mailgun.messages().send(data, function (error, body) {
		  // console.log("sent")
		  // console.log(error);

		  // console.log(body);
		});
		
	});
	
};

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();
