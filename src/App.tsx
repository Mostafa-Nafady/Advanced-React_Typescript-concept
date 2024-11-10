import { useRef, useState } from "react";
import InputWrapper from "./InputWrapper";
import Button from "./Button";
import GeneralButton from "./GeneralButton";
import Form from "./Form";

function App()
{
  const[inputName,setInputName]=useState<number|string>("")
  const [inputAge, setInputAge] = useState<number | string>(0)
  const inputNameRef=useRef<HTMLInputElement>(null)
  const inputAgeRef = useRef<HTMLInputElement>(null)

  function handleSave(data:unknown):void
  {
    const extactedData=data as {name:string,age:string}// it like i define the type of received data internaly 
    //and keep the Form component receive any type of data
    // allow u to handle the type of data that u pass to the Form component internally 
    // inside the parent component "APP" 
    console.log(extactedData)
  }
  return <>
    <Form onSave={handleSave}>
    <InputWrapper id="name" label="your name" setInput={setInputName} inputName={inputName} type="text"  ref={ inputNameRef} />
    <InputWrapper id="age" label="your age" setInput={setInputAge} inputName={inputAge} type="number" ref={inputAgeRef} />
    <GeneralButton href="/saasd">Test  children</GeneralButton>
    {/* <GeneralButton >Test  children</GeneralButton> */}

      <Button as="button" onClick={() => { console.log("sd") }}>click me 1234</Button> 
      </Form>
  </>
 

}

export default App;
