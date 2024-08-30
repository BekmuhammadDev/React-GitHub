import { Link } from 'react-router-dom';
import { Container } from '../../containers';
import { footerNavigation } from '../../../mocks';
import logo from "../../../assets/images/GitHub.png"
import './style.scss';

export const Footer = () => {
    return (
        <footer>
          <Container type='center'>
            <nav>
                <ul>
                    <li>
                        <a href="https://github.com">
                        <img src={logo} alt="avatar img" />
                        <span>2022 GitHub, Inc.</span></a>
                    </li>
                    {
                        footerNavigation?.map((item)=>
                        <li key={item.link}>
                            <Link to={item.link} className='link'>{item.title}</Link>
                            </li>)
                    }
                </ul>
            </nav>
          </Container>
        </footer>
    );
};

