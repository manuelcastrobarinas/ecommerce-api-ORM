export const CONFIG = {
    db: {
        DB_USERNAME: process.env.DB_USERNAME || 'postgres',
        DB_PASSWORD: process.env.DB_PASSWORD || '1234',
        DB_NAME: process.env.DB_NAME || 'postgres',
        DB_HOST: process.env.DB_HOST || 'localhost',
        DB_PORT: process.env.DB_PORT || 5432,
    }

}