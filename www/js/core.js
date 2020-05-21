$(document).ready(() => {
    
    $('#button_1').click(() => {
      const requestURL = 'www/' + $('#button_1').attr("value");
      console.log('making ajax request to:', requestURL);
      
    if($("#check").prop('checked') == true) {  

        
      $.ajax({
        url: requestURL,
        type: 'GET',
        dataType : 'json', 
        success: (data) => {
          console.log('You received some data!', data);
  
          if (data.status && data.pic) {
            $('#picture').attr('src', data.pic);
            $('#status').html(data.status);
          } else {
            $('#status').html('Error' + requestURL);
            $('#picture').attr('src', '');
          }
        },
      });

    } else {
        alert('Nono, you are human or humanoid');
    }

    });

    $('#button_2').click(() => {
        const requestURL = 'www/' + $('#button_2').attr("value");
        console.log('making ajax request to:', requestURL);

        if($("#check").prop('checked') == true) {  
        
    
       
        $.ajax({
          url: requestURL,
          type: 'GET',
          dataType : 'json', 
          success: (data) => {
            console.log('You received some data!', data);
    
            if (data.status && data.pic) {
              $('#picture').attr('src', data.pic);
              $('#status').html(data.status);
            } else {
              $('#status').html('Error' + requestURL);
              $('#picture').attr('src', '');
            }
          },
        });

        } else {
            alert('Nono, you are human or humanoid');
        }
      });
  
  
   
    $(document).ajaxError(() => {
      $('#status').html('Error: unknown ajaxError!');
    });
    
  });

