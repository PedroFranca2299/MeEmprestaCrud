<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Restaurante;
use Illuminate\Http\Request;

class RestauranteController extends Controller
{
    public function index()
    {
        $restaurantes = Restaurante::all();
        return response()->json([
            "status" => 200,
            "restaurantes" => $restaurantes,
        ]);
    }

    public function create()
    {
    }

    public function edit($id)
    {
    }

    public function store($id, Request $request)
    {
    }

    public function destroy($id)
    {
    }
}
