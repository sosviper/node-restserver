// ==================
// Puerto
// ==================
process.env.PORT = process.env.PORT || 3000;

// ==================
// Entorno
// ==================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==================
// Base de datos
// ==================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://127.0.0.1:27017/cafe';
} else {
    urlDB = 'mongodb+srv://sosviper:NGJhcr1eyQ52tNXv@cluster0-2bsxx.mongodb.net/cafe';
}

process.env.URLDB = urlDB;