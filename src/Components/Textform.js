import react, { useState } from 'react';

const Textform = (props) => {
    const [text,setText]=useState('enter text here');
    return (
        <div className="Container">
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea class="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className='btn- btn-primary'>Convert to UppeCase</button>
        </div>

    )


}
export default Textform;