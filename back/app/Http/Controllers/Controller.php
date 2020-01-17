<?php

namespace App\Http\Controllers;

use App\Color;
use App\Project;
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
            'name' => $user->name,
            'token' => session()->getId()
        ];
    }

    public function getProjects() {
        return Project::all();
    }

    public function getProjectsByUSerId() {

        /** @var User $user */
        $user = Auth::user();

        if(!$user) {
            throw new HttpException(403, 'Login first');
        }
        return $user->projects;
    }
}
