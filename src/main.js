var yate = YATE(document.getElementById('yateContainer'));
var yashe = YASHE(document.getElementById('yasheContainer'));
var yasme = YASME(document.getElementById('yasmeContainer'));
//yashe.setOption("fullScreen", true);

yate.setSize(null,550);
yashe.setSize(null,550);
yasme.setSize(null,100);

function sendToJava () {
    updateTable();
    javaConnector.toLowerCase(yashe.getValue());
};

var jsConnector = {
    
};

function getJsConnector() {
    return jsConnector;
};


function updateTable(){

        validate();

        $('#validateTable').remove();
        $('#validateZone').append(
            $('<div class="table-responsive">'+
                '<table id="validateTable" class="table table-striped">'+ 
                '<thead id="thead" class="thead-dark">'+ 
                    '<tr>'+ 
                    '<th scope="col">Id</th>'+ 
                    '<th scope="col">Node</th>'+ 
                    '<th scope="col">Shape</th>'+ 
                    '<th scope="col">Details</th>'+ 
                    '</tr>'+ 
                '</thead>'+ 
                '<tbody id="tBody"/>'+
                '</table>'+
            '<div>'));

            let obj = 

             [
                 {
                     node:'<jhon>',
                     shape:'<Person>',
                     details:'conformant'
                 },
                 {
                     node:'<Pluto>',
                     shape:'<Person>',
                     details:'nonconformant'
                 }
             ];
            

            for(let i in obj){
                console.log(obj[i])
                let succces = 'table-success';
                let id = $('<td>').text("0");
                let node = $('<td>').text(obj[i].node);
                let shape = $('<td>').text(obj[i].shape)
                let details = $('<td>').text(obj[i].details);
                
                if(obj[i].details == 'nonconformant'){
                    succces = 'table-danger';
                }

                console.log(succces)

                $('#tBody')
                    .append(
                      $('<tr class='+succces+'>')
                      .append(id)
                      .append(node)
                      .append(shape)
                      .append(details)
                    ) 
        
            }
               /*  let id = $('<td>').text("0");
                let node = $('<td>').append());
                let shape = showQualify(el.shape,data.shapesPrefixMap);
                let details = $('<td>').append($('<details><pre>').text(el.reason));
                if(typeof shape == 'object'){
                shape = $('<td>').append(shape);
                }else{
                shape = $('<td>').text(shape);
                }
                

                  $('#tBody')
                    .append(
                      $('<tr class='+succces+'>')
                      .append(id)
                      .append(node)
                      .append(shape)
                      .append(details)
                    ) 
                }) */
}


var validate = function(){

console.log({yashe:yashe,yate:yate,yasme:yasme})

  let schemaContent = yashe.getValue();
  let shapeMapContent = yasme.getValue();
  
  var params ={
  "activeTab": "#dataTextArea",
  "dataFormat": "TURTLE",
  "data": "",
  "dataFormatTextArea": "TURTLE",
  "activeSchemaTab": "#schemaTextArea",
  "schemaEmbedded": false,
  "schemaFormat": "ShExC",
  "schema": schemaContent,
  "schemaFormatTextArea": "ShExC",
  "shapeMapActiveTab": "#shapeMapTextArea",
  "shapeMapFormat": "Compact",
  "shapeMap": shapeMapContent,
  "shapeMapFormatTextArea": "Compact",
  "schemaEngine": "ShEx",
  "triggerMode": "shapeMap",
}

let formData = params2Form(params);


    axios({
            method: 'post',
            url: 'http://rdfshape.weso.es:8080/api/schema/validate',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }},
            crossDomain: true
        }).then(response => response.data)
            .then((data) => {

                console.log(data)

               /*  $('#validateTable').remove();
                $('#validateZone').append(
                    $('<div class="table-responsive">'+
                        '<table id="validateTable" class="table table-striped">'+ 
                        '<thead id="thead" class="thead-dark">'+ 
                            '<tr>'+ 
                            '<th scope="col">Id</th>'+ 
                            '<th scope="col">Node</th>'+ 
                            '<th scope="col">Shape</th>'+ 
                            '<th scope="col">Details</th>'+ 
                            '</tr>'+ 
                        '</thead>'+ 
                        '<tbody id="tBody"/>'+
                        '</table>'+
                    '<div>'));
              
                Object.keys(data.shapeMap).map(s=>{
                  var el = data.shapeMap[s];
                  let succces = 'table-err';
                  if(el.status == 'conformant')succces = 'table-success';

                  let id = $('<td>').text(s);
                  let node = $('<td>').append(showQualify(el.node,data.nodesPrefixMap));
                  let shape = showQualify(el.shape,data.shapesPrefixMap);
                  let details = $('<td>').append($('<details><pre>').text(el.reason));
                  if(typeof shape == 'object'){
                    shape = $('<td>').append(shape);
                  }else{
                    shape = $('<td>').text(shape);
                  }
                

                  $('#tBody')
                    .append(
                      $('<tr class='+succces+'>')
                      .append(id)
                      .append(node)
                      .append(shape)
                      .append(details)
                    ) 
                })

                setTimeout(() => {
                  $('#loader').hide();
                  $('#modalContent').show();  
                }, 500); */
                
            })
            .catch(function (error) {
                $('#loader').hide();
                $('#modalContent').show();  
                console.log('Error doing server request');
                $('#modalContent').prepend(
                  $('<div id="alertValidate" class="alert">').text('Something went wrong')
                )
            });


 
}



var params2Form = function(params) {
    let formData = new FormData()
    Object.keys(params).forEach(key => {
        formData.append(key,params[key])
    });
    
    return formData;
}