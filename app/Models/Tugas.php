<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;
    protected $fillable = ['nama_tugas', 'matkul_id', 'siswa_id'];

    public function siswa()
    {
        return $this->belongsTo(User::class, 'siswa_id');
    }

    public function dosen()
    {
        return $this->belongsTo(Matkul::class, 'matkul_id');
    }
}
