package routes

import (
	"github.com/gin-gonic/gin"
)

type ProjectHandlers struct {
	GetProjects   gin.HandlerFunc
	CreateProject gin.HandlerFunc
}

func SetupRoutes(server *gin.Engine, handlers ProjectHandlers) {
	server.GET("/projects", getProjects)
	server.POST("/projects", createProject)
}
