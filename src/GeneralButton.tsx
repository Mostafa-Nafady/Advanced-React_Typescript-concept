import {ReactNode, type ComponentPropsWithoutRef } from "react";

type ButtonProp = ComponentPropsWithoutRef<"button"> & IdentifierProp & {
    href?: never;
};
type AnchorProp = ComponentPropsWithoutRef<"a"> & IdentifierProp & {
    href:string
};
type IdentifierProp = {
    children: ReactNode;
}
type GeneralButtonProp=ButtonProp|AnchorProp
const GeneralButton = (props: GeneralButtonProp) =>
{
    // const Component = as;
    function checkElementType(propObject:GeneralButtonProp):propObject is AnchorProp // Type predicates
    {//type perdicates tell type script more info about not only the type of returned data but also the argument
    // which passed to function when it return true value has a specific type >> "AnchorProp"
        return "href" in propObject;
    }
    if (checkElementType(props))
    {
           return (
        <div style={{ backgroundColor: "green", color: "green" }}>
        {/* "props has AnchorProp type "*/}
        < a {...props} className="button">{props.children}</a> 
        </div>
            
    ); 
    } 
             return (
        <div style={{ backgroundColor: "red", color: "red" }}>
        {/* "props has ButtonProp type "*/}
            
        <button {...props} className="button">{props.children}</button>
        </div>
            
    ); 
    


};

export default GeneralButton;