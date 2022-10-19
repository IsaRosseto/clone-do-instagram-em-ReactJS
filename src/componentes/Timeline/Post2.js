import './Timeline.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io' ;
import { BsChat } from 'react-icons/bs' ;
import { FiSend } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { BsEmojiSmile } from 'react-icons/bs'; 

export function Post2 () {
    return (

        <div className='post2'>
            <header className='header-post'>
                
                <div className="info-post">
                    <img className="img-header-post" src="https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/299540841_5287506741363408_3332998551982998002_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHReq1aAebTVU8n16FDldqI3rNKf8ah2CHes0p_xqHYIZmLZsZrYC0Im6SkSyc2k-3b2pBdk4hWoHpNnY_v5JSt&_nc_ohc=FLLJ9bbCKOIAX8Mu6CD&_nc_ht=scontent-gru2-2.xx&oh=00_AT-ox3Hn9r-oJ9ngpspT41uAwyRiiUqSVhY_GYE8Hi3B_w&oe=63517F39" />
                <p>gab.augustoz</p>  
                </div>

                <FiMoreHorizontal />

            </header>

            <div className='img-post'>
                <img src='https://media.discordapp.net/attachments/996173494062686341/1031599959994290176/unknown-1.png?width=554&height=473' />
            </div>

            <div className='footer-post'>
                <IconContext.Provider value={{size: "25px"}}>

                <section className='engagement-post'>
                    <div className='icons-1'>
                        <button className='icon2'> <IoMdHeartEmpty /> </button>
                        <div className='icon'> <BsChat/> </div>
                        <div className='icon'> <FiSend /> </div>
                    </div>
                         <div className='icon'> <BsBookmark /> </div>
                </section>
                </IconContext.Provider>

                <section className='like'>
                    <span> 352 curtidas </span>
                </section>

                <div className='legenda'>
                    <p> 
                        <strong> gab.augustoz </strong>Esse é o momento exato onde a criança apaga todas as atividades da Equipe 3 e 5. Não passarei outras ;)
                    </p>
                </div>

                
            
                <div className='comentarios'>

                     <span>
                        <p className='todos'>Ver todos os 22 comentarios</p>
                    </span>

                    <span>
                        <strong>sskahj</strong><p> A maya é a melhor!</p>
                    </span>

                    <span>
                    <strong>carmosz_ </strong><p>😂😂😂</p>
                    </span>


                </div>
                
                <div className='tempo-post'>
                    <time> Há 23 minutos</time>
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

    )
}