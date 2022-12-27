const si = require('systeminformation');

async function getInfo() {
  try {
    const data = await si.get({
      cpu: '*',
      osInfo: '*',
      system: '*',
      //   networkInterfaces: '*',
      //   processLoad: '(postgres) pids, cpu',
    });
    // const data = await si.getStaticData(); // get all static data at once
    // const data = await si.getDynamicData(); // get all dynamic data at once
    // const data = await si.getAllData(); // get all data at once
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// get all data by separate function call

async function getSystemInfo() {
  try {
    const data = await si.system();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function getCPUInfo() {
  si.cpu()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

async function getBatteryInfo() {
  try {
    const data = await si.battery();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function getGraphicsInfo() {
  try {
    const data = await si.graphics();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function getOSInfo() {
  try {
    // const data = await si.osInfo();
    // const data = await si.versions();
    const data = await si.users();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function getUSBInfo() {
  try {
    const data = await si.usb();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function getAudioInfo() {
  try {
    const data = await si.audio();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function getWiFiInfo() {
  try {
    // const data = await si.wifiInterfaces();
    // const data = await si.wifiConnections();
    const data = await si.wifiNetworks();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function getGeneralInfo() {
  try {
    const data = await si.bluetoothDevices();
    // const data = await si.dockerInfo();
    // const data = await si.networkStats();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getGeneralInfo();
