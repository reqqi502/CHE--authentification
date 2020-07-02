$(document).ready(function () {
        getData();
        $("#SaveData").click(function(){  // Recuperation des valeurs
            var name = $("#name").val();
            var email = $("#email").val();
            var password = $("#password").val();
            var cpassword = $("#cpassword").val();
          
            if( name != "" && email != "" && password !="" && cpassword !=""){  // check les valeurs 
                 $.ajax({
                    url:'/ajoutelogdata',
                    type:'post',
                    data:{name,email,password,cpassword},
                    success:function(response){
                        if(response.request){
                            //send fetched
                            getData(response);
                        }  
                    }
                });
            }
        });  
        $("#SaveD").click(function(){ 
            var email = $("#email").val();
            var password = $("#password").val();
            var cpassword = $("#cpassword").val();
            
            if( email != "" && password != "" && cpassword !=""){  // check les valeurs 
              $.ajax({
                 url:'/ajoutelogdata',
                 type:'post',
                 data:{email,password,cpassword},
                 success:function(response){
                     if(response.request){
                         //send fetched
                         getData(response);
                     }
         
                        }  
                    });
            } 
        }); 
});

function getData(fetched){
  if(fetched===undefined){
  $.ajax({
      url: '/log',
      type: 'get',
      success: function (response) {
          if (response.request) {

              // data correc
              AddToTable(response.data);
              
          }
      },
  });
}else{
  AddToTable(fetched.data);
}
}

function show(indice){ 
    localStorage.setItem("id",indice);
}




$(document).ready(()=>{
    $('#Signin2').submit((e)=>{
      e.preventDefault();
      $.ajax({
        url:'/login',
        type:'post',
        contentType:'application/json',
        data: JSON.stringify($('#Signin2').serializeArray()),
        succes :(respons)=>{
          console.log('successfully got response');
          console.log(response);
        }
      });

    })
  });
  $(document).ready(()=>{
    $('#login2').submit((e)=>{
      e.preventDefault();
      $.ajax({
        url:'/login',
        type:'post',
        contentType:'application/json',
        data: JSON.stringify($('#login2').serializeArray()),
        succes :(respons)=>{
          console.log('successfully got response');
          console.log(response);
        }
      });

    })
  })


