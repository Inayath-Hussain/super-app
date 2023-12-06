import { useState } from "react"
import { Link } from "react-router-dom";
import profileIcon from "@/assets/profile-icon.png"
import { ICategories } from "../category/category";
import { getSavedCategories } from "@/utilities/localStorage/categories";
import BrowseCategory from "./browseCategory";
import "./browse.scss";
import { homeRoute } from "@/route";

const BrowsePage = () => {
    const [userCategories] = useState<ICategories[] | null>(getSavedCategories());

    if (userCategories === null) throw Error("userCategories is null");

    return (
        <div className="browse-page-layout">

            <div className="icon-and-pic">
                <p>Super app</p>

                <Link to={homeRoute}>
                    <img src={profileIcon} alt="" />
                </Link>
            </div>

            <div className="additional-padding">

                <p className="text">Entertainment according to your choice</p>
                <div className="browse-categories-layout">

                    {userCategories.map(u => (
                        <BrowseCategory categoryName={u} key={u} />
                    ))}

                </div>

            </div>


        </div>
    );
}

export default BrowsePage;