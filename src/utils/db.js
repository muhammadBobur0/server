import pg from "pg";

const pool = new pg.Pool({
  host: "rain.db.elephantsql.com",
  user: "stqdgtjz",
  database: "stqdgtjz",
  password: "IcWqB6YDlDY3IiTsIwE_nHfj5IXXyt_P",
});

async function fetch(SQL, params = []) {
  const client = await pool.connect();
  try {
    const { rows: row } = await client.query(SQL, params);
    return row;
  } catch (error) {
    console.log("db error: " + error.message);
  } finally {
    client.release();
  }
}

async function fetchAll(SQL, params = []) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, params);
    return rows;
  } catch (error) {
    throw new Error("db error: " + error.message);
  } finally {
    client.release();
  }
}

export { fetch, fetchAll };
