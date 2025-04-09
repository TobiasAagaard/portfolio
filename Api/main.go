package main

import (
	"net/http"
	"portfolio/Api/models"
	"time"

	"github.com/gin-gonic/gin"
)

func main() {
	server := gin.Default()

	server.GET("/projects", getProjects)
	server.POST("/projects", createProject)

	server.Run(":8080") //localhost
}

func getProjects(context *gin.Context) {
	projects := models.GetAllProjects()
	context.JSON(http.StatusOK, projects)
}

func createProject(context *gin.Context) {
	var project models.Project
	err := context.ShouldBindJSON(&project)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{
			"message": "Could not parse request",
			"error":   err.Error(),
		})
		return
	}

	project.ID = 1
	project.UserID = 1
	project.CreatedAt = time.Now()

	project.Save()

	context.JSON(http.StatusCreated, gin.H{"message": "Project is created", "project": project})
}
