<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class FileUploader extends Controller
{
    public function store(Request $request){
        //dd($request->file('data'));
        Storage::disk('local')->put('file.txt', 'Contents');


    }
}
