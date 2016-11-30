# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161130172711) do

  create_table "LOGS", primary_key: "ID", force: :cascade do |t|
    t.string "DATE", limit: 100, null: false
    t.string "USER", limit: 20,  null: false
    t.string "LOG",  limit: 100, null: false
  end

  create_table "PURITYREPORTS", primary_key: "REPORTNUM", force: :cascade do |t|
    t.string  "DATE",          limit: 100, null: false
    t.string  "REPORTER",      limit: 20,  null: false
    t.string  "LOCATION",      limit: 20,  null: false
    t.string  "COND",          limit: 20,  null: false
    t.integer "VIRUS",         limit: 4,   null: false
    t.integer "CONTAMINATION", limit: 4,   null: false
  end

  create_table "USERS", primary_key: "ID", force: :cascade do |t|
    t.string  "NAME",     limit: 20, null: false
    t.string  "PASSWORD", limit: 20, null: false
    t.string  "TYPE",     limit: 20, null: false
    t.integer "BANNED",   limit: 4,  null: false
    t.integer "LOGINS",   limit: 4,  null: false
  end

  create_table "WATERREPORTS", primary_key: "REPORTNUM", force: :cascade do |t|
    t.string "DATE",     limit: 100, null: false
    t.string "REPORTER", limit: 20,  null: false
    t.string "LOCATION", limit: 20,  null: false
    t.string "TYPE",     limit: 20,  null: false
    t.string "COND",     limit: 20,  null: false
  end

  create_table "purity_reports", primary_key: "report_num", force: :cascade do |t|
    t.string  "date",          limit: 100, null: false
    t.string  "reporter",      limit: 20,  null: false
    t.string  "location",      limit: 20,  null: false
    t.string  "cond",          limit: 20,  null: false
    t.integer "virus",         limit: 4,   null: false
    t.integer "contamination", limit: 4,   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string  "username", limit: 20,                  null: false
    t.string  "name",     limit: 20,                  null: false
    t.string  "password", limit: 20,                  null: false
    t.string  "role",     limit: 20, default: "User", null: false
    t.integer "banned",   limit: 4,  default: 0,      null: false
    t.integer "logins",   limit: 4,  default: 0,      null: false
  end

  create_table "water_reports", primary_key: "report_num", force: :cascade do |t|
    t.string "date",       limit: 100, null: false
    t.string "reporter",   limit: 20,  null: false
    t.string "location",   limit: 20,  null: false
    t.string "water_type", limit: 20,  null: false
    t.string "cond",       limit: 20,  null: false
  end

end
