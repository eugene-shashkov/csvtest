/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

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
        upload_file();
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
                console.log("SUCCESS : ", data);
                $("#upload_file").prop("disabled", false);
                $(".upload-form-div").empty();
                reset_form();
                alert('File Uploaded');
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
