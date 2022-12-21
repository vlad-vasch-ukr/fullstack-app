require('dotenv').config();
const mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors');

const DB_HOST = process.env.DB_HOST;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT;
const corsOptions = {
  origin: 'http://localhost:3001',
};

app.use(cors(corsOptions));
app.use(express.json());

const db = mysql.createConnection({
  user: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_DATABASE,
});

db.connect((error) => {
  if (error) throw error;
});

//Get all items from the database
app.get('/lists', function (req, res) {
  db.query('SELECT * from lists', (error, data) => {
    if (error) {
      return res.json({ status: 'ERROR', error });
    }

    return res.json(data);
  });
});

//Add new item to the database
app.post('/lists', function (req, res) {
  const { name, list_items, start_date, end_date, created } = {
    ...req.body,
    list_items: JSON.stringify(req.body.list_items),
    created: new Date().toISOString(),
  };

  db.query(
    `INSERT INTO lists (name, list_items, start_date, end_date, created) VALUES ('${name}', '${list_items}', '${start_date}', '${end_date}', '${created}');`,
    (error) => {
      if (error) {
        return res.status(500).json({ status: 'ERROR', error });
      }
    },
  );

  db.query('SELECT * from lists', (error, result) => {
    if (error) {
      return res.status(500).json({ status: 'ERROR', error });
    }

    return res.json(result);
  });
});

//Get single item by id from the database
app.get('/lists/details/:id', function (req, res) {
  db.query('SELECT * FROM lists WHERE id=?;', req.params.id, (error, result) => {
    if (error) {
      return res.status(500).json({ status: 'ERROR', error });
    }

    return res.json({ status: 'SUCCESS', data: result });
  });
});

// //Update single item by id from the database
// app.put('/lists/update/:id', function (req, res) {});

//Delete single item by id from the database
app.delete('/lists/delete/:id', function (req, res) {
  db.query('DELETE FROM lists WHERE id=?;', req.params.id, (error) => {
    if (error) {
      return res.status(500).json({ status: 'ERROR', error });
    }
  });

  db.query('SELECT * from lists', (error, result) => {
    if (error) {
      return res.status(500).json({ status: 'ERROR', error });
    }

    return res.json(result);
  });
});

app.listen(PORT);
