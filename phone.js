// $(document).ready(function() {
//     $(".tabs:eq(0)").click();
// });

$(document).ready(function() {
    $('.tab').click(function() {
      $('.tab').removeClass('active');
      $(this).addClass('active');
      });
      
    $("#tab1").show();
    $("#tab2").show();
    $("#tab3").show();
    $("#tab4").show();


    $("#tab1").click(function() {
        $(".dialer").show();
        $(".contact-list").hide();
        $(".add-contact").hide();
        $(".about").hide(); 

    });

    $("#tab2").click(function() {
        $(".dialer").hide();
        $(".add-contact").hide();
        $(".contact-list").show();
        $(".about").hide(); 
    });

    $("#tab3").click(function() {
        $(".dialer").hide();
        $(".add-contact").show();
        $(".contact-list").hide();
        $(".about").hide(); 
    });

    $("#tab4").click(function() {
        $(".dialer").hide();
        $(".add-contact").hide();
        $(".contact-list").hide();
        $(".about").show(); 
    });
});



$(document).ready(function() {
      var number = "";
      
      $('.key').click(function() {
        var key = $(this).data('key');
        number += key;
        $('#phone-number').val(number);
      });
      
      $('#clear').click(function() {
        number = "";
        $('#phone-number').val(number);
      });
      
      $('#dial').click(function() {
        alert("Dialing: " + number);
      });
      

      $('#add-contact-btn').click(function() {
        var name = $('#contact-name').val();
        var email = $('#contact-email').val();
        var phone = $('#contact-phone').val();
        

      if (name && email && phone) {
          var newContact = $('<div class="contact"><h3>' + name + '</h3><p>Phone: ' + phone + '</p><p>Email: ' + email + '</p></div>');
          $('.contact-list').append(newContact);
          $('#contact-name').val('');
          $('#contact-email').val('');
          $('#contact-phone').val('');
        }
      });
      
      $('#clear-contact-btn').click(function() {
        $('#contact-name').val('');
        $('#contact-email').val('');
        $('#contact-phone').val('');
      });
});

$(document).ready(function() {
    var stylesheet1 = "phone.css";
    var currentStylesheet = stylesheet1;
    var fontSize = 16;  

    $("#toggle-dark-mode").click(function() {
    $('body').toggleClass('dark-mode');
    });


    $("#increase-font").click(function() {
        fontSize += 2;
        $('body').css('font-size', fontSize+'px');
    });

    $("#decrease-font").click(function() {
        fontSize -= 2;
        if (fontSize < 2) {
            fontSize = 2; 
        }
        $('body').css('font-size', fontSize+'px');
    });

});

