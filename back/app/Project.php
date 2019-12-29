<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Project
 * @package App
 * @property int id
 * @property int user_id
 * @property User user
 * @property string status
 * @property string name
 * @property string yarn
 * @property string brand
 * @property string material
 * @property string gram
 * @property string length
 * @property string needles
 * @property string notes
 * @property ProjectPicture[] pictures
 */
class Project extends Model
{
    /**
     * @return BelongsTo
     */
    function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return HasMany
     */
    function pictures(): HasMany {
        return $this->hasMany( ProjectPicture::class);
    }
}
