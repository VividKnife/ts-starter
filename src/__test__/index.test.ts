import { handler } from '../index';

describe('SimpleTest', () => {

    it('runs', async (done) => {
        await expect(handler({ name: 'Bob' }, undefined)).resolves.toEqual({id: 'UUID', name: 'Bob'});
        await expect(handler({ name: '123' }, undefined)).resolves.toEqual({id: 'NUMBER', name: '123'});
        done();
    });
});
