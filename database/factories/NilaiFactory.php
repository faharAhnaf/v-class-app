<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Matkul;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Nilai>
 */
class NilaiFactory extends Factory
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
            'matkul_id' => Matkul::inRandomOrder()->first()->id, // Ambil matkul_id secara acak
            'nilai' => $this->faker->numberBetween(60, 100), // Nilai acak antara 60-100
            'status' => $this->faker->randomElement(['Hadir', 'Tidak Hadir']), // Status acak
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
