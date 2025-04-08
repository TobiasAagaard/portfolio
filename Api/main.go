package main

import (
	"net/http"
	"portfolio/Api/models"

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
		context.JSON(http.StatusBadRequest, gin.H{"messeage": "Could not parse request"})
		return
	}

	project.ID = 1
	project.UserID = 1

	context.JSON(http.StatusCreated, gin.H{"messeage": "Project is created", "project": project})
}
