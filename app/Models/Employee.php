<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    public $table = 'employess_data';

    // allow to save data into database 
    protected $fillable = [
        'name',
        'department',
        'section',
        'email',
        'status'
    ];
}
