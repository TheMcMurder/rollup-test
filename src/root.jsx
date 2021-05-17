import React from 'react'
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';

export default function RootComponent() {
  return (
    <Provider theme={defaultTheme}>
      <div>Hello from react</div>
      <Button variant="cta" onPress={() => alert('Hey there!')}>
        Hello React Spectrum!
      </Button>
    </Provider>
  )
  gg
}