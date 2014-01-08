var verb = context.getVariable("request.verb");

var response_type = null;
var scope = null;
var client_id = null;
var redirect_uri = null;

if (verb == "POST") {
	response_type = context.getVariable("request.formparam.response_type");
	scope = context.getVariable("request.formparam.scope");
	client_id = context.getVariable("request.formparam.client_id");
	redirect_uri = context.getVariable("request.formparam.redirect_uri");
}

if (verb == "GET") {
	response_type = context.getVariable("request.queryparam.response_type");
	scope = context.getVariable("request.queryparam.scope");
	client_id = context.getVariable("request.queryparam.client_id");
	redirect_uri = context.getVariable("request.queryparam.redirect_uri");
}

if (response_type == null || scope == null || client_id == null
		|| redirect_uri == null) {
	context.setVariable("error", "Invalid_request");
} else if (response_type == "" || scope == "" || client_id == ""
		|| redirect_uri == "") {
	context.setVariable("error", "Invalid_request");
} else {
	context.setVariable("response_type", response_type);
	context.setVariable("scope", scope);
	context.setVariable("client_id", client_id);
	context.setVariable("redirect_uri", redirect_uri);
}
