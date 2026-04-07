# Azure Demo Web App

A simple Node.js web application using Express, designed for deployment on Azure App Service.

## Features

- Built with Node.js 24 LTS and Express
- Serves static HTML/CSS content
- Health check endpoint for monitoring
- Optimized for Azure App Service deployment

## Project Structure

```
azure-demo/
├── public/              # Static files (HTML, CSS)
│   ├── index.html
│   └── styles.css
├── server.js            # Express server
├── package.json         # Node.js dependencies
├── web.config          # Azure App Service configuration
└── .gitignore          # Git ignore rules
```

## Local Development

### Prerequisites

- Node.js 24.x or higher
- npm (comes with Node.js)

### Setup and Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AlexanderMouritsen/azure-demo.git
   cd azure-demo
   ```

2. **Set up the project structure (first time only):**
   ```bash
   node setup.js
   ```
   This creates the `public` directory and moves static files into it.

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Open your browser:**
   - Application: http://localhost:3000
   - Health check: http://localhost:3000/health

The server will run on port 3000 by default, or use the PORT environment variable if set.

## Deployment to Azure App Service

### Prerequisites

- Azure account
- Azure CLI installed and configured

### Deployment Steps

1. **Create an Azure App Service:**
   ```bash
   az webapp create --resource-group <your-resource-group> \
                    --plan <your-app-service-plan> \
                    --name <your-app-name> \
                    --runtime "NODE:24-lts"
   ```

2. **Deploy via Git:**
   ```bash
   az webapp deployment source config-local-git \
     --name <your-app-name> \
     --resource-group <your-resource-group>
   
   git remote add azure <deployment-url>
   git push azure main
   ```

3. **Or deploy via ZIP:**
   ```bash
   # Create a zip file excluding node_modules and .git
   zip -r app.zip . -x "node_modules/*" ".git/*"
   
   # Deploy the zip
   az webapp deployment source config-zip \
     --resource-group <your-resource-group> \
     --name <your-app-name> \
     --src app.zip
   ```

4. **Configure Application Settings (Optional):**
   ```bash
   az webapp config appsettings set \
     --resource-group <your-resource-group> \
     --name <your-app-name> \
     --settings NODE_ENV=production
   ```

### Azure Configuration

The `web.config` file is automatically used by Azure App Service to:
- Configure the Node.js runtime via iisnode
- Set up URL rewriting rules
- Enable proper error handling and logging

### Monitoring

- **Health Check:** Visit `https://<your-app-name>.azurewebsites.net/health`
- **Azure Portal:** Monitor logs, metrics, and performance in the Azure Portal
- **Application Insights:** Enable for advanced monitoring and diagnostics

## Environment Variables

- `PORT`: Server port (default: 3000, automatically set by Azure)
- `NODE_ENV`: Environment mode (development/production)

## Health Check

The application includes a health check endpoint at `/health` that returns:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456
}
```

## License

ISC
