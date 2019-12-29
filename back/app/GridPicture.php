<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class GridPicture
 * @package App
 * @property int id
 * @property int grid_id
 * @property Grid grid
 * @property string filename
 * @property string path
 */
class GridPicture extends Model
{
    /**
     * @return BelongsTo
     */
    function grid(): BelongsTo
    {
        return $this->belongsTo(Grid::class);
    }
}
