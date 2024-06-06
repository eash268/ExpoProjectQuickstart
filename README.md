# HOW TO USE THIS TEMPLATE

### Creating Your App

1. $ npx create-expo-app YourProjectName --https://github.com/eash268/ExpoProjectQuickstart
2. $ cd YourProjectName
3. $ yarn install

### Linking Clerk

1. Create a new app in https://dashboard.clerk.com/
2. Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in .env
3. Add desired login methods to /src/screens/LoginScreen.js
4. Make sure to add token to all request headers, as shown in /src/screens/HomeScreen.js

### Running The App

1. $ npx expo start

### Publishing To Apple App Store

1. $ npm install -g eas-cli
2. $ eas login
3. $ eas build:configure
4. $ eas secret:push --scope project --env-file .env
5. $ eas build --platform ios
6. $ eas submit -p ios

### Tips

- Make sure the name of your app in /app.json is unique enough and short enough or Apple won't let you submit to their store
- Make sure to increment "ios.buildNumber" when rebuilding
- Make sure to add "scheme": "com.name_of_your_app.app" to the expo part of app.json
