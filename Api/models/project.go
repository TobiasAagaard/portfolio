package models

import (
	"portfolio/Api/db"
	"time"
)

type Project struct {
	ID          int64
	Name        string    `json:"name"`
	Slug        string    `json:"slug"` // for clean URLs like /projects/my-awesome-project
	Description string    `json:"description"`
	Thumbnail   string    `json:"thumbnail"`
	CreatedAt   time.Time `json:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt"` // useful if you allow edits
	User_id     int       `json:"user_id"`
}

var projects = []Project{}

func (p *Project) Save() error {
	now := time.Now()
	p.CreatedAt = now
	p.UpdatedAt = now

	query := `
		INSERT INTO projects (title, slug, description, thumbnail, createdAt, updatedAt, user_id)
		VALUES (?, ?, ?, ?, ?, ?, ?)
	`

	stmt, err := db.DB.Prepare(query)

	if err != nil {
		return err
	}

	defer stmt.Close()

	result, err := stmt.Exec(p.Name, p.Slug, p.Description, p.Thumbnail, p.CreatedAt, p.UpdatedAt, p.User_id)

	if err != nil {
		return err
	}

	id, err := result.LastInsertId()
	p.ID = id
	return err
}

func GetAllProjects() ([]Project, error) {
	query := "SELECT * FROM projects"
	rows, err := db.DB.Query(query)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var projects []Project

	for rows.Next() {
		var project Project
		err := rows.Scan(&project.ID, &project.Name, &project.Slug, &project.Description, &project.Thumbnail, &project.CreatedAt, &project.UpdatedAt, &project.User_id)

		if err != nil {
			return nil, err
		}

		projects = append(projects, project)
	}
	return projects, nil
}
