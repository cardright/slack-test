// A simple test to verify a visible window is opened with a title
import { Application } from "spectron";
import * as path from "path";

const electronPath = require('electron');
const appPath = path.join(__dirname, '../dist/main/main.js');

let app: Application;

beforeAll(()=>{
  app = new Application({
    //@ts-ignore
    path: electronPath,
    args: [appPath]
  });
  return app.start();
});

afterAll(()=>{
  return app.stop();
})

test('verify Window Is Visible With Hello World', async ()=>{
    // Check if the window is visible
    const isVisible = await app.browserWindow.isVisible()
    // Verify the window is visible
    expect(isVisible).toEqual(true);
    const header = await app.client.$('h1*=Hello');
    expect(await header.getText()).toEqual('Hello World'); 
});