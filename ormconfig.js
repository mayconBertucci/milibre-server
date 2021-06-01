require('dotenv').config();

module.exports = [
    {
        type: `postgres`,
        url: process.env.DATABASE_URL,
        synchronize: false,
        logging: false,
        entities: ["dist/src/entities/**{.ts,.js}"],
        migrations: ["dist/src/database/migrations/**{.ts,.js}"],
        cli: {
            migrationsDir: 'dist/src/database/migrations'
        },
        ssl: {
            rejectUnauthorized: false
        },
        migrationsRun: true
    },
    /* {
        name: 'milibreBD',
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        synchronize: true,
        logging: true,
        entities: ["dist/src/entities/**{.ts,.js}"],
        migrations: ["dist/src/database/migrations/**{.ts,.js}"],
        cli: {
            migrationsDir: 'dist/src/database/migrations'
        },
    }, */
];
