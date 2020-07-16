describe("getUsers", function() {

  it("gets users from GitHub", async function() {
    let users = await getUsers(['waghasmita', 'abhisekmazumdar', 'no.such.users']);
    assert.equal(users[0].login, 'waghasmita');
    assert.equal(users[1].login, 'abhisekmazumdar');
    assert.equal(users[2], null);
  });

});