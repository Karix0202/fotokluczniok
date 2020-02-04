<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhotographiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photographies', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('thumbnail_path');
            $table->string('thumbnail_full_path');
            $table->longText('description');
            $table->uuid('photography_group_id');
            $table->timestamps();
        });

        Schema::table('photographies', function (Blueprint $table) {
            $table->foreign('photography_group_id')
                ->references('id')
                ->on('photography_groups')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('photographies');
    }
}
