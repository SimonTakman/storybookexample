import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import { Button } from "./Button";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("default", () => <Button>hej</Button>)
  .add("long text", () => <Button>This is a very long text</Button>);
