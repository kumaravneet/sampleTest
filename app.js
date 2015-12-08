$(document).ready(function(){
   
    $("#btn-signup").click(function(){

           var myData = new Object();
            
             myData.email = $("#email").val();
             myData.firstname = $("#firstname").val();
             myData.lastname = $("#lastname").val();
             myData.passwd = $("#passwd").val();

          //  console.log(object);
          
             $.ajax({
				   type: "POST",
				   dataType: "json",
				   contentType: "application/json",
				   url: "http://localhost:8081/postData",
				   data: JSON.stringify(myData),
				   success: function(msg){
				       //alert('wow'+msg);
                       console.log("received data"+JSON.stringify(msg));

				   },
				   error: function(){
				   	    alert('in error');
				   }
           });

    })

})