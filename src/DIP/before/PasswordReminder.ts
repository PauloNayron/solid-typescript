class PostgreSqlConnection {
}

class PasswordReminder{
    private dbConnection;

    constructor() {
        this.dbConnection = new PostgreSqlConnection();
    }
}