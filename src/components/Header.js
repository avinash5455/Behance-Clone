import React from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import { IoClose, IoSearchSharp } from 'react-icons/io5';
import { adobeLogo, behance_logo } from '../Data';
import SearchBar from './SearchBar';
import TagMenu from './TagMenu';

const openMenu = () => {
    const main_header = document.getElementById('header');
    main_header.classList.toggle('menuopen');
};

const closeMenu = () => {
    openMenu();
};

const Header = ({ setSortedItems }) => {
    return (
        <header className='header' id='header'>
            {/* for mobile view */}
            <div id='menu' className='menu duration-300 bg-white lg:hidden shadow-lg w-[70%] h-[100%] fixed left-0 top-0 p-5 z-20'>
                <div className='text-3xl absolute right-3 cursor-pointer text-[#333]' onClick={closeMenu}>
                    <IoClose />
                </div>
                <ul className=''>
                    <li className='m-3 font-medium text-md'>
                        <a href="https://www.behance.net/for_you/onboarding?tracking_source=nav20" target="_blank" rel="noopener noreferrer">For you</a>
                    </li>
                    <li className='m-3 font-medium text-md'>
                        <a href="https://www.behance.net/galleries?tracking_source=nav20" target="_blank" rel="noopener noreferrer">Discover</a>
                    </li>
                    <li className='m-3 font-medium text-md'>
                        <a href="https://www.behance.net/hire?tracking_source=nav20" target="_blank" rel="noopener noreferrer">Hire</a>
                    </li>
                    <li className='m-3 font-medium text-md'>
                        <a href="https://www.behance.net/assets?tracking_source=nav20" target="_blank" rel="noopener noreferrer">Assets</a>
                    </li>
                    <li className='m-3 font-medium text-md'>
                        <a href="https://www.behance.net/joblist?tracking_source=nav20" target="_blank" rel="noopener noreferrer">Jobs</a>
                    </li>
                </ul>
            </div>

            <div className='border-b fixed w-full top-0 bg-white z-10'>
                <div className='container-fluid'>
                    <div className='top-header py-4 lg:py-3 px-5 border-b border'>
                        <div className='navbar flex items-center justify-between'>
                            {/* For Desktop view */}
                            <div className='brand-logo flex items-center'>
                                <div className='phone-menu pr-3 text-2xl cursor-pointer block lg:hidden' onClick={openMenu}>
                                    <CgMenuLeft />
                                </div>
                                <img src={behance_logo} alt={behance_logo} className='w-auto h-4' />
                                <div className='page-links lg:ml-8 hidden lg:block'>
                                    <ul className='flex items-center'>
                                        <li className='m-3 font-medium text-md'>
                                            <a href="https://www.behance.net/for_you/onboarding?tracking_source=nav20" target="_blank" rel="noopener noreferrer">For you</a>
                                        </li>
                                        <li className='m-3 font-medium text-md'>
                                            <a href="https://www.behance.net/galleries?tracking_source=nav20" target="_blank" rel="noopener noreferrer">Discover</a>
                                        </li>
                                        <li className='m-3 font-medium text-md'>
                                            <a href="https://www.behance.net/hire?tracking_source=nav20" target="_blank" rel="noopener noreferrer">Hire</a>
                                        </li>
                                        <li className='m-3 font-medium text-md'>
                                            <a href="https://www.behance.net/assets?tracking_source=nav20" target="_blank" rel="noopener noreferrer">Assets</a>
                                        </li>
                                        <li className='m-3 font-medium text-md'>
                                            <a href="https://www.behance.net/joblist?tracking_source=nav20" target="_blank" rel="noopener noreferrer">Jobs</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='hidden lg:block'>
                                <div className='action-area flex items-center'>
                                    <div className='login-btn rounded-full border px-4 py-1 border-[#dee8ff]'>
                                        <a href="https://auth.services.adobe.com/en_US/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FBehanceWebSusi1%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.behance.net%252F%253Fisa0%253D1%2523old_hash%253D%2526from_ims%253Dtrue%2526client_id%253DBehanceWebSusi1%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Cgnav%252Csao.cce_private%252Ccreative_cloud%252Ccreative_sdk%252Cbe.pro2.external_client%252Cadditional_info.roles%26state%3D%257B%2522ac%2522%253A%2522behance.net%2522%252C%2522csrf%2522%253A%2522bbd5710d-6288-456a-ae9d-bb20aeb5bc75%2522%252C%2522context%2522%253A%257B%2522intent%2522%253A%2522signIn%2522%257D%252C%2522jslibver%2522%253A%2522v2-v0.41.0-12-g3caf235%2522%252C%2522nonce%2522%253A%25222466400856346834%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=BehanceWebSusi1&scope=AdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&state=%7B%22ac%22%3A%22behance.net%22%2C%22csrf%22%3A%22bbd5710d-6288-456a-ae9d-bb20aeb5bc75%22%2C%22context%22%3A%7B%22intent%22%3A%22signIn%22%7D%2C%22jslibver%22%3A%22v2-v0.41.0-12-g3caf235%22%2C%22nonce%22%3A%222466400856346834%22%7D&relay=4e344092-f9ea-4a2d-b6b8-5984961b3627&locale=en_US&flow_type=token&dctx_id=bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5&idp_flow_type=login&s_p=google%2Cfacebook%2Capple%2Cmicrosoft&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fwww.behance.net%2F%3Fisa0%3D1%23old_hash%3D%26from_ims%3Dtrue%26client_id%3DBehanceWebSusi1%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&use_ms_for_expiry=true#/" className='text-[#0057ff] font-medium text-md'>Login</a>
                                    </div>
                                    <div className='login-btn mx-4 rounded-full border px-4 py-1 border-[#dee8ff] bg-[#0057ff]'>
                                        <a href="https://auth.services.adobe.com/en_US/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FBehanceWebSusi1%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.behance.net%252F%253Fisa0%253D1%2523old_hash%253D%2526from_ims%253Dtrue%2526client_id%253DBehanceWebSusi1%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Cgnav%252Csao.cce_private%252Ccreative_cloud%252Ccreative_sdk%252Cbe.pro2.external_client%252Cadditional_info.roles%26state%3D%257B%2522ac%2522%253A%2522behance.net%2522%252C%2522csrf%2522%253A%2522bbd5710d-6288-456a-ae9d-bb20aeb5bc75%2522%252C%2522context%2522%253A%257B%2522intent%2522%253A%2522signIn%2522%257D%252C%2522jslibver%2522%253A%2522v2-v0.41.0-12-g3caf235%2522%252C%2522nonce%2522%253A%25222466400856346834%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=BehanceWebSusi1&scope=AdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&state=%7B%22ac%22%3A%22behance.net%22%2C%22csrf%22%3A%22bbd5710d-6288-456a-ae9d-bb20aeb5bc75%22%2C%22context%22%3A%7B%22intent%22%3A%22signIn%22%7D%2C%22jslibver%22%3A%22v2-v0.41.0-12-g3caf235%22%2C%22nonce%22%3A%222466400856346834%22%7D&relay=4e344092-f9ea-4a2d-b6b8-5984961b3627&locale=en_US&flow_type=token&dctx_id=bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5&idp_flow_type=login&s_p=google%2Cfacebook%2Capple%2Cmicrosoft&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fwww.behance.net%2F%3Fisa0%3D1%23old_hash%3D%26from_ims%3Dtrue%26client_id%3DBehanceWebSusi1%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&use_ms_for_expiry=true#/" className='text-white font-medium text-md'>Sign Up</a>
                                    </div>
                                    <div className='notification-btn text-2xl text-[#333] cursor-pointer px-3 py-1'>
                                        <i className='icon notification-icon'></i>
                                    </div>
                                    <div className='profile-menu flex items-center ml-4 cursor-pointer'>
                                        <div className='profile-img'>
                                            <img src={adobeLogo} alt={adobeLogo} className='w-8 h-8 rounded-full object-cover' />
                                        </div>
                                        <div className='ml-2'>
                                            <p className='font-medium text-sm'>Username</p>
                                            <p className='text-xs text-gray-500'>@username</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* For mobile view */}
                            <div className='block lg:hidden'>
                                <div className='search-icon text-2xl text-[#333] cursor-pointer'>
                                    <IoSearchSharp />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main-header px-5 py-4 flex items-center'>
                        <div className='w-full'>
                            <SearchBar setSortedItems={setSortedItems} />
                            <TagMenu setSortedItems={setSortedItems} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
