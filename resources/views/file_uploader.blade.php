<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test Project by Eugene Shashkov</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="/js/app.js"></script>
    <link rel="stylesheet" href="/css/app.css">
</head>

<body>
    <div class="jumbotron">
        <h1 class="display-4">Hello test project</h1>
        {{-- <p class="lead">welcome</p> --}}
        <hr class="my-4">
        <p>just another one test project by Eugene Shashkov</p>
        <p class="lead">
            <a class="btn btn-outline-dark  btn-lg" href="https://bitbucket.org/fonjeekay/keytest/src/" role="button">git</a>        
            <a class="btn btn-outline-dark  btn-lg" href="https://bitbucket.org/fonjeekay/keytest/src/a4375b8e30eab9b4a64d575329762beb44e8c134/app/Http/Controllers/ShowData.php?at=master&fileviewer=file-view-default" role="button">Laravel Controller</a>
            <a class="btn btn-outline-dark  btn-lg" href="https://bitbucket.org/fonjeekay/keytest/src/master/resources/views/data.blade.php" role="button">view blade file</a>   
            <a class="btn btn-outline-dark  btn-lg" href="https://bitbucket.org/fonjeekay/keytest/src/a4375b8e30eab9b4a64d575329762beb44e8c134/resources/js/app.js?at=master&fileviewer=file-view-default" role="button">JQuery</a>        
        </p>
    </div>
    
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <form method="POST" action="/store_data" enctype='multipart/form-data' >
                    @csrf
                    <label>Upload File:</label>
                    <div class="form-group">
                        <input name="data" type="file" accept=".csv" class="" >
                        <div class="mt-2"></div>
                        <input type="submit" class="btn btn-outline-dark" value="ImportFile" >
                    </div>
                </form>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
    <footer>A test project by Eugene Shashkov</footer>

</body>

</html>
