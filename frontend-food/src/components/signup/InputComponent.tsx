import React from "react";
import TextField from "@mui/material/TextField";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export const InputComponent = (props: any) => {
  const {
    label,
    placeholder,
    type = "text",
    pass = false,
    showPassword,
    handleShowPassword,
    name,
    handleChange,
  } = props;

  return (
    <div className="w-full relative">
      <p>{label}</p>
      <TextField
        size="small"
        variant="filled"
        type={type}
        fullWidth
        placeholder={placeholder}
        InputProps={{
          disableUnderline: true,
          style: {
            paddingBottom: "10px",
            borderRadius: "6px",
          },
        }}
        className=""
        name={name}
        onChange={handleChange}
      />
      {pass &&
        (showPassword ? (
          <VisibilityOffOutlinedIcon
            className="absolute right-4 top-10"
            onClick={handleShowPassword}
          />
        ) : (
          <VisibilityOutlinedIcon
            className="absolute right-4 top-10"
            onClick={handleShowPassword}
          />
        ))}
    </div>
  );
};
