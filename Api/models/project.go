package models

import "time"

type Project struct {
	ID          int       `json:"id"`
	Title       string    `json:"title" binding:"required"`
	Description string    `json:"description" binding:"required"`
	TechStack   []string  `json:"techStack"`
	GithubLink  string    `json:"githubLink"`
	CreatedAt   time.Time `json:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt"`
	ImageURLs   []string  `json:"imageUrls"`
	IsFeatured  bool      `json:"isFeatured"`
	Slug        string    `json:"slug"`
	UserId      int       `json:"userId"`
}

var projects = []Project{}

func (e Project) Save() {
	//Later: add to Database
	projects = append(projects, e)
}

func GetAllProjects() []Project {
	return projects
}
