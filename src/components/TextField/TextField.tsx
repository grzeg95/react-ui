import './TextField.scss';
import {type ChangeEventHandler, type RefObject, useId, useRef, useState} from 'react';

interface TextFieldProps {
  type?: 'text' | 'number';
  required?: boolean;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  ref?: RefObject<HTMLInputElement | null>;
  error?: string;
}

export function TextField(
  {
    type = 'text',
    required = false,
    placeholder,
    label,
    disabled,
    onChange = () => {},
    ref,
    error
  }: TextFieldProps
) {

  const _inputRef = useRef<HTMLInputElement>(null);
  const inputRef = ref || _inputRef;

  const [focused, setFocused] = useState(false);
  const inputId = useId();

  const labelFloating = inputRef.current?.value || focused;

  return (
    <div className="text-field-wrapper">
      <div
        className={`text-field ${focused ? 'text-field--focused' : ''} ${error ? 'text-field--error' : ''} ${disabled ? 'text-field--disabled' : ''}`}
      >
        <label
          className={`text-field-label ${labelFloating ? "text-field-label--floating" : ""}`}
          htmlFor={inputId}
        >{label}</label>

        <input
          ref={inputRef}
          className={`text-field-input ${!labelFloating ? "text-field-input--hide-placeholder" : ""}`}
          required={required}
          type={type}
          id={inputId}
          placeholder={placeholder}
          onBlur={() => {
            setFocused(false);
          }}
          onFocus={() => {
            setFocused(true);
          }}
          onChange={onChange}
        />

        <div
          className={`text-field-underline ${focused ? 'text-field-underline--active' : ''}`}
        ></div>
      </div>

      <div className="text-field-error-wrapper">
        <div className="text-field-error">
          {error}
        </div>
      </div>
    </div>

  );
}
