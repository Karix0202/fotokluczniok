<?php

use Illuminate\Http\Request;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'group'
], function ($router) {
    Route::get('', 'PhotographyGroupController@getAll');
    Route::post('create', 'PhotographyGroupController@store');
    Route::delete('delete/{group}', 'PhotographyGroupController@delete');
    Route::get('get/{group}', 'PhotographyGroupController@get');
    Route::put('update/{group}', 'PhotographyGroupController@update');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'gallery'
], function ($router) {
    Route::get('public/{gallery}', 'GalleryController@getPublic');
    Route::get('all', 'GalleryController@getAll');
    Route::post('create', 'GalleryController@store');
    Route::get('get/{gallery}', 'GalleryController@get');
    Route::delete('delete/{gallery}', 'GalleryController@delete');
    Route::put('deassign/{gallery}', 'GalleryController@deassign');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'image'
], function ($router) {
    Route::post('create/{gallery}', 'ImageController@store');
    Route::post('delete', 'ImageController@deleteSeries');
    Route::get('public/{gallery}', 'ImageController@getPublic');
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
    Route::get('', 'PhotographyController@index');
    Route::delete('delete/{photography}', 'PhotographyController@delete');
    Route::get('get/{photography}', 'PhotographyController@get');
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

Route::get('/', 'IndexController@index');
