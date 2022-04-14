const { expect } = require('chai');
const { syncAndSeed, models: { User } } = require('../db');
describe('App', ()=> {
  beforeEach(()=> syncAndSeed());
  describe('models', ()=> {
    it('there are 3 users', async()=> {
      const users = await User.findAll();
      expect(users.length).to.equal(3);
    });
    it('moe is a user', async()=> {
      const moe = await User.findOne({ where: { username: 'moe'}});
      expect(moe).to.be.ok;
    });
  });
});
