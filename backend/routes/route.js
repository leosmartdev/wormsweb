express = require('express'),
router = express.Router()
var User = require('../Models/user');
var uuid = require('uuid');


router.route('/createmailcode').post((req, res) => {
  
	var personInfo = req.body.params;

	if(!personInfo.email){
		res.send({"info":"no email"});
	} else {
		if (true) {

			User.findOne({email: personInfo.email}, function(err, data){
				if(!data){

          var mailcode = Math.floor(Math.random() * 1000000);

          var newPerson = new User({
            uu_id: uuid.v1(),
            email:personInfo.email,
            mailcode: mailcode,
            verify: false,
            ipaddress: req.ip
          });

          newPerson.save(function(err, Person){
            if(err)
              console.log(err);
            else
              console.log('Success');
          });
					res.send({"Success":"You are regestered,You can login now."});
				} else {

					res.send({"Success":"Email is already used."});
				}

			});
		} else {
			res.send({"Success":"password is not matched"});
		}
	}
})


router.route('/register').post((req, res) => {
  
	var personInfo = req.body.params;

	if(!personInfo.email){
		res.send({"info":"no email"});
	} else {
		if (true) {

			User.findOne({email: personInfo.email}, function(err, data){
				if(!data){

          // var mailcode = Math.floor(Math.random() * 1000000);

          // var newPerson = new User({
          //   uu_id: uuid.v1(),
          //   email:personInfo.email,
          //   mailcode: mailcode,
          //   verify: false,
          //   ipaddress: req.ip
          // });

          // newPerson.save(function(err, Person){
          //   if(err)
          //     console.log(err);
          //   else
          //     console.log('Success');
          // });
					res.send({"Success":"Cannot find user"});
				} else {
          if (data.verify == true) {
            res.send({"Success": "verified"});
          } else {
            if (data.mailcode == req.body.params.mailcode) {
              data.verify = true;
              data.save(function (err, Person) {
                if (err) console.log(err);
              })
              res.send({"Success": "verified"});
            } else {
              res.send({"Success": "unverified"});
            }
          }
				}
			});
		} else {
			res.send({"Success":"password is not matched"});
		}
	}
})

module.exports = router
