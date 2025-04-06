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

}
