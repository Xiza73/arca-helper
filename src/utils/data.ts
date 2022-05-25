export const prueba = (): void => {};

/* Input */
export const inputTSX = (id: string, cant: number) =>
  `const inputs = inputsArray(${cant}, '${id}');`;

export const inputSCSS = (id: string, cant: number) => {
  let a = "";
  a += `input {
      @include input-base(5%, 5%, min(1.4vw, 26px));
      @include f12;
    }
    `;
  for (let i = 0; i < cant; i++) {
    a += `#${id}${i} {
              width: 10%;
              top: 5%;
              left: 5%;
          }`;
  }

  return a;
};

/* Boxes */
export const boxesTSX = (id: string, _: number) =>
  `const boxes = boxesArray(array, '${id}', true);`;

export const boxesSCSS = (id: string, cant: number) => {
  let a = "";
  a += `.dnd-box {
      @include box-abs(auto, 7%, 20%, 20%);
    }
    `;
  for (let i = 0; i < cant; i++) {
    a += `#${id}${i} {
              top: 5%;
              left: 5%;
          }`;
  }

  return a;
};

export const boxGridTSX = (id: string, _: number) =>
  `const boxes = boxesArray(array, '${id}', true);

<div className="boxes">{
    boxes.map((box, i) => (
      <div
        className={\`box\`}
        key={\`box-\${i}\`}
      >
        {box}
      </div>
    ))
  }</div>`;

export const boxGridSCSS = (_: string, __: number) =>
  `.boxes {
    @include my-grid(repeat(4, 1fr), repeat(4, 1fr), 0%, 0%);
    @include movil(47%, 43%, 52%, 42%);

    .box {
      .dnd-box {
        @include box(auto, 100%);
      }
    }
  }`;

/* Container */
export const containerTSX = (id: string, cant: number) =>
  `const containers: JSX.Element[] = containersArray(${cant}, '${id}');`;

export const containerSCSS = (id: string, cant: number) => {
  let a = "";
  a += `.dnd-container {
      @include container-abs(6%, 12%, 20%, 20%);
    }
    `;
  for (let i = 0; i < cant; i++) {
    a += `#${id}${i} {
              top: 5%;
              left: 5%;
          }`;
  }

  return a;
};

export const containerGridTSX = (id: string, cant: number) =>
  `const containers: JSX.Element[] = containersArray(${cant}, '${id}');
  
  <div className="containers">{containers}</div>`;

export const containerGridSCSS = (id: string, cant: number) =>
  `.containers {
    @include my-grid(repeat(4, 1fr), repeat(4, 1fr), 0%, 0%);
    @include movil(47%, 43%, 7%, 42%);

    .dnd-container {
      @include container(100%, 100%);
    }
  }`;

/* Container Multiple */
export const containerMultipleTSX = (id: string, cant: number) =>
  `const containers: JSX.Element[] = containersArray(${cant}, '${id}');`;

export const containerMultipleSCSS = (id: string, cant: number) => {
  let a = "";
  a += `.dnd-container {
      @include container-multiple-abs(
        10%,
        10%,
        auto,
        80%,
        1%,
        10%,
        10%
      );
    }`;
  for (let i = 0; i < cant; i++) {
    a += `#${id}${i} {
              top: 5%;
              left: 5%;
          }
          `;
  }

  return a;
};

export const containerVerticalSCSS = (id: string, cant: number) => {
  let a = "";
  a += `.dnd-container {
        @include container-multiple-abs(
          10%,
          10%,
          auto,
          80%,
          1%,
          10%,
          10%
        );
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
      }`;
  for (let i = 0; i < cant; i++) {
    a += `#${id}${i} {
                top: 5%;
                left: 5%;
            }
            `;
  }

  return a;
};

/* Color Box */
export const colorBoxTSX = (id: string, cant: number) =>
  `const colorBoxes = colorBoxesArray(${cant}, '${id}', '${id}');`;

export const colorBoxSCSS = (id: string, cant: number) => {
  let a = "";
  a += `.color-box {
      @include color-box(4%, 3%);
    }
    `;
  for (let i = 0; i < cant; i++) {
    a += `#${id}${i} {
              top: 5%;
              left: 5%;
          }`;
  }

  return a;
};

/* Radio */
export const radioTSX = (id: string, cant: number) =>
  `const ${id}: JSX.Element[] = radiosArray('check', '${id}', ${cant});`;

export const radioSCSS = (id: string, cant: number) => {
  let a = "";
  a += `.check {
      @include radio-base(15%, 8%, 0.6rem, rgba(255, 0, 255, 0.5));
    }
    `;
  for (let i = 0; i < cant; i++) {
    a += `#${id}${i} {
              top: 5%;
              left: 5%;
          }`;
  }

  return a;
};

export const radioXSCSS = (id: string, cant: number) => {
  let a = "";
  a += `.check {
        @include radiox-base(4%, 9%);
      }
      `;
  for (let i = 0; i < cant; i++) {
    a += `#${id}${i} {
                top: 5%;
                left: 5%;
            }`;
  }

  return a;
};

export const radioBorderSCSS = (id: string, cant: number) => {
  let a = "";
  a += `.check {
        @include radiob-base(15%, 9%, blue)
      }
      `;
  for (let i = 0; i < cant; i++) {
    a += `#${id}${i} {
                top: 5%;
                left: 5%;
            }`;
  }

  return a;
};
