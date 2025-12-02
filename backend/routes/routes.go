package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {

	api := r.Group("/api")
	{

		api.GET("/projects", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{"message": "List of projects"})
		})
	}
}
