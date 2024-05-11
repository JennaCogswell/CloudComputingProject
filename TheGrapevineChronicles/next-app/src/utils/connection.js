const mariadb = require('mariadb');
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

// Function to establish MySQL connection
export async function establishMySQLConnection() {

  const secret_name = "rds!db-2dac07b8-2999-47af-ae76-11084444cb1c";

  const client = new SecretsManagerClient({
    region: "us-east-1",
  });

  let response;

  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
      })
    );
  } catch (error) {
    // For a list of exceptions thrown, see
    // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
    throw error;
  }

  const secret = JSON.parse(response.SecretString);

  try {
    const pool = mariadb.createPool({
      host: process.env.RDS_HOSTNAME,
      user: secret.username,
      password: secret.password,
      database: process.env.RDS_DB_NAME,
      connectionLimit: 5
    });
    return await pool.getConnection();
  } catch (error) {
    console.error('Error establishing MySQL connection:', error);
    throw error;
  }
}