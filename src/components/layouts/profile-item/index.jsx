import { useState, useEffect } from "react"
import { userAPI } from "../../../service/user"
import { Button } from "../../ui"
import "./style.scss"

export const ProfileItem = ({user_name}) => {

    const [data, setData] = useState({});


    useEffect(() => {
        userAPI.searchUser(user_name)
            .then((res) => {
                setData(res);

            })
    }, []);




    return (
        <div className='profile-item'>


            <div className="left">
                <img src={data?.avatar_url} alt="avatar" />

                <div className="text">

                    <a href={data?.html_url} target="_blank">
                        <h4>{data?.name}</h4>
                        <p>{data?.bio}</p>
                    </a>

                    <div className="info">
                        <p>
                            <i className="bi bi-buildings"></i>
                            <span>{data?.company}</span>
                        </p>

                        <p>
                            <i className="bi bi-geo-alt"></i>
                            <span>{data?.location}</span>
                        </p>
                    </div>
                </div>
            </div>

            <Button className="text-black px-6" text="Follow" />
        </div>
    )
}
