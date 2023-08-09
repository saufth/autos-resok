export const NODE_ENV = process.env.NODE_ENV

export const MYSQL_CONFIG = {
  host: String(process.env.MYSQL_HOST),
  user: String(process.env.MYSQL_USER),
  password: String(process.env.MYSQL_PASS),
  database: String(process.env.MYSQL_DB),
  port: Number(process.env.MYSQL_PORT)
}
