<?php

use Illuminate\Http\Request;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('me', 'AuthController@me');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'group'
], function ($router) {
    Route::post('', 'PhotographyGroupController@getAll');
    Route::post('create', 'PhotographyGroupController@store');
    Route::delete('delete/{group}', 'PhotographyGroupController@delete');
    Route::post('get/{group}', 'PhotographyGroupController@get');
    Route::put('update/{group}', 'PhotographyGroupController@update');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'gallery'
], function ($router) {
    Route::post('', 'GalleryController@getPublic');
    Route::post('all', 'GalleryController@getAll');
    Route::post('create', 'GalleryController@store');
    Route::post('get/{gallery}', 'GalleryController@get');
    Route::delete('delete/{gallery}', 'GalleryController@delete');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'image'
], function ($router) {
    Route::post('create/{gallery}', 'ImageController@store');
    Route::post('delete', 'ImageController@deleteSeries');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'file'
], function ($router) {
    Route::post('create/{gallery}', 'FileController@store');
    Route::post('delete', 'FileController@deleteSeries');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'photography'
], function ($router) {
    Route::post('create', 'PhotographyController@store');
    Route::post('', 'PhotographyController@index');
    Route::delete('delete/{photography}', 'PhotographyController@delete');
});

Route::post('/', 'PublicContentController@index');
