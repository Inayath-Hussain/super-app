import { useEffect, useState } from "react";
import { IFormState } from "@/pages/registeration/registeration";
import { ICategories } from "@/pages/category/category";
import { getUserData } from "@/localStorage/signUp"
import { getSavedCategories } from "@/localStorage/categories"
import profileImg from "@/assets/profileImg.png"
import "./profileCard.scss"

const ProfileCard = () => {
    const [userData, setUserData] = useState<IFormState | null>(null)
    const [savedCategories, setSavedCategories] = useState<ICategories[] | null>(null)

    useEffect(() => {
        setUserData(getUserData())
        setSavedCategories(getSavedCategories())
    }, [])

    return (
        <div className="profile-card">
            <img src={profileImg} alt="profileImg" />

            <div className="profile-info">
                <div className="user-data">
                    <p className="name" title={userData?.name}>{userData?.name}</p>
                    <p className="email" title={userData?.email}>{userData?.email}</p>
                    <p className="userName" title={userData?.userName}>{userData?.userName}</p>
                </div>

                <div className="categories">
                    {savedCategories?.map(c => (
                        <p key={c}>{c}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;