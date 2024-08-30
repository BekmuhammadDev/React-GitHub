
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/user.context";
import "./style.scss";

export const Profile = () => {


    const {name,avatar_url,company,location,followers,following,bio,login}=useContext(UserContext);

  
    

    
    return (
        <div className="profile">
            <img src={avatar_url} alt="profile avatar" />
            <h1>{name}</h1>
            <p>Frontend Devoleper</p>
            <button>{login}</button>
            <p>{company}</p>
            <p>{bio}</p>
            <div className="flex gap-2 items-center mb-[18px]">
                <Link to="/followers" className="links">
                <i className="bi bi-people"></i>
                <span>{followers}followers</span>
                </Link>

                <Link to="/followings" className="links">
                <span>{following}following</span>
                </Link>

            </div>

            
               <ul>
                <li>
                <i className="bi bi-geo-alt"></i>
                <span>{location}</span>
              
                </li>

                <li>
                <a href="https//bekmuhammad.uz">
                <i className="bi bi-link-45deg"></i>
                <span>Bekmuhammad.uz</span>
                </a>
                </li>


               </ul>
           
        </div>
    );
};

