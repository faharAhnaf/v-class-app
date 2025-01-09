<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matkul extends Model
{
    use HasFactory;

    protected $fillable = ['nama_matkul', 'dosen_id'];

    public function tugas()
    {
        return $this->hasMany(Tugas::class, 'matkul_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
