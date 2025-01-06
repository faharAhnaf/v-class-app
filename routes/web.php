<?php

use App\Http\Controllers\AbsenController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\TugasController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//     ]);
// });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/buat-kelas', function () {
        return Inertia::render('BuatKelas');
    })->name('buat-kelas');

    Route::get('/gabung-kelas', function () {
        return Inertia::render('GabungKelas');
    })->name('gabung-kelas');

    Route::get('/forum', [ForumController::class, 'index'])->name('forum.index');
    Route::get('/forum/{pertemuan}', [ForumController::class, 'show'])->name('forum.show');

    Route::get('/tugas', [TugasController::class, 'index'])->name('tugas');
    Route::get('/tugas/{pertemuan}', [TugasController::class, 'show'])->name('tugas.show');

    Route::get('/absen', [AbsenController::class, 'index'])->name('absen');
    Route::get('/absen/{pertemuan}', [AbsenController::class, 'show'])->name('absen.show');

    Route::get('/nilai', function () {
        return Inertia::render('Course/Nilai');
    })->name('nilai');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
