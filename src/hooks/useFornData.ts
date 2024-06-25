import { useState } from "react";

export function useFormData<T > (data: T | any): [T, CallableFunction] {
  const [formData, setFormData] = useState(data);

  function updateFormData(key: string, value: string): void {
    formData[key] = value;
    setFormData({ ...formData });
  }

  return [formData, updateFormData];
}