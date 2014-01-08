var verb = context.getVariable("request.verb");

var client_id = null;
var msisdn = null;
var redirect_uri = null;

if (verb == "POST") {
	msisdn = context.getVariable("request.formparam.msisdn");
	client_id = context.getVariable("request.formparam.client_id");
	redirect_uri = context.getVariable("request.formparam.redirect_uri");
}

if (verb == "GET") {
	msisdn = context.getVariable("request.queryparam.msisdn");
	client_id = context.getVariable("request.queryparam.client_id");
	redirect_uri = context.getVariable("request.queryparam.redirect_uri");
}

if (msisdn == null || client_id == null
		|| redirect_uri == null) {
	context.setVariable("error", "Invalid_request");
} else if (msisdn == "" || client_id == ""
		|| redirect_uri == "") {
	context.setVariable("error", "Invalid_request");
} else {
	context.setVariable("msisdn", msisdn);
	context.setVariable("client_id", client_id);
	context.setVariable("redirect_uri", redirect_uri);
}
