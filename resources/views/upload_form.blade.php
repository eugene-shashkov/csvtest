<form id="upload_form" method="POST" action="/store_data" enctype='multipart/form-data' >
    @csrf
    <label>Upload File:</label>
    <div class="form-group">
        <input name="data_file" type="file" accept=".csv" class="" >
        <div class="mt-2"></div>
        <input id="upload_file" type="submit" class="btn btn-outline-dark" value="Upload File" >
    </div>
</form>