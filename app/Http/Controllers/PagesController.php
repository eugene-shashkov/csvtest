<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller {
    public function uploader(){
        return response()->view('file_uploader');
    }
    public function data(){
        return response()->view('data');
    }
}