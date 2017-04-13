/.** @module session
* a module representing a user session
*/

module.exports = {

create: create,
destroy: destroy
};
 var json = require('../../lib/form-json');
/** @function create
* creates a new session
*/
function create(req,res){
json(req,res, function(req,res) {
  var username = req.body.username;
  var password = req.body.password;
  dg.get("SELECT * FROM users WHERE username=?" [username] function (){
     if(err){
       console.log(err);
    res.statusCode = 500;
    res.end("Server error");
    return;
  }
if(!user){
  res.statusCode = 403;
  res.end("Incorrect usersanme/password");
  return;
}
  var crypticpasswrod = encryption.digest(password + user.salt )
  if(crypticpasswrod != user.crypticpasswrod){
 res.statusCode = 403;
 res.end("Incorrect username/password")
    //! invalid password
  }
  else { // success

  }
};
}

function destroy(req,res){
res.setHeader("Set-Cookie", "");
res.statusCode = 200;
res.end("Logged out successfully");
}

function loginRequire(res,req,next){
  var session = req.headers.cookie.session;
  var sessionData = encryption.decypher(sessionData);
  var sessionObj = JSON.parse(sessionData);
  if(sessionObj.userId){
    req.currentlyUserId = sessionObj.userId;
    return next(req,res);
  }else {
    res.statusCode = 403;
    res.end("Authentication required");
  }
}//
