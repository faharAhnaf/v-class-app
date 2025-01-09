<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Matkul;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Forum;
use App\Models\Tugas;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Matkul>
 */
class MatkulFactory extends Factory
{
    protected $model = Matkul::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Ambil satu dosen secara acak
        $dosenId = User::where('role', 'dosen')->inRandomOrder()->first()->id;

        // Ambil satu forum dan tugas secara acak
        $forumId = Forum::inRandomOrder()->first()->id;
        $tugasId = Tugas::inRandomOrder()->first()->id;

        return [
            'dosen_id' => $dosenId,
            'forum_id' => $forumId,
            'tugas_id' => $tugasId,
            'nama_matkul' => 'Matkul ' . $this->faker->word, // Nama matkul acak
            'kelas' => 'Kelas ' . rand(1, 10), // Kelas acak antara 1 sampai 10
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
