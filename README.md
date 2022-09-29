# react-native-sidebar-navigator
A sidebar navigator, it has the same props and methods as a tab navigator. 

The view has been changed, this is the initial start, I'll keep on adding more features and improvements.

## Installation

```sh
npm install react-native-sidebar-navigator

yarn add react-native-sidebar-navigator
```

## Usage

```js
import { createSideBarNavigator } from "react-native-sidebar-navigator";
// ...
const Stack = createSideBarNavigator();

<Stack.Navigator>
  <Stack.Screen
        name={'Primary'}
        component={PrimaryScreen}
        options={{
          title: 'Primary',
          sideBarIcon: ({ focused }) => (
            <Icon
            />
          ),
        }}
      />
</Stack.Navigator>

```
---

Please check this example for further instructions [example](https://github.com/quicksilverr/react-native-sidebar-navigator/blob/master/example/src/navigation/home.tsx)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
