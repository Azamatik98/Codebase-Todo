import React from "react";
import style from "./EditTask.module.scss";

interface TextAreaProps {
  children: React.ReactElement;
  rows: number;
  initialValue: string;
  onSave: (arg0: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  children,
  rows,
  initialValue,
  onSave,
}) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>(initialValue);
  const handleSave = () => {
    if (value.length === 0 || !value.trim()) {
      alert("Empty value");
      return;
    }
    if (value === initialValue) {
      setOpen(false);
      return;
    }
    onSave(value);
    setOpen(false);
  };

  const moveCaretAtEnd = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.target.value = "";
    e.target.value = value;
  };

  return (
    <div>
      {isOpen ? (
        <div className={style.edit_area}>
          <textarea
            rows={rows}
            value={value}
            autoFocus
            onFocus={moveCaretAtEnd}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
          <button className={style.save} onClick={handleSave}>
            Save
          </button>
          <button className={style.cancel} onClick={() => setOpen(false)}>
            Отмена
          </button>
        </div>
      ) : (
        <div style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
          {children}
        </div>
      )}
    </div>
  );
};

export default TextArea;
