import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('note.db')

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT, booked INT)',
          [],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }

  static getNotes() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM notes',
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        )
      })
    })
  }

  static createNote({text, date, booked, img}) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO notes (title, text, date, booked, img)
           VALUES (?, ?, ?, ?, ?)`,
          [text, text, date, 0, img],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        )
      })
    })
  }

  static updateNote(note) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `UPDATE notes
           SET booked = ?
           WHERE id = ?`,
          [note.booked ? 0 : 1, note.id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }

  static editNote(note) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `UPDATE notes
           SET title = ?, text = ?, img = ?, booked = ?, date = ?
           WHERE id = ?`,
          [note.title, note.text, note.img, note.booked, note.date, note.id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }

  static removeNote (id) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `DELETE
           FROM notes
           WHERE id = ?`,
          [id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }
}
