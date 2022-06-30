const { Pool } = require('pg');

const PG_URI = 'postgres://nwowqzqi:g4z0uqI3-acMPu7AtIzSMgybKQLvZ9PT@heffalump.db.elephantsql.com/nwowqzqi';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};
