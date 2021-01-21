/* module.exports = ({
  env
}) => (
  {
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
} */
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'ecf_2020'),
        username: env('DATABASE_USERNAME', 'postgres'), // A MODIFER SI BESOIN
        password: env('DATABASE_PASSWORD', 'root'), // A MODIFER SI BESOIN
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        /* ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        }, */
      },
      options: {
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
