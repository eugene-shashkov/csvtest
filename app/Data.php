<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{

    public static $csv=array(
        'UID',
        'Name',
        'Age',
        'Email',
        'Phone',
        'Gender'
    );

    public static function csv_data_to_file($input_array, $output_file_name, $delimiter)
    {
        $temp_memory = fopen('php://memory', 'w');
        // loop through the array
        foreach ($input_array as $line) {
            // use the default csv handler
            fputcsv($temp_memory, $line, $delimiter);
        }

        fseek($temp_memory, 0);
        // modify the header to be CSV format
        header('Content-Type: application/csv');
        header('Content-Disposition: attachement; filename="' . $output_file_name . '";');
        // output the file to be downloaded
        fpassthru($temp_memory);
        chmod($output_file_name,0777);
    }

    public static function create_csv($path){
    }



    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'data';
}
