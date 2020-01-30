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

Route::get('/api/colors', "Controller@colors");

Route::post('/api/login', "Controller@login");

Route::get('/api/projectsAll', "Controller@getProjects");

Route::get('/api/projects', "Controller@getProjectsByUSerId"); //->middleware("auth")

Route::post('/api/save', "Controller@saveProject");

Route::get('/api/load', "Controller@loadProject");