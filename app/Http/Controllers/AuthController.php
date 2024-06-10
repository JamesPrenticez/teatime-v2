<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
  public function register(Request $request)
  {
    $data = $request->validate([
      'name' => 'required|string',
      'email' => 'required|email|string|unique:users,email',
      'password'=> [
        'required',
        'confirmed',
        Password::min(8)->mixedCase()->numbers()->symbols()
      ],
    ]);

    $user = User::create([
      'name'=> $data['name'],
      'email'=> $data['email'],
      'password'=> bcrypt($data['password']),
    ]);
    $token = $user->createToken('main')->plainTextToken;

    return response()->json([
      'user' => $user,
      'token' => $token
    ]);
  }

  public function login(Request $request)
  {
    $credentials = $request->validate([
      'email' => 'required|email|string', // no spaces allowed
      'password' => [
        'required',
      ],
      'remember' => 'boolean'
    ]);

    $remember = $credentials['remember'] ?? false;
    unset($credentials['remember']);

    if (!Auth::attempt(['email' => $credentials['email'], 'password' => $credentials['password']], $remember)) {
      return response()->json([
          'error' => 'Invalid email or password'
      ], 422);
    }

    $user = Auth::user();
    $token = $user->createToken('main')->plainTextToken;

    return response()->json([
      'user' => $user,
      'token'=> $token
    ]);
  }


  public function logout()
  {
    $user = Auth::user();
    
    // Revoke the token that was used to authenticate the current request
    $user->currentAccessToken()->delete();

    return response([
      'success' => true
    ]);
  }
}
