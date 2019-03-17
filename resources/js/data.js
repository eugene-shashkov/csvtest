var table_selector = ".data-table";
$(document).ready(function () {
    console.log('data');


    reload_data();

    $(".download").click(function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $.get('/get_csv', function (file_to_download) {
            console.log(file_to_download);
            if (typeof file_to_download.download !== 'undefined') {
                window.location.href = '/uploads/files/' + file_to_download.download;
            } else {
                alert('no data');
            }
        });
    });

    $(".clear-data").click(function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $.ajax({
            method: 'delete',
            url: '/clear_all_records',
            success: function (respond) {
                $(table_selector + " tbody").empty();
                console.log(respond);
            },
            error: function (error) {
                console.log(error);
                alert('internal server error');
            }
        });
    });;

    //window.location.href = '/uploads/files/test.csv';
});


var init_data_table = function () {
    $(table_selector).DataTable({
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": true,
        "bInfo": true,
        "bAutoWidth": false,
        "searching": false,
        'colReorder': true
    });
}

var reload_data = function () {
    $.get('/get_titles', function (titles) {
        console.log(titles);
        var title_row = '<tr>';
        $.each(titles, function (index, column_name) {
            title_row += '<th>' + column_name + '</th>';
        });
        title_row += '</tr>';

        $(table_selector + " thead").empty();
        $(table_selector + " tfoot").empty();
        $(table_selector + " tbody").empty();

        $(table_selector + " thead").append(title_row);
        $(table_selector + " tfoot").append(title_row);

        $.get('/get_data', function (data) {
            console.log(data);
            $.each(data, function (index, data_row) {
                var data_row_html = '<tr>';
                $.each(data_row, function (index, value) {
                    data_row_html += '<td>' + value + '</td>';
                });
                data_row_html += '</tr>';
                $(table_selector + " tbody").append(data_row_html);

            });
            init_data_table();
        });
    });
}
