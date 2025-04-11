package db

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

var DB *sql.DB

func InitDB() {
	var err error
	DB, err = sql.Open("sqlite3", "api.db")

	if err != nil {
		panic("Could not connect to database.")
	}

	DB.SetMaxOpenConns(10)
	DB.SetMaxIdleConns(5)

	createTables()
}

func createTables() {
	createProjectsTable := `
	CREATE TABLE IF NOT EXISTS projects (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    description TEXT NOT NULL,
    thumbnail TEXT,
    detail TEXT,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME,
    user_id INTEGER
	)`

	_, err := DB.Exec(createProjectsTable)

	if err != nil {
		panic("Could not create project table")
	}
}
