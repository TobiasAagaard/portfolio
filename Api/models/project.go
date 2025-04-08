package models

type Project struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	UserID      int    `json:"user_id"`
}

var projects = []Project{}

func (p Project) Save() {
	//Later add database

	projects = append(projects, p)
}

func GetAllProjects() []Project {
	return projects
}
