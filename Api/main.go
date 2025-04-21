package main

import (
	"net/http"
	"portfolio/Api/db"
	"portfolio/Api/models"
	"portfolio/Api/routes"
	"time"

	"github.com/gin-gonic/gin"
)

func main() {
	db.InitDB()
	server := gin.Default()

	projectHandlers := routes.ProjectHandlers{
		GetProjects:   getProjects,
		CreateProject: createProject,
	}

	routes.SetupRoutes(server, projectHandlers)

	server.Run(":8080") //localhost
}

func getProjects(context *gin.Context) {
	projects, err := models.GetAllProjects()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"message": "Internal server error",
			"error":   err.Error(),
		})
		return
	}
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
	project.User_id = 1
	project.CreatedAt = time.Now()

	project.Save()

	context.JSON(http.StatusCreated, gin.H{"message": "Project is created", "project": project})
}
