<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Grid
 * @package App
 * @property int id
 * @property int user_id
 * @property User user
 * @property string name
 * @property string colorList
 * @property int version
 * @property float squareSize
 * @property GridPicture[] pictures
 */
class Grid extends Model
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
        return $this->hasMany( GridPicture::class);
    }

    function jsonSerialize() {
        $data = $this->toArray();
        $data["colorList"] = json_decode($data["colorList"], false);
        return $data;
    }
}
