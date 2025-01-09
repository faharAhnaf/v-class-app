<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Forum extends Model
{
    /** @use HasFactory<\Database\Factories\ForumFactory> */
    use HasFactory;

    protected $fillable = ['siswa_id', 'pesan'];

    public function siswa()
    {
        return $this->belongsTo(User::class, 'siswa_id', 'id');
    }
}
