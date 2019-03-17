<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Data;
use mhndev\csv\Csv;
use Illuminate\Support\Facades\Storage;

class DataController extends Controller
{
    public function get_data()
    {
        return Data::select(Data::$csv)->get();
    }

    public function get_titles()
    {
        return Data::$csv;
    }

    public function get_csv()
    {
        $first_row=Data::$csv;
        $data=Data::select($first_row)->get()->toArray();

        if(!empty($data)){
            array_unshift($data,$first_row);
            $csv_obj = new Csv();
            $file_name="data_".mt_rand(1,9999999).time().".csv";
            $file_path =Storage::disk('public_uploads')->getAdapter()->getPathPrefix()."files/".$file_name;
            $csv_obj->arrayToCsv($data, $file_path);
            return array('download'=>$file_name);
        }
        return array();
        
    }

    public function clear_all_records(){
        Data::truncate();
        return array('msg'=>'All data has been deleted');
    }
}
