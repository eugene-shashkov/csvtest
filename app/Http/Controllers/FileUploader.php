<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class FileUploader extends Controller
{
    public function store(Request $request){
        $file = $request->file('data_file');
        // ok Storage::put('files', $file );
        // $file_real_name=$request->file('data_file')->getClientOriginalName();
        //$file_path = $request->file('data_file')->store('files');
        // $path=time();
        $storage_result=Storage::disk('public_uploads')->put('files', $file);
        
        //Storage::disk('local')->put('files', $file_path, 'public');

        echo $storage_result;
        // return collect(Storage::files('files'))->map(function($file) {
        //     return Storage::url($file);
        // });
    }
}
