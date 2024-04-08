<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Restaurante;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required|unique:restaurantes",
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status" => 402,
                "errorMessages" => $validator->getMessageBag(),
            ]);
        } else {
            $restaurante = new Restaurante();

            $restaurante->name = $request->input("name");

            $restaurante->save();

            return response()->json([
                "status" => 200,
                "message" => "Restaurante adicionado com sucesso!",
            ]);
        }
    }

    public function edit($id)
    {
        $restaurante = Restaurante::find($id);
        return response()->json([
            "status" => 200,
            "restaurante" => $restaurante,
        ]);
    }

    public function store($id, Request $request)
    {
        $restaurante = Restaurante::find($id);

        $restaurante->name = $request->input("name");

        $restaurante->save();

        return response()->json([
            "status" => 200,
            "message" => "Restaurante atualizado com sucesso!",
        ]);
    }

    public function destroy($id)
    {
    }
}
