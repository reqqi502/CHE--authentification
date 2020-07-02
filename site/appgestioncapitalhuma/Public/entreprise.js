$(document).ready(function () {
        getData();
        $("#SaveData").click(function(){  // Recuperation des valeurs
            var name = $("#name").val();
            var local = $("#local").val();
            var description = $("#description").val();
          
            if( name != "" && local != "" && description !=""){  // check les valeurs 
                 $.ajax({
                    url:'/ajoutentreprise',
                    type:'post',
                    data:{name,local,description},
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
        url: '/entreprise',
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


function AddToTable(data){
    
                // data correc
                var company_Data = '';
                $("#TableCompany").html(company_Data);
                $.each(data, function (key, value) {
                    var options="";
                    value.department.forEach(element => {
                        options+="<option>"+element.name+"</option>";
                    });
                    company_Data += '<tr>';
                    company_Data += '<td>' + value.name + '</td>';
                    company_Data += '<td>' + value.local + '</td>';
                    company_Data += '<td>' + value.description + '</td>';
                    company_Data += '<td>' + '<select class="form-control">' + options + '</select>'+ '</td>';
                    company_Data += '<td class="text-center"><a class="btn btnadd btn-xs" href="#" data-toggle="modal" data-target="#exampleModalCenter2" onclick="show('+key+')" ><span class="glyphicon glyphicon-edit"></span> Ajouter departement</a></td>';
                    company_Data += '</tr>';
                });
                $("#TableCompany").append(company_Data);
                
}

function show(indice){ 
    localStorage.setItem("id",indice);
}


