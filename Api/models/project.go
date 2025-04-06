package models

import "time"

type Project struct {
	ID          int
	Title       string
	Description string
	TechStack   []string
	CreatedAt   time.Time
	UpdatedAt   time.Time
	Image       string
	Slug        string
}
