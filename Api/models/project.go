package models

type Project struct {
	ID          int
	Title       string
	Description string
	TechStack   []string
	Image       string
	Slug        string
}
