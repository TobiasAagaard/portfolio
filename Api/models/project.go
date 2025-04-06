package models

import "time"

type Project struct {
	ID          int
	Title       string
	Description string
	TechStack   []string
	GithubLink  string
	CreatedAt   time.Time
	UpdatedAt   time.Time
	ImageURLs   []string
	IsFeatured  bool
	Slug        string
	UserId      int
}

var projects = []Project{}

func (e Project) Save() {
	//Later: add to Database
	projects = append(projects, e)
}
