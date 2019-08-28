import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/react";

import { Button } from "./Button";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("default", () => <Button>hej</Button>)
  .add("with knobs", () => (
    <Button disabled={boolean("Disabled", false)}>
      {text("Label", "defaultValue")}
    </Button>
  ));
