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
    Route::post('public/{gallery}', 'GalleryController@getPublic');
    Route::post('all', 'GalleryController@getAll');
    Route::post('create', 'GalleryController@store');
    Route::post('get/{gallery}', 'GalleryController@get');
    Route::delete('delete/{gallery}', 'GalleryController@delete');
    Route::put('deassign/{gallery}', 'GalleryController@deassign');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'image'
], function ($router) {
    Route::post('create/{gallery}', 'ImageController@store');
    Route::post('delete', 'ImageController@deleteSeries');
    Route::post('public/{gallery}', 'ImageController@getPublic');
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
    Route::post('get/{photography}', 'PhotographyController@get');
    Route::post('assign/{photography}', 'PhotographyController@assignGalleries');
    Route::post('public/{photography}', 'PhotographyController@getPublic');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'section'
], function ($router) {
    Route::post('create/{photography}', 'SectionController@store');
    Route::delete('delete/{section}', 'SectionController@delete');
});

Route::post('/', 'IndexController@index');
