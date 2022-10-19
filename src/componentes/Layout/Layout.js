import { Story } from '../Story/Story';
import { Timeline } from '../Timeline/Timeline';
import { Sugestao } from '../Sugestao/Sugestao';
import { Post2 } from '../Timeline/Post2';
import { Post3 } from '../Timeline/Post3';
import './Layout.css';


export function Layout ()  {

    return (
        <>

        <div className='Grid'>
        <div className='firstColumn' style={{gridArea: "firstColumn"}}>
            <div className="box">
                <Story />
            </div>

            <div className="box" style={{margin: "20px 0px"}}>
                <Timeline /> 
            </div>

            <div className="box" style={{margin: "20px 0px"}}>
                <Post2 />
            </div>

            <div className="box" style={{margin: "20px 0px"}}>
                <Post3 /> 
            </div>
        </div>
        

        <div className="sugestao" style={{gridArea: "secondColumn"}}>
            <div className='sugestaoBox'>
                <Sugestao />
        </div>
        </div>

        </div>
        </>

    )
}