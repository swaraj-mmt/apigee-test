
/*
 * GET home page.
 */



exports.index = function(req, res){
res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    var sessionid=req.param("sessionid");
    var msisdn = req.param("msisdn");
    console.log("req.param: " + req.param("sessionid"));
    console.log("req.param msisdn " + msisdn);
    
     if(req.headers["msisdn"] != null) {
    	 res.render('consent', { title: 'Consent',
             sessionid :req.param("sessionid") ,userId : req.headers["msisdn"] , redirectURL : req.query.redirect_uri+'?error=refused'
          }) 	 
    	
    }
    else if (msisdn != null){
	    			 res.render('msisdn', { title: 'msisdn',
	                     sessionid :req.param("sessionid") ,userId : msisdn ,redirectURL : req.query.redirect_uri+'?error=refused', msisdn : msisdn  })
    } 
    else {
    	    	//TODO throw Error
    	    	
    }
  
};


exports.redirect = function(req, res){
      res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.send(200);
};

exports.errorflow = function(req, res){
      res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    res.render('errorflow', { title: 'Error',
    error :req.param("error"),
    description : req.param("description"),redirectURL : req.query.redirect_uri , header : 'Error'
 })
};

exports.consent = function(req, res){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');



    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    
    var username = req.body.username;
    var password = req.body.password;
    client.login(username, password, function (error, response) {
            if (error) {
            	res.render('errorflow', { title: 'Error',
            	    error : 'Authentication error',
            	    description : 'Invalid username or password',redirectURL : req.query.redirect_uri+'?error=true' ,header : 'Login failed'
            	 })
            	} else {
                //success — user has been logged in
                var userId = response.user.uuid;

                res.render('consent', { title: 'Consent',
                    sessionid :req.param("sessionid") ,userId : userId , redirectURL : req.query.redirect_uri+'?error=refused'
                 })
            }
        }
    );

   
};

	exports.pinSubmit = function(req, res){
		res.header('Access-Control-Allow-Origin', '*');
		    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
		    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
		    // intercept OPTIONS method
		    if ('OPTIONS' == req.method) {
		      res.send(200);
		    }
		    var pin = req.body.pin;
		  if(req.query.pinValidation == "passed"){
		    	
		    	 var userId = req.query.userId;

	                res.render('consent', { title: 'Consent', sessionid :req.param("sessionid") ,userId : userId , redirectURL : req.query.redirect_uri+'?error=refused' })
		    	 
		    }else{
		    	
		    	res.render('errorflow', { title: 'Error',
            	    error : 'Invalid Pin',
            	    description : 'Pin entered by you is incorrect',redirectURL : req.query.redirect_uri+'?error=true' ,header : "Authentication failed"
            	 })
		    }

		};	
		
		
		exports.msisdn = function(req, res){
			res.header('Access-Control-Allow-Origin', '*');
			    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
			    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
			    // intercept OPTIONS method
			    if ('OPTIONS' == req.method) {
			      res.send(200);
			    }

		                res.render('msisdn', { title: 'msisdn', sessionid :req.param("sessionid")})

			};	
			
			exports.msisdnsubmit = function(req, res){
				res.header('Access-Control-Allow-Origin', '*');
				    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
				    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
				    // intercept OPTIONS method
				    if ('OPTIONS' == req.method) {
				      res.send(200);
				    }
				    var msisdn = req.body.msisdn;
				  
				    							    		
				    			 res.render('pin', { title: 'Pin',
				                     sessionid :req.param("sessionid") ,userId : req.query.userId||"" ,redirectURL : req.query.redirect_uri+'?error=refused'
				                  })

				};	
			

