// En este archivo podemos hacer muchas configuraciones de Next.js

module.exports = {
    reactStrictMode: true,
    env: {
        customKey: 'customValue',
    },
    basePath: '/dist',
    compress: true,
    async redirects() {
        return [{
            // Fuente (1. A partir de esta ruta)
            source: '/hola',
            // Destino (2. Se redireccionara a esta ruta)
            destination: '/hello',
            permanent: true
        }]
    }
}