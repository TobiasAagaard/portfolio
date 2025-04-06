package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	server := gin.Default()

	server.GET("/projects", getProjects)

	server.Run(":8080") //Localhost:8080
}

func getProjects(context *gin.Context) {
	context.JSON(http.StatusOK, gin.H{"message": "Hello this is a project function"})
}
