<form id="upload_form" method="POST" action="/store_data" enctype='multipart/form-data' >
    @csrf
    <h2>Upload File:</h2>
    <div class="form-group">
        <input id="csv_file" name="data_file" type="file" accept=".csv" class="" >
        <div class="mt-2"></div>
        <input id="upload_file" type="submit" class="btn btn-lg btn-outline-success" value="Import" >
    </div>
</form>