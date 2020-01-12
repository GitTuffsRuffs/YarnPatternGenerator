<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use someNamespaceA\NamespacedClass;

/**
 * Class User
 * @package App
 * @property int id
 * @property string name
 * @property string email
 * @property string password
 * @property Grid[] grids
 * @property Project[] projects
 */
class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * @return HasMany
     */
    public function grids(): HasMany {
        return $this->hasMany(Grid::class);
    }

    /**
     * @return HasMany
     */
    public function projects(): HasMany {
        return $this->hasMany(Project::class);
    }

    /**
     * @param string $password
     * @return bool
     */
    public function login($password): bool
    {
        return password_verify($password, $this->password);
    }
}
