<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kode_matkul', function (Blueprint $table) {
            $table->id('id');
            $table->unsignedBigInteger('dosen_id');
            $table->string('kode_matkul');
            $table->string('nama_matkul');
            $table->string('kelas');
            $table->timestamps();

            $table->foreign('dosen_id')->references('id')->on('users')->onDelete('cascade');;
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kode_matkul');
    }
};
