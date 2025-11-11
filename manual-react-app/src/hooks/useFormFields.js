import { useState } from "react";

export default function useFormFields(initialFields) {
  const [fields, setFields] = useState(initialFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const resetFields = () => setFields(initialFields);

  return [fields, handleChange, resetFields];
}
