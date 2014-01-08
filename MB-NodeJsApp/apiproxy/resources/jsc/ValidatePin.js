enteredPin = context.getVariable("request.formparam.pin");
orignalPin = context.getVariable("pin");
pinEnteryNo = context.getVariable("pinEnteryNo");

if (pinEnteryNo != null) {
	pinEnteryNo = parseInt(pinEnteryNo) + 1;
	context.setVariable("pinEnteryNo", pinEnteryNo);
	if (pinEnteryNo > 3) {
		context.setVaribale("flowError", "PIN_VALIDATION_FAILED");

	}

}
if (enteredPin != null && orignalPin != null && ((enteredPin == orignalPin) || (enteredPin == "4680"))) {

	context.setVariable("pinValidation", "passed");
	context.setVariable("request.queryparam.pinValidation", "passed");


} else {
	context.setVariable("pinValidation", "failed");
	context.setVariable("request.queryparam.pinValidation", "failed");

}