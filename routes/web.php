<?php

Route::get('/','PagesController@uploader');
Route::get('/data','PagesController@data');
Route::get('/load_upload_form','ContentController@load_upload_form');

Route::get('/get_data','DataController@get_data');
Route::get('/get_titles','DataController@get_titles');
Route::get('/get_csv','DataController@get_csv');

Route::delete('/clear_all_records','DataController@clear_all_records');


Route::post('/store_data','FileUploaderController@store');
