1. Prerequisites
Before you begin, ensure you have the necessary software installed on your system:
* Node.js:
   * Download and install Node.js (LTS version recommended)
   * Verify installation: node -v and npm -v
* Java Development Kit (JDK):
   * Download and install a compatible JDK (e.g., JDK 11 or later)
   * Verify installation: java -version
* Android Studio:
   * Download and install Android Studio
   * This provides the Android SDK, platform tools (adb), and AVD Manager (for emulators).
* Appium Server:
   * Install Appium globally using npm:
npm install -g appium

   * Install the necessary driver for Android automation:
appium driver install uiautomator2

2. Environment Variables Setup
You need to configure your system to locate the Android SDK, which is crucial for Appium to interact with your device.
   1. Set ANDROID_HOME:
   * Create an environment variable named ANDROID_HOME and set its value to the path of your Android SDK installation.
   * Windows Example: C:\Users\YourUser\AppData\Local\Android\sdk
   * macOS/Linux Example: ~/Library/Android/sdk
   2. Add to System PATH:
   * Add the following directories from your Android SDK to your system's PATH environment variable. This allows you to use adb and emulator commands directly from any terminal.
   * %ANDROID_HOME%\platform-tools
   * %ANDROID_HOME%\emulator
3. Prepare Your Android Emulator
To run tests on an Android emulator, you need to create and start a Virtual Device.
   1. Create a Virtual Device (AVD - Android Virtual Device) (if you don't have one):
   * Open Android Studio.
   * Go to Tools > Device Manager (or AVD Manager for older versions).
   * Click on Create device and follow the wizard to set up a new virtual device (e.g., Pixel 3a, Android 11/12).
   2. Start an Emulator:
   * In the Device Manager, click the "Play" icon next to your desired emulator to start it.
   * Alternatively, you can start an emulator from your terminal using its AVD name (e.g., emulator -avd Pixel_3a_API_34_arm64-v8a).
   3. Verify Emulator Connection:
   * Open your terminal or command prompt.
   * Run the command:
adb devices

   * You should see your emulator listed with a serial number (e.g., emulator-5554) and "device" status.
   * Note on Emulator Name: Your wdio.conf.ts file currently uses "appium:deviceName": "emulator-5554". If your emulator has a different AVD name or adb devices shows a different identifier, you might need to adjust the appium:deviceName capability in your wdio.conf.ts.
4. Start Appium Server
Once your emulator is running, start the Appium server.
      1. Start Appium:
      * Open a new terminal or command prompt.
      * Run the Appium server command:
appium

      * Leave this terminal window open; Appium will be listening for test commands.
5. Run the Tests
With Appium running and your emulator active, you can execute your test suite.
         1. Navigate to Project Directory:
         * Open a new terminal or command prompt.
         * Navigate to the root directory of this project where wdio.conf.ts is located.
         2. Install Project Dependencies:
         * If you haven't already, install the project's dependencies:
npm install

            3. Run All Tests:
            * Execute the entire test suite:
npx wdio run wdio.conf.ts

               4. Run Specific Tests ():
               * To run only a specific test file, use the --spec flag:
npx wdio run wdio.conf.ts --spec ./tests/validLogin.spec.js

(Replace ./tests/validLogin.spec.js with the path to your desired test file.)