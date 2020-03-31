// import React from 'react';
// import Pictures from './Pictures.json';
// import Image from './Image'
// import './main.css'
// import Square from './square.jpg'

// class MemoryGame extends React.Component {
//     state = {
//         Pictures,
//         changerPic:[Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square],
//         turn:0,
//         current:Square,
//         currentId:null,
//         result:0,
//         tries:0,
//         min:0
//     }

//     constructor(props) {
//         super(props)
//         this.handleClick = this.handleClick.bind(this)
//         this.win = this.win.bind(this)
//     }

//     win() {
//         if(this.state.result === 8) {
//             this.setState({min:Math.min(this.state.min, this.state.tries),
//                 result:0,tries:0})
//             this.state.Pictures.clicked = false;
//         }
//     }
     

//     handleClick(event, id, clicked) {
//         if(clicked === false) {
//             this.win()

//             // const items = this.state.changerPic.slice()
//             // items[id-1] = this.state.Pictures[id-1].image
//             // this.setState({changerPic:items})
//             this.state.changerPic[id-1] = this.state.Pictures[id-1].image
//             let items = [this.state.changerPic];
//             this.setState({items});

//             setTimeout(()=>{
//                 // items[id-1] = Square
//                 // this.setState({changerPic:items})
//                 this.state.changerPic[id-1] = Square;
//                 items = [this.state.changerPic];
//                 this.setState({items});
//             },2000)

//             //const e = this.state.Pictures.find(p => p.id === id)
//             if(this.state.turn === 0 ) {
//                 let pic = this.state.Pictures[id-1].image
//                 let Id = this.state.Pictures[id-1].id
//                 this.setState({turn:1, current:pic, currentId:Id}) 
//             } else {
//                 if(this.state.current === this.state.Pictures[id-1].image) {  
                    
//                     this.setState({result:this.state.result+1})
//                     // update [icture that from now on it shoud be visible]
//                     this.state.Pictures[id-1].clicked = true; 
//                     this.state.Pictures[this.state.currentId -1].clicked = true;

//                     //set the two picturesfor render ON
//                     // this.state.changerPic[id-1] = this.state.Pictures[id-1].image
//                     // let items = [this.state.changerPic];
//                     // this.setState({items});
//                 }
//                 this.setState({turn:0, current:''}) 
//             }
//             this.setState({tries:this.state.tries+1})
//         } else {
//             // const items = this.state.changerPic.slice()
//             // items[id-1] = this.state.Pictures[id-1].image
//             // this.setState({changerPic:items})

//             this.state.changerPic[id-1] = this.state.Pictures[id-1].image
//             let items = [this.state.changerPic];
//             this.setState({items});
//         }
//     }
        
    



