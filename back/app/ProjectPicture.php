<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class ProjectPicture
 * @package App
 * @property int id
 * @property Project project
 * @property int project_id
 * @property string filename
 * @property string path
 */
class ProjectPicture extends Model
{
    /**
     * @return BelongsTo
     */
    function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
