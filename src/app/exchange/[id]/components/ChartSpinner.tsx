import { ReactNode } from "react";
import { Spinner } from "react-bootstrap";

type ChartSpinner = {
    children: ReactNode;
    className?:string;
    isLoading?:boolean;
}
const ChartSpinner = (props:ChartSpinner) => {
    return <div className={`position-relative py-2 ${props.className}`}>
        {props.children}
        {props.isLoading ? <div style={{backgroundColor:'rgba(0,0,0,0.2)'}} className='position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center'>
        <Spinner/>
    </div> : null}
    </div>
}
export default ChartSpinner;