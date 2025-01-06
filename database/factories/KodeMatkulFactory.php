<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\KodeMatkul;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KodeMatkul>
 */
class KodeMatkulFactory extends Factory
{
    protected $model = KodeMatkul::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'dosen_id' => User::factory(),
            'kode_matkul' => $this->faker->unique()->randomNumber(5),
            'nama_matkul' => $this->faker->word,
            'kelas' => $this->faker->randomElement(['A', 'B', 'C']),
        ];
    }
}
