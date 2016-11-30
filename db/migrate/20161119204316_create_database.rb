class CreateDatabase < ActiveRecord::Migration
	def change
		create_table "purity_reports", primary_key: "report_num", force: :cascade do |t|
			t.string  "date",          limit: 100, null: false
			t.string  "reporter",      limit: 20,  null: false
			t.string  "location",      limit: 20,  null: false
			t.string  "cond",          limit: 20,  null: false
			t.integer "virus",         limit: 4,   null: false
			t.integer "contamination", limit: 4,   null: false
		end

		create_table "users", primary_key: "id", force: :cascade do |t|
			t.string  "username", limit: 20, null: false, unique: true
			t.string  "name",     limit: 20, null: false
			t.string  "password", limit: 20, null: false
			t.string  "type",     limit: 20, null: false, default: "User"
			t.integer "banned",   limit: 4,  null: false, default: false
			t.integer "logins",   limit: 4,  null: false, default: 0
		end

		create_table "water_reports", primary_key: "report_num", force: :cascade do |t|
			t.string "date",     limit: 100, null: false
			t.string "reporter", limit: 20,  null: false
			t.string "location", limit: 20,  null: false
			t.string "type",     limit: 20,  null: false
			t.string "cond",     limit: 20,  null: false
		end
	end
end
