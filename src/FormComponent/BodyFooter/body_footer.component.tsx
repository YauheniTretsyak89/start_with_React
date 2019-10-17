import React from 'react'

class BodyFooterComponent extends React.Component<{submit:any}>{
    render () { 
        return (
            <div className="bode_footer_wrapper">
                <div className="footer_buttons_wrapper">
                <button onClick={() => {this.props.submit()}} className="btn_common">Create</button>
                </div>
            </div>
        );
    }   
}

export default BodyFooterComponent