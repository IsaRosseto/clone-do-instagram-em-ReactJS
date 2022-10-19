import './Timeline.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io' ;
import { BsChat } from 'react-icons/bs' ;
import { FiSend } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { BsEmojiSmile } from 'react-icons/bs';

export function Timeline () {
    return (
        <>

        <div className='post1'>
            <header className='header-post'>
                
                <div className="info-post">
                    <img className="img-header-post" src="https://media.discordapp.net/attachments/996173494062686341/1032339920053870682/unknown.png" />
                <p>Instituto.proa</p>  
                </div>

                <FiMoreHorizontal />

            </header>

            <div className='img-post'>
                <img src='https://media.discordapp.net/attachments/996173494062686341/1032354207044472852/jovens_empregados_Post_para_Instagram_quadrado.png?width=473&height=473' />
            </div>

            <div className='footer-post'>
                <IconContext.Provider value={{size: "25px"}}>

                <section className='engagement-post'>
                    <div className='icons-1'>
                        <img className='icon2' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACDElEQVRIie3VwWoTURTG8f+5ScUKIgg1Tq3v4KILsWnMom5qu+zCRxCiNaigUtSNILhQijvBoiAIXUTaBil0EUzaatBV9RXaRE1AFKyTzBwXWszU3iZpOpvSs7tzvjm/exlmBvZrr5fYGuXziTMefsoICYUe4LOI5nxfHvVmCx8as6vDA/3GmCugyY2swpsI/uPY3NJyS7COjUVK66sPUblk2ZOvoved2cUJgLWRwXuC3rAcQhUmnW7nqkxPe42N6OZkExTAiMqt0ujAYdSIoKltsiIwXl4vKZAONALo6MBpVVmy7L6j8o3ET8zkFzfWprGpKuNhoAARn4uN6wAsMBgGCqBowgqrcCwsGIhZYZTv4bkSmG02dT+FB+tHK6zwKjRWNTA7APtd7jPgVwiuK755YYX7MsWKwPPdVkWZcl7nv1hhgHqXexOksotu1TfRic0X/4P7MsUK6PVdhNO9s7mvTWEAZ64wBTztVBR44swVtnx0W8IA9W4vBbztgF3++SN6eZtN2as6NHTEPbieUzjVnslK3fWSJ+eXq7aI9cQARxcWvkVqMkw7HxZhxUjt3HZoUxigZz6/5nW5Z1Het8AW666XjM28KzcLNoXh7/tdO5QUyFhDQvaA1/yk/+JtlIKURuJ3gNuN9ypMOv2FtNzFb3XWjn76pdH4BZQHf1S5djybf7mTOfu1t+s3aeq3tfMmpCYAAAAASUVORK5CYII='/>
                        <div className='icon'> <BsChat/> </div>
                        <div className='icon'> <FiSend /> </div>
                    </div>
                         <div className='icon'> <BsBookmark /> </div>
                </section>
                </IconContext.Provider>

                <section className='like'>
                    <span> 2004 curtidas </span>
                </section>

                <div className='legenda'>
                    <p> 
                        <strong> instituto.proa </strong> Para alegrar essa semana vamos de mais um #JovensEmpregados! 🥳💙 ...<span className='leiamais'> mais</span>
                    </p>
                </div>

                
            
                <div className='comentarios'>

                     <span>
                        <p className='todos'>Ver todos os 13 comentarios</p>
                    </span>

                    <span>
                        <strong>oviniciuscalo</strong><p> Que Demais Bella!</p>
                    </span>

                    <span>
                    <strong> bancopan </strong><p> Bem-vinda Isa!</p>
                    </span>


                </div>
                
                <div className='tempo-post'>
                    <time> Há 1 DIA </time>
                </div>

                <div className='comentario'>
                    <div className='comentario-fake'>
                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                            <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder='Adicione um cometário...' />
                      
                    </div>

                    <button>Publicar</button>
                    
                </div>
            </div>
            </div>

  


        </>

    )


}