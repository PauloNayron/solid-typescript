class PostgreSqlConnection{

}

class PasswordReminder {
    private dbConnection;

    constructor(dbConnection: PostgreSqlConnection) {
        this.dbConnection = dbConnection
    }

}