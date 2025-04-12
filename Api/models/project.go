package models

import "time"

type Project struct {
	ID          int       `json:"id"`
	Title       string    `json:"title"`
	Slug        string    `json:"slug"` // for clean URLs like /projects/my-awesome-project
	Description string    `json:"description"`
	Thumbnail   string    `json:"thumbnail"`
	Detail      string    `json:"detail"` // more in-depth description or markdown maybe
	CreatedAt   time.Time `json:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt"` // useful if you allow edits
	User_id     int       `json:"user_id"`
}

var projects = []Project{}

func (p Project) Save() {
	//Later add database

	projects = append(projects, p)
}

func GetAllProjects() []Project {
	return projects
}
