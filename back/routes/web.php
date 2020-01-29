<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/colors', "Controller@colors");

Route::post('/login', "Controller@login");

Route::get('/projectsAll', "Controller@getProjects");

Route::get('/projects', "Controller@getProjectsByUSerId"); //->middleware("auth")

Route::post('/save', "Controller@saveProject");

Route::get('/load', "Controller@loadProject");