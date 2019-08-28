import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";

import { Button } from "./Button";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("default", () => <Button>hej</Button>)
  .add("with knobs", () => <Button>{text("Label", "defaultValue")}</Button>);
