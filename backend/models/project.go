package models

import "gorm.io/gorm"

type Projects struct {
	gorm.Model
	Title       string `gorm:"size:200;not null"`
	Description string `gorm:"type:text"`
	Details     string `gorm:"type:text"`
	TechStack   string `gorm:"size:300"`
	RepoURL     string `gorm:"size:300"`
	LiveURL     string `gorm:"size:300"`
}