//     render() {
//         return (
//             <div className='game'>
//                 <table border={1}>
//                     <tbody>
//                         <tr>
//                             <td>
//                                 <Image image={this.state.changerPic[1]} name={this.state.Pictures[1].name} id={this.state.Pictures[1].id} clicked={this.state.Pictures[1].clicked} click={this.handleClick}/>
//                             </td>
//                             <td>
//                                 <Image image={this.state.changerPic[2]} name={this.state.Pictures[2].name} id={this.state.Pictures[2].id} clicked={this.state.Pictures[2].clicked} click={this.handleClick}/> 
//                             </td>
//                             <td>
//                                 <Image image={this.state.changerPic[3]} name={this.state.Pictures[3].name} id={this.state.Pictures[3].id} clicked={this.state.Pictures[3].clicked} click={this.handleClick}/>
//                             </td>
//                             <td>
//                                 <Image image={this.state.changerPic[4]} name={this.state.Pictures[4].name} id={this.state.Pictures[4].id} clicked={this.state.Pictures[4].clicked} click={this.handleClick}/>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>
//                                 <Image image={this.state.changerPic[5]} name={this.state.Pictures[5].name} id={this.state.Pictures[5].id} clicked={this.state.Pictures[5].clicked} click={this.handleClick}/>
//                             </td>
//                             <td>
//                                 <Image image={this.state.changerPic[6]} name={this.state.Pictures[6].name} id={this.state.Pictures[6].id} clicked={this.state.Pictures[6].clicked} click={this.handleClick}/>
//                             </td>
//                             <td>
//                                 <Image image={this.state.changerPic[7]} name={this.state.Pictures[7].name} id={this.state.Pictures[7].id} clicked={this.state.Pictures[7].clicked} click={this.handleClick}/>
//                             </td>
//                             <td>
//                                 <Image image={this.state.changerPic[8]} name={this.state.Pictures[8].name} id={this.state.Pictures[8].id} clicked={this.state.Pictures[8].clicked} click={this.handleClick}/>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>
//                                 <Image image={this.state.changerPic[9]} name={this.state.Pictures[9].name} id={this.state.Pictures[9].id} clicked={this.state.Pictures[9].clicked} click={this.handleClick}/>
//                             </td>
//                             <td>
//                                 <Image image={this.state.changerPic[10]} name={this.state.Pictures[10].name} id={this.state.Pictures[10].id} clicked={this.state.Pictures[10].clicked} click={this.handleClick}/>
//                             </td>
//                             <td>
//                                 <Image image={this.state.changerPic[11]} name={this.state.Pictures[11].name} id={this.state.Pictures[11].id} clicked={this.state.Pictures[11].clicked} click={this.handleClick}/>
//                             </td>
//                             <td>
//                                 <Image image={this.state.changerPic[12]} name={this.state.Pictures[12].name} id={this.state.Pictures[12].id} clicked={this.state.Pictures[12].clicked} click={this.handleClick}/>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>
//                                 <Image image={this.state.changerPic[13]} name={this.state.Pictures[13].name} id={this.state.Pictures[13].id} clicked={this.state.Pictures[13].clicked} click={this.handleClick}/>
//                             </td>
//                             <td>
//                                 <Image image={this.state.changerPic[14]} name={this.state.Pictures[14].name} id={this.state.Pictures[14].id} clicked={this.state.Pictures[14].clicked} click={this.handleClick}/>
//                             </td>
//                             <td>
//                                 <Image image={this.state.changerPic[15]} name={this.state.Pictures[15].name} id={this.state.Pictures[15].id} clicked={this.state.Pictures[15].clicked} click={this.handleClick}/>
//                             </td>
//                             <td>
//                                 <Image image={this.state.changerPic[0]} name={this.state.Pictures[0].name} id={this.state.Pictures[0].id} clicked={this.state.Pictures[0].clicked} click={this.handleClick}/>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
                        
                        
                        
                        
//             </div>
//         )
//     }
// }
// export default MemoryGame;


import React from 'react';
import Pictures from './Pictures.json';
import Image from './Image'
import './main.css'
import Square from './square.jpg'

