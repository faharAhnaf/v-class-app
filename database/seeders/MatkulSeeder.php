<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Matkul;
use App\Models\User;
use App\Models\Forum;
use App\Models\Tugas;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class MatkulSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ambil semua id dosen dari tabel users
        $dosenIds = DB::table('users')->where('role', 'dosen')->pluck('id');

        // Jika belum ada dosen, tambahkan dosen dummy dengan memeriksa email
        if ($dosenIds->isEmpty()) {
            $dosenEmail = 'taufik@gmail.com';

            // Cek apakah email sudah ada
            if (User::where('email', $dosenEmail)->doesntExist()) {
                $dosen = User::create([
                    'role' => 'guru', // Perbaiki role menjadi 'guru'
                    'nama_user' => 'Taufik Hidayat',
                    'username' => 'taufik',
                    'email' => $dosenEmail,
                    'password' => Hash::make('password'),
                ]);
                $dosenIds = [$dosen->id];
            } else {
                $dosenIds = User::where('email', $dosenEmail)->pluck('id');
            }
        }

        // Ambil id forum dari tabel forums
        $forumIds = DB::table('forums')->pluck('id');

        // Ambil id tugas dari tabel tugas
        $tugasIds = DB::table('tugas')->pluck('id');

        // Membuat data dummy untuk table matkuls
        foreach ($dosenIds as $dosenId) {
            foreach ($forumIds as $forumId) {
                foreach ($tugasIds as $tugasId) {
                    DB::table('matkuls')->insert([
                        'dosen_id' => $dosenId,
                        'forum_id' => $forumId,
                        'tugas_id' => $tugasId,
                        'nama_matkul' => 'Matkul ' . Str::random(5),
                        'kelas' => 'Kelas ' . rand(1, 10),
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            }
        }
    }
}
