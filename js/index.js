function login()
{
	var email=document.getElementById('email');
	var password=document.getElementById('password');
	
	var data={
		
		"email":email,
		"Password":password
	};
	
	 $.ajax({
      url: "http://localhost:7000/users/login ",
      type: "POST",
	  datatype:'json',
	  data:data,
	  success: function(res){
		  console.log("success bhai");
		  window.location='reset.html';
	  }
	 });
   
}

function forgetPassword(){
	
	 $.ajax({
      url: "http://localhost:7000/users/forget ",
      type: "POST",
	  datatype:'json',
	  success: function(res){
		  console.log("success bhai");
		  window.location='reset.html';
	  }
	 });
}