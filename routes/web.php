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

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/forum', function () {
    return Inertia::render('Course/Forum');
})->middleware(['auth', 'verified'])->name('forum');

Route::get('/forum/{pertemuan}', [ForumController::class, 'show'])->name('forum.show');

Route::get('/tugas', function () {
    return Inertia::render('Course/Tugas');
})->middleware(['auth', 'verified'])->name('tugas');

Route::get('/tugas/{pertemuan}', [TugasController::class, 'show'])->name('tugas.show');

Route::get('/absen', function () {
    return Inertia::render('Course/Absen');
})->middleware(['auth', 'verified'])->name('absen');

Route::get('/absen/{pertemuan}', [AbsenController::class, 'show'])->name('absen.show');


Route::get('/gabung-kelas', function () {
    return Inertia::render('GabungKelas');
})->middleware(['auth', 'verified'])->name('gabung-kelas');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
