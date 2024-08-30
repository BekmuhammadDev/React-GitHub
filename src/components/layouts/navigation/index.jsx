import { NavLink } from 'react-router-dom'
import { Container } from '../../containers'
import"./style.scss"
import { userNavigation } from '../../../mocks'

export const Navigation = () => {
  return (
    <div className='navigation'>
       <Container type="center">
        <ul className='list'>
           {
            userNavigation?.map((item)=>{
                return (
                    <li key={item.title} className='item'>
                        <NavLink to={item.path} className='link'>
                            <i className={item.icon}></i> 
                            <p>{item.title}</p>
                        </NavLink>
                    </li>
                 )
 
            })
           }
        </ul>
       </Container>
    </div>
  )
}
