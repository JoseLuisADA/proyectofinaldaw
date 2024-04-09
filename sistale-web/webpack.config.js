// webpack.config.js
module.exports = {
    mode: 'development',
    module: {
      rules: [
          {
              test: /\.jsx?$/, // Regla para archivos .js y .jsx
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env', '@babel/preset-react'] // Habilita transformación de ES6+ y JSX
                  }
              }
          },
          // Añade esta regla para procesar archivos CSS
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'] // Primero aplica css-loader, luego style-loader
          },
      ]
  },
    // Otras configuraciones de webpack...
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        // Si necesitas ejecutar lógica antes de los middlewares existentes:
        devServer.app.use((req, res, next) => {
          // Lógica personalizada antes
          next();
        });
  
        // Si necesitas añadir middlewares después de los existentes:
        middlewares.push({
          name: 'custom-middleware', // Opcional: útil para la depuración
          path: '/', // Opcional: define rutas específicas
          middleware: (req, res, next) => {
            // Lógica personalizada después
            next();
          }
        });
  
        return middlewares; // Muy importante: devuelve la lista modificada de middlewares
      }
    }
  };
  