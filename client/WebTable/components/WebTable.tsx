import * as React from 'react';

export interface StatusProps{point:number};
export interface StatusState{point:number};
class WebTable extends React.Component<StatusProps,StatusState>{
    
    constructor(props: any){
        super(props);
        this.state = {point: props.point};
        this.hover = this.hover.bind(this);
    }

    render(){
        return (
            <section>
                <p></p>
            </section>
            // <div>
            //     <p> This is table </p>
            //     <table>
            //         <tr>
            //             <td>
            //             Current pointer : {this.state.point}
            //             </td>
            //             <td onMouseOver={() => this.hover(1)}>
            //                 1    
            //             </td>
            //             <td onMouseOver={() => this.hover(2)}>
            //                 2
            //             </td>
            //             <td onMouseOver={() => this.hover(3)}>
            //                 3 
            //             </td>
            //         </tr>
            //     </table>
            // </div>
        );
    }

    hover(newPoint) {
        this.setState({point: newPoint});
        console.log("call function hover "+ this.props.point);
    }
}
export default WebTable;