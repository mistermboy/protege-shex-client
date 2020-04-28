var yate = YATE(document.getElementById('yateContainer'));
var yashe = YASHE(document.getElementById('yasheContainer'));
var yasme = YASME(document.getElementById('yasmeContainer'));
//yashe.setOption("fullScreen", true);

yate.setSize(null,550);
yashe.setSize(null,550);
yasme.setSize(null,100);


mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

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
}