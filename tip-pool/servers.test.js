describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';

  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server with empty input to allServers on submitServerInfo()', function() {
    serverNameInput.value = '';
    submitServerInfo();
   
    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should update server name and earnings on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(2);
    expect(curTdList[0].innerText).toEqual('Alice');
  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
