currentflow = context.getVariable("proxy.pathsuffix");
previousflow = context.getVariable("previousflow")|| null;
error = null;
if (currentflow == "/index") {

	if (previousflow != null && previousflow != currentflow) {
		error = "INVALID_SESSION";
	}

	context.setVariable("previousflow",currentflow);

}
else if(currentflow == "/msisdnsubmit")
{

	if (previousflow != "/index" && previousflow != currentflow) {
		error = "INVALID_SESSION";
	}
	context.setVariable("previousflow",currentflow);

}
else if(currentflow == "/pinSubmit")
{

	if (previousflow != "/msisdnsubmit" && previousflow != currentflow) {
		error = "INVALID_SESSION";
	}
	context.setVariable("previousflow",currentflow);

}

if(error != null){
	context.setVariable("flowError",error);
}

