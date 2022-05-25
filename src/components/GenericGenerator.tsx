import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
type IProps = {
  title: string;
  tsxFunction: Function;
  scssFunction: Function;
};

export const GenericGenerator = ({
  title,
  tsxFunction,
  scssFunction,
}: IProps) => {
  const [form, setForm] = useState({
    id: "",
    cant: undefined,
  });
  const [tsx, setTsx] = useState("");
  const [scss, setScss] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setTsx(tsxContent(form.id, form.cant));
    setScss(scssContent(form.id, form.cant));
  }, [form]);

  const tsxContent = (id: string, cant?: number) =>
    id && cant ? tsxFunction(id, cant) : ``;

  const scssContent = (id: string, cant?: number) =>
    id && cant ? scssFunction(id, cant) : ``;

  return (
    <>
      <div className="d-flex flex-column" style={{ width: "320px" }}>
        <h5 className="w-100 text-center">{title}</h5>
        <div className="input-group mb-3 mx-auto" style={{ width: "300px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="id"
            name="id"
            value={form.id}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="cantidad"
            name="cant"
            value={form.cant}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-2">
              <h5 className="card-title d-flex align-items-center m-0 p-0">
                {title} TSX
              </h5>
              <CopyToClipboard text={tsx}>
                <button className="card-link btn btn-primary">Copy</button>
              </CopyToClipboard>
            </div>
            <textarea
              className="card-text w-100 form-control"
              style={{ height: "100px" }}
              value={tsx}
              onChange={(e) => setTsx(e.target.value)}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-2">
              <h5 className="card-title d-flex align-items-center m-0 p-0">
                {title} SCSS
              </h5>
              <CopyToClipboard text={scss}>
                <button className="card-link btn btn-primary">Copy</button>
              </CopyToClipboard>
            </div>
            <textarea
              className="card-text w-100 form-control"
              style={{ height: "100px" }}
              value={scss}
              onChange={(e) => setScss(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
