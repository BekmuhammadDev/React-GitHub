import { Link, NavLink } from 'react-router-dom';
import { headerTopNavigation } from '../../../mocks';
import { Container } from '../../containers';
import './style.scss';
import logo from "../../../assets/images/GitHub.png"

import { Button } from '../../ui';


export const Header = () => {
    return (
        <header>
           <Container>
               <nav>
                <Link>
                   <img src={logo} alt='logo' />
                </Link>
                <ul className='nav-list'>
                    {headerTopNavigation.length && headerTopNavigation.map((item)=>
                    <li key={item.title} className='nav-list-item'>
                        <NavLink to={item.link}/>{item.title}<NavLink/>
                    </li>)}
                </ul>

                <ul className='nav-list'>
                    <li>
                       
                    </li>
                    <li>
                        <Button text="Login"/>
                    </li>
                    <li>
                        <Button text="Sign Up"/>
                    </li>
                </ul>
               </nav>
           </Container>

        </header>
    );
};

