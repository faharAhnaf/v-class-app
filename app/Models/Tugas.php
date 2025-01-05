<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    protected $fillable = ['nama_tugas', 'matkul_id', 'siswa_id'];

    public function siswa()
    {
        return $this->belongsTo(User::class, 'siwa_id');
    }

    public function dosen()
    {
        return $this->belongsTo(KodeMatkul::class, 'matkul_id');
    }
}
