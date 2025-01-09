<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nilai extends Model
{
    use HasFactory;

    // Menentukan relasi dengan model User (Siswa)
    public function siswa()
    {
        return $this->belongsTo(User::class, 'siswa_id');
    }

    // Menentukan relasi dengan model Matkul
    public function matkul()
    {
        return $this->belongsTo(Matkul::class, 'matkul_id');
    }
}
