var value=context.getVariable("appservicesuserprofile.content").trim();
var splitValues=value.split("|");
context.setVariable("msisdn", splitValues[0]);
context.setVariable("name", splitValues[1]);
context.setVariable("surname", splitValues[2]);