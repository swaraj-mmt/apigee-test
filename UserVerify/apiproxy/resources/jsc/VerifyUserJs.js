firstname=context.getVariable("firstname")||"";
lastname=context.getVariable("lastname")||"";
msisdn=context.getVariable("msisdn")||"";
op_firstname=context.getVariable("op_firstname")||"";
op_lastname=context.getVariable("op_lastname")||"";
op_msisdn=context.getVariable("op_msisdn")||"";

var verificationStatus="fail";
if(firstname != null && op_firstname != null && firstname.toLowerCase() == op_firstname.toLowerCase())
	{
	verificationStatus="pass";
	}

if(verificationStatus="pass" && op_lastname.toLowerCase() == lastname.toLowerCase()){
	verificationStatus="pass";
}

context.setVariable("verificationStatus",verificationStatus);
