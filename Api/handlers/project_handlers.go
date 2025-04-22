package handlers

import (
	"net/http"
	"portfolio/Api/models"
	"time"

	"github.com/gin-gonic/gin"
)

type ProjectHandlers struct{}

func NewProjectHandlers() ProjectHandlers {
	return ProjectHandlers{}
}

func (h ProjectHandlers) GetProjects(c *gin.Context) {
	projects, err := models.GetAllProjects()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Could not fetch, try again"})
		return
	}
	c.JSON(http.StatusOK, projects)
}

func (h ProjectHandlers) CreateProject(c *gin.Context) {
	var project models.Project
	if err := c.ShouldBindJSON(&project); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse request", "error": err.Error()})
		return
	}

	project.ID = 1
	project.User_id = 1
	project.CreatedAt = time.Now()

	if err := project.Save(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Could not save project", "error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Project is created", "project": project})
}
