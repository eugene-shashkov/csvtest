<?php

Route::get('/','Pages@uploader');
Route::get('/load_upload_form','Content@load_upload_form');

Route::post('/store_data','FileUploader@store');
