
window.$ = window.jQuery = require('jquery');
window.DataTable = require('datatables');
require('./bootstrap');


$(document).ready(function () {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    reset_form();
});

var reset_form = function () {
    $.get('/load_upload_form', function (form_html) {
        $(".upload-form-div").empty();
        $(".upload-form-div").append(form_html);
        $('#csv_file').bind('change', function() {
            if(this.files[0].size>1000000){
                alert("This File is too BIG");
                reset_form();
            }
            //this.files[0].size gets the size of your file.
          });
        upload_file();
        return false;
    });
};

var upload_file = function () {
    $("#upload_file").click(function (event) {
        
        //stop submit the form, we will post it manually.
        event.preventDefault();
        var form = $('#upload_form')[0];

        // Create an FormData object 
        var data = new FormData(form);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/store_data",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {
                if( (data.error) == 1){
                    alert('wrong file structure!');
                    return false;
                }
                console.log("SUCCESS : ", data);
                $("#upload_file").prop("disabled", false);
                $(".upload-form-div").empty();
                reset_form();
                alert('File Uploaded');
                return false;
            },
            error: function (e) {
                console.log("ERROR : ", e);
                alert("ERROR : ", e);
                $(".upload-form-div").empty();
                reset_form();
            }
        });
    });
};
