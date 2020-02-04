<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sections', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('photography_id');
            $table->enum('type', ['static', 'slider', 'columns']);
            $table->longText('description');
            $table->boolean('galleries');
            $table->timestamps();
        });

        Schema::table('sections', function (Blueprint $table) {
            $table->foreign('photography_id')
                ->references('id')
                ->on('photographies')
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
        Schema::dropIfExists('sections');
    }
}
