import React from "react";
import ErrorInputmsg from "./ErrorInputmsg";

export default function Input({
  label,
  name,
  id,
  defaultValue,
  readOnly,
  placeholder,
  register,
  regex,
  type,
  errors,
  className,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        readOnly={readOnly}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register(name, regex)}
        type={type}
        className={`profile-input ` + className}
      />
      {errors[name] ? <ErrorInputmsg msg={errors[name].message} /> : ""}
    </>
  );
}
