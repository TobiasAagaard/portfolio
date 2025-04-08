package main

import (
	"log"
	"net/http"
	"portfolio/Api/models"
	"time"

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

func createProject(c *gin.Context) {
	var project models.Project

	if err := c.ShouldBindJSON(&project); err != nil {
		log.Println("JSON binding error:", err.Error()) // <-- log the actual error here
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Could not parse request data",
			"error":   err.Error(), // optional: send error back in response for debugging
		})
		return
	}

	project.ID = len(models.GetAllProjects()) + 1
	project.UserId = 1
	project.CreatedAt = time.Now()
	project.UpdatedAt = time.Now()

	project.Save()

	c.JSON(http.StatusCreated, gin.H{"message": "Project created", "project": project})
}
