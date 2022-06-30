const fs = require('fs');
const path = require('path');
const db = require('../server/models/databaseModel')

const testJsonFile = path.resolve(__dirname, './testDatabase.json');

xdescribe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
})

xdescribe('db unit tests', () => {
    // xbeforeAll((done) => {
    //     fs.writeFile(testJsonFile.JSON.stringify([]), () => {
    //         db.reset();
    //         done();
    //     });
    // });

    afterAll((done) => {
        fs.writeFile(testJsonFile, JSON.stringify([]), done);
    });

    describe('#sync', () => {
        it('writes a valid event to JSON file', () => {
            const eventList = [{ title: 'boom', date: 'nowish'},{title: 'bash', date: 'idk'}];
            const result = db.sync(eventList);
            expect(result).not.toBeInstanceOf(Error);
            const table = JSON.parse(fs.readFileSync(testJsonFile));
            expect(table).toEqual(eventList);
        });
    })
})
