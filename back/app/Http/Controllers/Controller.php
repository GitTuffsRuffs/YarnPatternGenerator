<?php

namespace App\Http\Controllers;

use App\Color;
use App\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\HttpException;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    public function colors() {
        return Color::all();
    }

    public function login(): array
    {
        $query = User::query()->where('name', '=', $_POST['username'] ?? '');
        /** @var User $user */
        $user = $query->first();

        if(!$user) {
            throw new HttpException(403, 'No user found'); //FIX Messege
        }

        if(!$user->login($_POST['password'] ?? '')) {
            throw new HttpException(403, 'Wrong Password'); //FIX messege
        }

        Auth::login($user);

        return [
            'id' => $user->id,
            'status' => 'ok',
        ];
    }

/*
(async () => {
let data = new FormData();
data.append('username', 'tuffs');
data.append('password', 'test');
let rp = fetch(
  "http://localhost:8000/login",
  {
     method: "POST",
     body: data,
  }
);
let r = await rp;
let jp = r.json();
let j = await jp;
console.log(j);
})();
 * */

// TODO: Fetch API
}
