
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

$(document).ready(function(){

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

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
                console.log("SUCCESS : ", data);
                $("#upload_file").prop("disabled", false);
            },
            error: function (e) {
                console.log("ERROR : ", e);
                $("#upload_file").prop("disabled", false);
            }
        }); 



    });
    
});