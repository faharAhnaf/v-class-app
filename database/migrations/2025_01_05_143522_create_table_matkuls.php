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
        Schema::create('matkuls', function (Blueprint $table) {
            $table->id('id');
            $table->unsignedBigInteger('dosen_id');
            $table->unsignedBigInteger('forum_id');
            $table->unsignedBigInteger('tugas_id');
            $table->string('nama_matkul');
            $table->string('kelas');
            $table->timestamps();

            $table->foreign('dosen_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('forum_id')->references('id')->on(table: 'forums')->onDelete('cascade');
            $table->foreign('tugas_id')->references('id')->on(table: 'tugas')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

        Schema::dropIfExists('matkuls');
    }
};
