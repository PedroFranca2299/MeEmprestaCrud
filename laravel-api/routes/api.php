<?php

use App\Http\Controllers\api\RestauranteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware("auth:sanctum")->get("/user", function (Request $request) {
    return $request->user();
});

Route::get("/restaurantes", [RestauranteController::class, "index"]);
Route::get("/restaurantes/{id}", [RestauranteController::class, "edit"]);
Route::post("/restaurantes/create", [RestauranteController::class, "create"]);
Route::post("/restaurantes/update/{id}", [
    RestauranteController::class,
    "store",
]);
Route::delete("/restaurantes/delete/{id}", [
    RestauranteController::class,
    "destroy",
]);
