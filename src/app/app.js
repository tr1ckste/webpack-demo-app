import { inputsAreValid } from "./utils/inputs-are-valid";
import { parseInputs } from "./utils/parse-inputs";
import { adder } from "./utils/math";
import multiplyArr from "./utils/multiplyArr";

export const run = (alertService, componentService) => {
  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(adder(numA, numB));
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });

  componentService.onClickMultiply(() => {
    multiplyArr()
  })
};
