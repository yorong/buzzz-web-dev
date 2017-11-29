( function($) {

    function getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
              var cookie = jQuery.trim(cookies[i]);
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
    }

    function login_req(csrftoken) {
      var email = $('#login_email').val()
      var passwd = $('#login_password').val()
      $.ajax({
        method: "POST",
        url: '/login/',
        data: {
            'email': email,
            'password': passwd,
            'csrfmiddlewaretoken': csrftoken
        },
        success: function(data){
          console.log(data)
          alert(data.status)
        },
        error: function(data){
          console.log(data)
          alert(data.status)
        }
      })
    }

    $(document).on('click', '#login_btn', function () {
        var csrftoken = getCookie('csrftoken');
        login_req(csrftoken)
    })

    $(document).on('keydown', '#login_password', function (e) {
        if (e.keyCode == 13) {
          var csrftoken = getCookie('csrftoken');
          login_req(csrftoken)
        }
    })

})(jQuery);