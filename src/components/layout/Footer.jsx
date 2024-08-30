import React from 'react';
import Icon from '../../images/icon.png';
const Footer = () => {
    return (
        <footer className="bg-gray-100 py-6 mt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Left Section */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <div className='w-auto h-auto flex gap-4 items-center'>
                            <img className='w-[40px] h-[40px]' src={Icon} alt='icon.png'/>
                            <h5 className="text-xl font-bold mb-4">CaptionNest</h5>
                        </div>
                        <p className="text-gray-600">
                            Tailor captions effortlessly for any category, mood, or social media platform to elevate your posts.
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-300 mt-6 pt-4 text-center text-gray-500">
                    <p>&copy; 2024 CaptionNest. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
