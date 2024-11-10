import {ComponentPropsWithoutRef, ElementType, type ReactNode } from "react";

type  ButtonProp <T extends ElementType>= {
    children: ReactNode; // jsx code itself 
    as?: T;// element type not the jsx code
}  & ComponentPropsWithoutRef<T>
const Button  = <C extends ElementType>({as,children,...props}:ButtonProp<C>) =>
{
    const Component = as || "div"; 
     return   <Component {...props}>
           {children}
        </Component>
};

export default Button;