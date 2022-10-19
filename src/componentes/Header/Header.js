import './Header.css'
import {AiOutlineSearch, AiFillHome}  from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
import { IconContext } from 'react-icons/lib/esm/iconContext'

export function Header () {

    return (
        <header className="header" >

            <div className="container">

                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                <div className="input-icon">
                <IconContext.Provider value={ {color: '#8e8e8e'} }>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    <input placeholder=' Pesquisar' />
                </div>

                <div className='menu-icons'>
                    <IconContext.Provider value={ {size: '26px'} }>

                    <div>
                            <AiFillHome />
                        </div>

                        
                        <div>
                            <img className='icon'src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFfUlEQVRoge2Ze2wUVRTGf3d229JKEDUIKY2Clnb7oKUpjzQ8A0ZBDUEDKhJNDFEx/GV8RBITMTER3yTGGENCeJYEFcSg8VFMRYSg1nappVtKJGkR5SWWh1C6nesft7uZvTuzM7O7FIl+yU135t7vnO/0vs8I/gWQpTXzEXI5MAvI1apPI8QOzP7XRceBDp0rBkWhA2RJ9WgMsRmY6aF5FFjNqOErRGNjNPbyqgUgQ+PHQ+ALoNAn9SvO5y8QR/ddhKsUgKysHEk0+ANwi+X1GQQN9gSqgFLLmy1EWpYIkMEsacoDpgIzgBqgBBgJDAWOaM4hGnhPEw/wk2hvecDOuAxNeEOzsZjS6s/pCG/KNIBqYDmwELjBoU19gpjyqimY4v6kVkJ0A8jiqiKCxt02fvT2r8iKiq3pBlAOvAnMxX0Yfp3wZAYeA5nMkbILgIAxE/jAg4ZbiebNNjw0tCIXeBUIA/NwF98/0Naq9F7blkIcBcCQRUAbiG+A4ymtC3mPnwAKge+BFwC7njsLfAwsBWqBEcAQ4EJcem1tATDa1ro0uwEoCL4rIi2VItI8h8i40Uied5YkS7yuQiHgS5InHsAB4GVgJ3A5lRFZWjUWYfzqUL2EQN9H9AUnEBCzEKJJHGzeBSBDE+qBxTacsJceuB1osBH/G/AgatXZ5iYegGB/T4razfTn/IUh9iJ5DVM2yFCN2uAk2x04PW4BDAU+JbnbvwMmAVsB01V4DG1tZ7AMKRvkA4H4k5BT1F/HXut2C2ANasWxYi0wG/jdhZsEAdJhszoBxkRV2G9hqJXJlDc7mGxIFcB84CHt3U7gCdS5JD1Ittq8HYGI9orIz00EWIZgB5LVGJe3AWCYc2w4FzEDO50mcRA4CIyzvGsBppF6CLhCsihAqDMMVCRUCNoxcmaLth//SGhfVnMHUn5G0ilVrhKR8AqnAB4BNiT4VUeFfZmIjxsrr5qOaewCcrSq88B64ABSGMAshFyIdV4odBDNmywO7z/rFMBeoM7yvBF4NAva45BlNUuRcg3+D5SnQE4VkfAhHMjFQKfl2UQNJaeVIG3Isur7kGIDarXzANGKGV0gDrXGtdhN4ju150b8i1+JOs/ot6tEOe3h7UTNMoRYS+p95ATIZ4iem2QVD/Y9oO96zwJvedMNKPEvDfzehzqpHnMjydtqryfPnAdUIGURkr+BYwixh0jxHsGH/V4FNKMmbaxM8yleauUYifMJXHomU5zSBIz0yLMTHyu9qP2jDrV7n0P10pBsCo+hV3Oe54GTSnyq8pQPXZXAai8NL2lO3Lo7XfErPWgJAuuAwwOcS14COKk5SjWErOKjqOFRhxouek/6FQ/qDmLlnfBCatJIM1zE9wBvA2O0+jrUBE5XPKh8kZXb5IW0yYPDlahsw9PAsBS2ClG7ejriAZ7TtGz0QlqmkVq1+ruARSSfT5yQi9rU/IoH2K1pedILaSzq+GAl6neCwcA4TYdJ8jB1hB752isg0A3rNA27/ZAXa+Q+VKZhsDCd5FHwsB8DAaBdMxAGCrIq0x4FwC+a74N4n3NxzNWMSGAL9ifYbCGIurbqfuema3C9jbE1XJkgAg7+1mdi9DpU4ko3Wp+KlAYKUfcO3U/rgIaMMAbosjGeDRio5NhxG/td+Fg23VBs48CKfPzdbXNQwvXJGitHUN8Ysgq7AIYBLwKnUYmuDajvBZOBIlRgOahE70TgcVQa8qyDcIlKII/Ktni7AGLCvR6f3cplVJI4W1+NXAPIVjGBT9A/Q10DAZwE3kfP0PlENrrrT+Ad4FtUxnoK6nvCjcBNqPX9Aiod34lKUTaiMhZ9WfDvGfp/sAdYBQwfTBGZ4JoVHsM1KzyGVFfH//GfxT9H5j/Fb280ngAAAABJRU5ErkJggg=='/>
                        </div>

                        <div>
                            <BsPlusSquare />
                        </div>

                        <div>
                            <MdOutlineExplore />
                        </div>

                        <div>
                            <FiHeart />
                        </div>

                    </IconContext.Provider>
                    
                    <img className='img-user' src="https://i.ibb.co/BrsgFmJ/euprint.png"/>
                </div>
                
            </div>
        </header>
    )
}