<?php

namespace Database\Factories;

use App\Models\KodeMatkul;
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
            'matkul_id' => KodeMatkul::factory(),
            'siswa_id' => User::factory(),
            'nama_tugas' => $this->faker->word,
        ];
    }
}
