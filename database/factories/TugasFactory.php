<?php

namespace Database\Factories;

use App\Models\Matkul;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tugas>
 */
class TugasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'siswa_id' => User::where('role', 'siswa')->inRandomOrder()->first()->id, // Ambil siswa_id secara acak
            'nama_tugas' => 'Tugas ' . $this->faker->lexify('?????'), // Nama tugas acak
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
