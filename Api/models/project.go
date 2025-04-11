package models

import "time"

type Project struct {
	ID          int       `json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	CreatedAt   time.Time `json:"createdAt"`
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
