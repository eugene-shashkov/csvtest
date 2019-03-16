<?php

Route::get('/','Pages@uploader');
Route::post('/store_data','FileUploader@store');