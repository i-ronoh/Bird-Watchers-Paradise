# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_07_140334) do

  create_table "birds", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "primary_color"
    t.string "beak"
    t.string "feet_type"
    t.boolean "flies"
  end

  create_table "sightings", force: :cascade do |t|
    t.datetime "date_of_sighting"
    t.string "location_of_sighting"
    t.string "observation"
    t.integer "birds_id"
    t.index ["birds_id"], name: "index_sightings_on_birds_id"
  end

  add_foreign_key "sightings", "birds", column: "birds_id"
end
