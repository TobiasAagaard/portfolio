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

	server.Run(":8080") //Localhost:8080
}

func getProjects(context *gin.Context) {
	projects := models.GetAllProjects()
	context.JSON(http.StatusOK, projects)
}

func createProject(contex *gin.Context) {
	var project models.Project
	err := contex.ShouldBindJSON(&project)

	if err != nil {
		contex.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse request data"})
		return
	}
	project.ID = 1
	project.UserId = 1
	contex.JSON(http.StatusCreated, gin.H{"message": "Project created", "project": project})
}
