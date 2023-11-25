import BannerImg from '../../assets/registeration.png'
import './banner.scss'

const RegisterationBanner = () => {
    return (
        <div className='banner-container'>
            <img src={BannerImg} alt="" />
            <p>Discover new things on <br />
                Superapp</p>
        </div>
    );
}

export default RegisterationBanner;