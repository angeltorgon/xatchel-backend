const sessionConfig = {
  name: 'Xatchel',
  keys: [process.env.SESSION_SECRET],
  maxAge: 24 * 60 * 60 * 1000
};

export default sessionConfig;