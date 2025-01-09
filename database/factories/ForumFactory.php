<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Forum>
 */
class ForumFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $siswaId = User::where('role', 'siswa')->inRandomOrder()->first()->id;

        return [
            'siswa_id' => $siswaId, // ID siswa acak
            'pesan' => $this->faker->sentence, // Pesan acak
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
