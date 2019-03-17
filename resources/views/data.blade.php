<!DOCTYPE html>
<html lang="en">

<head>
    @include('head')
</head>

<body>
    @include('jumbo')
    <div class="container page-content">
        <a class="btn btn-lg  btn-outline-success download" href="#">Download</a>
        <a class="btn btn-lg btn-outline-danger clear-data" href="#">Clear all records</a>
        <table class="data-table">
            <thead></thead>
            <tbody></tbody>
            <tfoot></tfoot>
        </table>
    </div>
    @include('footer')
    <script type="text/javascript" src="/js/data.js"></script>
</body>
</html>
