import { MainGenerator } from "./components/MainGenerator";
import { GenericGenerator } from "./components/GenericGenerator";
import { Title } from "./components/Title";
import {
  boxesSCSS,
  boxesTSX,
  boxGridSCSS,
  boxGridTSX,
  containerGridSCSS,
  containerGridTSX,
  containerMultipleSCSS,
  containerMultipleTSX,
  containerSCSS,
  containerTSX,
  containerVerticalSCSS,
  inputSCSS,
  inputTSX,
  radioBorderSCSS,
  radioSCSS,
  radioTSX,
  radioXSCSS,
} from "./utils/data";
import { ToolsContainer } from "./components/ToolsContainer";

export const App = () => {
  return (
    <div className="container-fluid p-5">
      <Title title="Main Doc" />
      <MainGenerator />
      <ToolsContainer title="Over Used">
        <GenericGenerator
          title="Input"
          tsxFunction={inputTSX}
          scssFunction={inputSCSS}
        />
        <GenericGenerator
          title="Boxes"
          tsxFunction={boxesTSX}
          scssFunction={boxesSCSS}
        />
        <GenericGenerator
          title="Container"
          tsxFunction={containerTSX}
          scssFunction={containerSCSS}
        />
        <GenericGenerator
          title="Container Multiple"
          tsxFunction={containerMultipleTSX}
          scssFunction={containerMultipleSCSS}
        />
        <GenericGenerator
          title="Radio"
          tsxFunction={radioTSX}
          scssFunction={radioSCSS}
        />
      </ToolsContainer>
      <ToolsContainer title="Extra">
        <GenericGenerator
          title="Box Grid"
          tsxFunction={boxGridTSX}
          scssFunction={boxGridSCSS}
        />
        <GenericGenerator
          title="Container Grid"
          tsxFunction={containerGridTSX}
          scssFunction={containerGridSCSS}
        />
        <GenericGenerator
          title="Radio X"
          tsxFunction={radioTSX}
          scssFunction={radioXSCSS}
        />
        <GenericGenerator
          title="Radio Border"
          tsxFunction={radioTSX}
          scssFunction={radioBorderSCSS}
        />
        <GenericGenerator
          title="Container Vertical"
          tsxFunction={containerMultipleTSX}
          scssFunction={containerVerticalSCSS}
        />
      </ToolsContainer>
    </div>
  );
};
