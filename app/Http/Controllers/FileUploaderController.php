<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use App\Data;

class FileUploaderController extends Controller
{
    public function store(Request $request)
    {
        $file = $request->file('data_file');
        $storage_result=Storage::disk('public_uploads')->put('files', $file);
        
        /**
         *
         * Uploaded csv file location
         *
         */
        $file_path=public_path() . '/uploads/'.$storage_result;
        $csvData = file_get_contents($file_path);
        $lines = explode(PHP_EOL, $csvData);
        $csv_data_arr = array();


        /**
         * 
         * get CSV validation columns
         * 
         */
        $csv_validation=Data::$csv;
        


        /**
         *
         * check titles
         *
         */
        $csv_data_arr=array();
        $titles_csv=str_getcsv($lines[0]);
        if (count($titles_csv)==count($csv_validation)) {

            /**
             *
             * csv file to array
             *
             */
            array_shift($lines);
            foreach ($lines as $row_num=>$line) {
                $line_arr=str_getcsv($line);
                $csv_data_arr[]=$line_arr;
                if (count($line_arr)==count($csv_validation)) {

                    /**
                     *
                     *  data
                     *
                     */
                    $UID=intval($line_arr[array_search('UID', $csv_validation)]);
                    $Name=$line_arr[array_search('Name',$csv_validation)];
                    $Age=intval($line_arr[array_search('Age', $csv_validation)]);
                    $Email=$line_arr[array_search('Email', $csv_validation)];
                    $Phone=intval($line_arr[array_search('Phone', $csv_validation)]);
                    $Gender=$line_arr[array_search('Gender', $csv_validation)];

                    /**
                     *
                     * check if position exist
                     *
                     */
                    $check_position_data=Data::where('UID', '=', $UID)->get();
                    
                    if (empty($check_position_data[0])) {
                        
                        /**
                         *
                         * insert new data if UID NOT exist
                         *
                         */
                        $data=new Data;
                        $data->UID=$UID;
                        $data->Name=$Name;
                        $data->Age=$Age;
                        $data->Email=$Email;
                        $data->Phone= $Phone;
                        $data->Gender=$Gender;
                        $data->save();
                    } else {

                        /**
                         *
                         * update if UID exist
                         *
                         */
                        Data::where('UID', $UID)->update(
                            [
                                'UID'=>$UID,
                                'Name'=>$Name,
                                'Age'=>$Age,
                                'Email'=>$Email,
                                'Phone'=>$Phone,
                                'Gender'=>$Gender
                            ]
                        );
                    }
                }
            }
        } else {
            return array('error'=>1);
        }
        return array('finish');
    }
}
