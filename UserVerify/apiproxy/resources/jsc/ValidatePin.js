enteredPin=context.getVariable(request.formparam.pin);
orignalPin=context.getVariable("pin");
pinEnteryNo=context.getVariable("pinEnteryNo");

if(enteredPin != null && orignalPin != null && enteredPin==orignalPin )
	{
	
	context.setVaribale("pinValidation","passed");	
	
	}
else {
	context.setVaribale("pinValidation","failed");
	if(pinEnteryNo!= null){
		pinEnteryNo=parseInt(pinEnteryNo)+1;
	context.setVariable("pinEnteryNo",pinEnteryNo);
	if(pinEnteryNo>4)
		{
		
		}
		
		
	}
	
}