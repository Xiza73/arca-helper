import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const MainGenerator = () => {
  const [title, setTitle] = useState("");
  const [tsx, setTsx] = useState("");
  const [scss, setScss] = useState("");

  const handleChange = (text: string) => {
    setTitle(text);
    setTsx(tsxContent(text));
    setScss(scssContent(text));
  };

  const tsxContent = (title: string) => `import { useState } from "react";
import { ExerciseContainer } from "../../../../../../../utils/exercises";

import "./assets/styles.scss";

import imgCorrect from "./assets/images/resuelto.png";
import fondo from "./assets/images/total.png";

const ${title} = () => {
const [correctAnswer, setCorrectAnswer] = useState(false); 
return (
    <ExerciseContainer
        correctAnswer={correctAnswer}
        setCorrectAnswer={setCorrectAnswer}
        fondo={fondo}
        imgCorrect={imgCorrect}
        hashClass="${title}"
    >
        <></>
    </ExerciseContainer>
);
};

export { ${title} };`;

  const scssContent = (title: string) => {
    return `@import "../../../../../../../../assets/css/quiz-extend.scss";
    
    .quiz-container.${title} {
        @include base;
        .main-content {
        @include main-content;
        .row {
            .col-12 {
            .container__images {
                .image__fondo {
                .main-image {
                    @include main-img2;
                }
                }
                .absolute {
                @include absolute;
                }
            }
            }
        }
        }
    }`;
  };

  return (
    <>
      <div className="input-group mb-3 mx-auto" style={{ width: "300px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="hash name"
          aria-label="title"
          value={title}
          onChange={
            (e) => handleChange(e.target.value) /*setTitle(e.target.value)*/
          }
        />
      </div>
      <div
        className="d-flex justify-content-around flex-wrap mb-5"
        style={{ gap: "30px" }}
      >
        <div className="card" style={{ width: "40%", minWidth: "300px" }}>
          <div className="card-body">
            <div className="d-flex justify-content-between mb-2">
              <h5 className="card-title d-flex align-items-center m-0 p-0">
                TSX
              </h5>
              <CopyToClipboard text={tsx}>
                <button className="card-link btn btn-primary">Copy</button>
              </CopyToClipboard>
            </div>
            <textarea
              className="card-text w-100 form-control"
              style={{ height: "200px", overflow: "hidden" }}
              defaultValue={tsx}
              onChange={(e) => setTsx(e.target.value)}
            />
          </div>
        </div>
        <div className="card" style={{ width: "40%", minWidth: "300px" }}>
          <div className="card-body">
            <div className="d-flex justify-content-between mb-2">
              <h5 className="card-title d-flex align-items-center m-0 p-0">
                SCSS
              </h5>
              <CopyToClipboard text={scss}>
                <button className="card-link btn btn-primary">Copy</button>
              </CopyToClipboard>
            </div>
            <textarea
              className="card-text w-100 form-control"
              style={{ height: "200px", overflow: "hidden" }}
              defaultValue={scss}
              onChange={(e) => setScss(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
