import {forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProp =
    {
        setInput: (x: string | number) => void;
        inputName: string | number ;
        label: string;
        id: string
    } & ComponentPropsWithoutRef<"input">; // mean add all possible props that might be accepted for input element execlude Ref

const InputWrapper =forwardRef<HTMLInputElement,InputProp>(function InputWrapper({ label, id,setInput,inputName,...props },ref) 
{
    function handleInput(event:React.ChangeEvent<HTMLInputElement>):void
    {
        setInput(event.target.value)
    }
 
    return (
        <p className="">
        <label htmlFor={id}>{label}</label>
            <input id={id} onChange={handleInput} name={id} value={inputName} {...props} ref={ref} />
        </p>
    );
})

export default InputWrapper; 