import React from "react";
import {
  Renderer,
  Button,
  Window,
  View,
  AnimatedImage,
  ComboBox,
  Text,
  Tabs
} from "./index";
import { QIcon, QVariant, QPushButtonSignals } from "@nodegui/nodegui";
import { useEventHandler } from "./hooks";

const items = [
  {
    text: "hello",
    icon: new QIcon(
      "/Users/atulr/Project/nodegui/nodegui/src/lib/QtGui/__tests__/assets/nodegui.png"
    ),
    userData: new QVariant(12346)
  },
  { text: "world" }
];

const App = () => {
  const handler = useEventHandler<QPushButtonSignals>(
    {
      clicked: clicked => { console.log("clicked"); }
    },
    []
  );
  // TODO: need to figure out a way to add tab title and icon
  return (
    <Window>
        <Tabs
          tabPosition={0}
        >
          <View><Button on={handler} style={buttonStyle} text={"Hello"} /></View>
          <View><Button on={handler} style={buttonStyle} text={"Hello2"} /></View>
        </Tabs>
    </Window>
  );
};

const containerStyle = `
  flex: 1; 
  justify-content:'center'; 
  border: 1px solid blue;
  padding: 10;
`;
const buttonStyle = `
  color: white;
`;

Renderer.render(<App />);
