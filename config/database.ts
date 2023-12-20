import Env from "@ioc:Adonis/Core/Env";
import DatabaseConfig from "@ioc:Adonis/Lucid/Database";

const databaseConfig: DatabaseConfig = {
  connection: Env.get("DB_CONNECTION", "mysql"),

  connections: {
    mysql: {
      client: "mysql2",
      connection: {
        host: Env.get("DB_HOST", "127.0.0.1"),
        port: Env.get("DB_PORT", "3306"),
        user: Env.get("DB_USER", "root"),
        password: Env.get("DB_PASSWORD", "root"),
        database: Env.get("DB_DATABASE", "Land"),
      },
      debug: false,
    },
  },
};

export default databaseConfig;