class MemoryGame extends React.Component {
    state = {
        Pictures,
        changerPic:[Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square],
        turn:0,
        current:Square,
        currentId:null,
        result:0,
        tries:0,
        min:Infinity,
        timerflag:0
    }

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        // this.win = this.win.bind(this)
        this.reset = this.reset.bind(this)
    }

    shuffleArray(array) { //Also change id in 'Pictuers'
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            if(array[i] != array[j]) {
                array[i].id = j+1;
                array[j].id = i+1 ;
                [array[i], array[j]] = [array[j], array[i]];
            }
                
        }
        return array
    }

    // win() {
    //     if(this.state.result === 8) {
    //         this.setState({min:Math.min(this.state.min, this.state.tries)})
    //         this.state.Pictures.clicked = false;
    //     }
    // }

    reset() {
        const array = this.shuffleArray(this.state.Pictures)
        this.setState({min:Math.min(this.state.min, this.state.tries),changerPic:[Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square,Square],
            result:0,tries:0, Pictures:array})
        
    }


    handleClick(event, id, clicked) {
        if(this.state.timerflag === 0) {
            // this.win() //only check if won one click  after winning NEED FIX

            this.state.changerPic[id-1] = this.state.Pictures[id-1].image
            let items = [this.state.changerPic];
            this.setState({items});

            if(this.state.turn === 0 ) {
                let pic = this.state.Pictures[id-1].image
                let Id = this.state.Pictures[id-1].id
                this.setState({turn:1, current:pic, currentId:Id}) 
            } else {
                if(this.state.current === this.state.Pictures[id-1].image) {  
                    
                    this.setState({result:this.state.result+1})
                    // update [icture that from now on it shoud be visible]
                    this.state.Pictures[id-1].clicked = true; 
                    this.state.Pictures[this.state.currentId -1].clicked = true;

                    //set the two picturesfor render ON
                    this.state.changerPic[id-1] = this.state.Pictures[id-1].image
                    let items = [this.state.changerPic];
                    this.setState({items});
                } else {
                    this.setState({timerflag:1})
                    setTimeout(()=>{
                        this.state.changerPic[id-1] = Square
                        this.state.changerPic[this.state.currentId -1] = Square
                        let items = [this.state.changerPic];
                        this.setState({items});
                        this.setState({timerflag:0})
                    }, 1000)
                    
        
                }
                this.setState({turn:0, current:''}) 
            }
            this.setState({tries:this.state.tries+1})
        }
    }
        
    



    render() {
        return (
            <div>
                <div className='gametable'>
                    <h2 style={{color:'green'}}>clicks:{this.state.tries} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; best:{this.state.min} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                    <table border={1} >
                        <tbody>
                            <tr>
                                <td>
                                    <Image image={this.state.changerPic[1]} name={this.state.Pictures[1].name} id={this.state.Pictures[1].id} clicked={this.state.Pictures[1].clicked} click={this.handleClick}/>
                                </td>
                                <td>
                                    <Image image={this.state.changerPic[2]} name={this.state.Pictures[2].name} id={this.state.Pictures[2].id} clicked={this.state.Pictures[2].clicked} click={this.handleClick}/> 
                                </td>
                                <td>
                                    <Image image={this.state.changerPic[3]} name={this.state.Pictures[3].name} id={this.state.Pictures[3].id} clicked={this.state.Pictures[3].clicked} click={this.handleClick}/>
                                </td>
                                <td>
                                    <Image image={this.state.changerPic[4]} name={this.state.Pictures[4].name} id={this.state.Pictures[4].id} clicked={this.state.Pictures[4].clicked} click={this.handleClick}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Image image={this.state.changerPic[5]} name={this.state.Pictures[5].name} id={this.state.Pictures[5].id} clicked={this.state.Pictures[5].clicked} click={this.handleClick}/>
                                </td>
                                <td>
                                    <Image image={this.state.changerPic[6]} name={this.state.Pictures[6].name} id={this.state.Pictures[6].id} clicked={this.state.Pictures[6].clicked} click={this.handleClick}/>
                                </td>
                                <td>
                                    <Image image={this.state.changerPic[7]} name={this.state.Pictures[7].name} id={this.state.Pictures[7].id} clicked={this.state.Pictures[7].clicked} click={this.handleClick}/>
                                </td>
                                <td>
                                    <Image image={this.state.changerPic[8]} name={this.state.Pictures[8].name} id={this.state.Pictures[8].id} clicked={this.state.Pictures[8].clicked} click={this.handleClick}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Image image={this.state.changerPic[9]} name={this.state.Pictures[9].name} id={this.state.Pictures[9].id} clicked={this.state.Pictures[9].clicked} click={this.handleClick}/>
                                </td>
                                <td>
                                    <Image image={this.state.changerPic[10]} name={this.state.Pictures[10].name} id={this.state.Pictures[10].id} clicked={this.state.Pictures[10].clicked} click={this.handleClick}/>
                                </td>
                                <td>
                                    <Image image={this.state.changerPic[11]} name={this.state.Pictures[11].name} id={this.state.Pictures[11].id} clicked={this.state.Pictures[11].clicked} click={this.handleClick}/>
                                </td>
                                <td>
                                    <Image image={this.state.changerPic[12]} name={this.state.Pictures[12].name} id={this.state.Pictures[12].id} clicked={this.state.Pictures[12].clicked} click={this.handleClick}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Image image={this.state.changerPic[13]} name={this.state.Pictures[13].name} id={this.state.Pictures[13].id} clicked={this.state.Pictures[13].clicked} click={this.handleClick}/>
                                </td>
                                <td>
                                    <Image image={this.state.changerPic[14]} name={this.state.Pictures[14].name} id={this.state.Pictures[14].id} clicked={this.state.Pictures[14].clicked} click={this.handleClick}/>
                                </td>
                                <td>
                                    <Image image={this.state.changerPic[15]} name={this.state.Pictures[15].name} id={this.state.Pictures[15].id} clicked={this.state.Pictures[15].clicked} click={this.handleClick}/>
                                </td>
                                <td>
                                    <Image image={this.state.changerPic[0]} name={this.state.Pictures[0].name} id={this.state.Pictures[0].id} clicked={this.state.Pictures[0].clicked} click={this.handleClick}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="gamebutton">
                       <button onClick={this.reset} style={{height:80, width:80, marginLeft:285}}>reset</button>
                </div>
            </div>
                            
        )
    }
}
export default MemoryGame;