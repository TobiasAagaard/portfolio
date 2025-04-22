// Api/routes/routes.go
package routes

import (
	"portfolio/Api/handlers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(server *gin.Engine, projectHandlers handlers.ProjectHandlers) {
	server.GET("/projects", projectHandlers.GetProjects)
	server.POST("/projects", projectHandlers.CreateProject)
}
