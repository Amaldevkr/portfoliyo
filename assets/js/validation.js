$(document).ready (function () {  
    $('#contact-form').submit (function (e) { 
       e.preventDefault();  
       var name = $('#name').val();  
       var email = $('#email').val();  
       var subject = $('#subject').val(); 
       var messege = $('#messege').val();  

        $(".error").remove();  

        if (name.length < 1) {  
            $('#name').after('<span class="error">This field is required</span>');  
        }  

        if (email.length < 1) {  
            $('#email').after('<span class="error">This field is required</span>');  
        } else {
            var regEx  = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            var validEmail = regEx.test(email);  

            if (!validEmail) {  
                $('#email').after('<span class="error">Enter a valid email</span>');  
            }  
        }  

        if (subject.length < 1) {  
            $('#subject').after('<span class="error">This field is required</span>'); 
        } 

        if (messege.length < 1) {  
            $('#messege').after('<span class="error">This field is required</span>'); 
        } 
    });  
});  