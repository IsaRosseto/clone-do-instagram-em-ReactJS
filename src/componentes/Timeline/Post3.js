import './Timeline.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io' ;
import { BsChat } from 'react-icons/bs' ;
import { FiSend } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { BsEmojiSmile } from 'react-icons/bs'; 

export function Post3 () {
    return (

        <div className='post'>
            <header className='header-post'>
                
                <div className="info-post">
                    <img className="img-header-post" src="https://t.ctcdn.com.br/6UDw9yrT86-hAsaXkUWU3nt9wBM=/400x400/smart/filters:format(webp)/i490767.jpeg" />
                <p> Zuck </p>  
                    <img className='verificado' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAE6ElEQVRoge2aT2xUVRTGf+e+saXt1IXEkrIwkfAnkKiVAYOWpOm0JCBQZEEjTGMUowuJGoOJ20l041IM6oaF2AGjC+WPNArtlIQKKEXEmEhC1MSYStGY2GmLQ+ceF8yUYea9mXnTeWgM3/Lce879vrn3nnvufQN38D9GNJF6tas/tTvIMSSowNEDU9tR7QdEVJ8Z7Au/H8Q4gQiIHpiIouYYUJ81XVd0czIW/rzWY/kW0L1/+j7r2KSgRwWOzCxsGh7ulJlce2diMiJIErS5wHXKqnQN9zWeyRnicTUnl0w9LLAZ2BYysv6L7Y2/BCqgKzH1pKIH80zjIhy1ymFH9UcrchxY4OF+xaiuy4gsMkKPKpuAlptkZPtgrPFDP3xCfgVYdG2B6hZVdgrstFL291hgRS4KoFrcqGg74EuA8dM569Du18cHfMf2tYTa911trp/X+Cfg+B2oQmTq9do9A33z/6rUwdcMzGtoWENw5AGc61L/iB+Himagfd/V5nkNDWtQ2aWwpTpuFRM6hOjea9PTZ0aevXeigv7FWHdwcmFGiaDSDroWWA3U1ZpsGWSASwKnLDqC6GhyR/P3hZ1cs1DGyhDoMnBJFbcPDrBCYYUgz6PmB2B5YSfXPaDCoaDZFWJhuOx2dOXk7mU5PEc+vtDWYni9o47e5SWOJePOyVVAx+WG0yi/1YZeabS1GF5cXUfIwMbFIS8R4/OdhrNuDa4C4nGxYjhWS6JuiLQaXsqSz2H9ohCtBctJ4cjHvZJxi+G58Gwm2H3Q1mJ4YWUdTh6DjIW959OMpewtfaXEnvRcdI7oTzag68KqVm/yo2O2qL+x+rNXLNcZ6ExMRrJVZc3hlzyAFTnemZiMuLUVCYgemIgKDOFdEleNashnsUDgZLR/ckNhwy0CuhKpGGoGgLsrIVRB7p5FpHryOTQhfNrZn9qRb5wN15WYelmR/VRYMmxdGuKNjjoireVFrGo17Job+RzqRKQ/mki9ViTAD7YuDfHEshCOgV0rS4uYw7KpCLNhB2ONbwn6FJAu5dAaNmxecjN5lRIRAPm0qvYNxcJv5gxFeTL7ovAJJfZB/umZg1V475s0Z3+1QZGfRNk21Nc0kG90TfQ3Xhb4jBKZqJSIjKXW5K8obEzGmkYLGzxPqu7+1ANW5GKpqBGPzQkU2d45n+ZclWveqD54oi/8nWubl1NGZFG5wKNjlj1fp5nJ4+WYYvJ750AeIKNyv1ebpwCp8Op4YdzydoGI2YFrlG2M483FoxpVAzxe6QBuImqZKlXZtO0jdX1McBVwaum1x/BZSuSLqCX5LFp+T0+vcWtwrUbVak81heiFccu7528cIzUkfwOGHmCk2OwCFXqqHefcmJ3ThvWCqN3qZnedAcdo9L/2rOIQOuXW6f/5sOWF7kSq2xLMRScHVe1O9oUHK+3vqxqduavpDDBTtmP1yKT/nv7Kj4MvAcO9kgJcj/Qa4dtKlk0+qrkPFKWymkH9x/YtQJDCQf4A+QCkV622lXkQuyqiDxl0naB7BMbKxC4L35+YHMPIjJVLKhzCcrjjcsPpeFxmE39nYnKT+0c+mVB0w9COcK7CPRGP6ysnF08/iqFHlC2Ow5d++QTy8NOVmOhUzAC34TNrVXfichiMNScFeRqwgIrqc0GQDxxd/andQf/V4A7+bfwDRzAfTfHE7vwAAAAASUVORK5CYII='/>
                </div>

                <FiMoreHorizontal />

            </header>

            <div className='img-post'>
                <img src='https://pbs.twimg.com/media/ET-_pRuXQAAv-Su.jpg' />
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
                    <span> 227.541 curtidas </span>
                </section>

                <div className='legenda'>
                    <p> 
                        <strong> zuck </strong>Only those who have suffered with this language know how it is 
                    </p>
                </div>

                
            
                <div className='comentarios'>

                     <span>
                        <p className='todos'>Ver todos os  comentarios</p>
                    </span>

                    <span>
                        <strong>elonmusk</strong><p> i like to make money with it</p>
                    </span>

                    <span>
                    <strong> thisisbillgates </strong><p>😂😂😂</p>
                    </span>


                </div>
                
                <div className='tempo-post'>
                    <time> Há 2 horas </time>
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