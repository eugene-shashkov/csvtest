<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Pages extends Controller {
    public function uploader(){
        return response()->view('file_uploader');
    }
}