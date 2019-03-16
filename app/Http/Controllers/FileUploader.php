<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class FileUploader extends Controller
{
    public function store(Request $request){
        //dd($request->file('data'));
        $file=$request->file('data');
        Storage::put(public_path().'/files/'.time().'.csv', $file);
        

    }
}
