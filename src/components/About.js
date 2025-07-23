import React from 'react'

export default function About(props) {
    
    //console.log("mode = "+props.mode);
    let myStyle = {
        color: props.mode === 'light' ? 'black' :'white',
        backgroundColor: props.mode === 'light' ? 'white':'#13466e'
    };

    if(props.bgClass !== null){
        myStyle = {
            color:  'black',
        };
    }

    
    // const [myStyle,setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // });

    // const[btnText,setBtnText] = useState('Enable Dark Mode');

    // const toggleStyle = () => {
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //         })
    //         setBtnText('Enable Dark Mode')
    //     } else {
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //         })
    //         setBtnText('Disable Dark Mode')
    //     }
    // }

  return (
    <div>
        <div className={`container ${props.bgClass}`} style={myStyle}>       
            <div className="accordion" id="accordionExample" >
                <h1 className='my-3'>About Us</h1>
                <div className={`accordion-item ${props.bgClass}`} style={myStyle}>
                    <h2 className="accordion-header">
                    <button className={`accordion-button ${props.bgClass}`} style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item ${props.bgClass}`} style={myStyle}>
                    <h2 className="accordion-header">
                    <button className={`accordion-button  collapsed ${props.bgClass}`} style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className={`accordion-collapse collapse ${props.bgClass}`}  data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item ${props.bgClass}`} style={myStyle}>
                    <h2 className="accordion-header">
                    <button className={`accordion-button collapsed ${props.bgClass}`} style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-2">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div> */}
    </div>
  )
}
