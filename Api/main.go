// Api/main.go
package main

import (
	"portfolio/Api/db"
	"portfolio/Api/handlers"
	"portfolio/Api/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	db.InitDB()
	server := gin.Default()

	projectHandlers := handlers.NewProjectHandlers()
	routes.SetupRoutes(server, projectHandlers)

	server.Run(":8080")
}
