const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await User.create({ 
      name: 'Pedro', 
      email: 'donsonight@gmail.com'
    });

    const hash = await bcrypt.hash('123456', 8);

    expect(user.password).toBe(hash);
  });
})

