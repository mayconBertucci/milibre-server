import dontenv from 'dotenv';

dontenv.config();

const localConfig = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: ["src/entities/**{.ts,.js}"],
    migrations: ["src/database/migrations/**{.ts,.js}"],
    cli: {
        migrationsDir: 'src/database/migrations'
    },
    ssl: {
        rejectUnauthorized: false
    },
    migrationsRun: false
}

const productionConfig = {
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
    migrationsRun: false
}

const config = process.env.NODE_ENV === 'development' ? localConfig : productionConfig;

export default [config];

