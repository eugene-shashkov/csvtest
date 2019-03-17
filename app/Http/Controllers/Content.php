<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Content extends Controller
{
    public function load_upload_form(){
        return response()->view('upload_form');
    }
}
