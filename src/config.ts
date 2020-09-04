import { ConnectionOptions, Connection, createConnection, getConnection } from 'typeorm'
import 'reflect-metadata'

export const config = {
  name: 'default',
  type: 'mysql',
  host: '127.0.0.1',
  // host: '/cloudsql/typerom-d5cd8:us-central1:hippos-and-hats',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'development',
  synchronize: true,
  logging: false,
  // where entities will be found
  entities: [
    'lib/entities/**/*.js'
  ],
  extra: {

  }
} as ConnectionOptions
// The connect function looks for an existing database connection
// If available we use it for a slight performance gain, otherwise a new connection is create

export const connection = async () => {
  let connection: Connection
  try {
    connection = getConnection(config.name)
    console.log(connection)
  } catch (err) {
    connection = await createConnection(config)
  }
  return connection
}