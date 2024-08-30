import React, { useState, useRef } from 'react';
import Genrate from './Genrate';

const Catogories = () => {
    const [itemActive, setItemActive] = useState('');
    const [categorie, setCategorie] = useState('');
    const [mood, setMood] = useState('');
    const [socialMedia, setSocialMedia] = useState('');
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    /* categories */
    const categories = [
        "Food", "Travel", "Events", "Fashion", "Lifestyle", "Fitness", "Beauty", "Technology", "Business", "Entertainment", "Sports", "Nature", "Art", "Education", "Health", "Home & Garden", "Music", "Photography", "Pets", "Quotes"
    ];

    /* moods */
    const Moods = [
        { "mood": "Happy", "emoji": "😊" }, { "mood": "Sad", "emoji": "😢" }, { "mood": "Excited", "emoji": "😃" }, { "mood": "Motivational", "emoji": "💪" }, { "mood": "Inspirational", "emoji": "🌟" }, { "mood": "Funny", "emoji": "😂" }, { "mood": "Romantic", "emoji": "❤️" }, { "mood": "Reflective", "emoji": "🤔" }, { "mood": "Sarcastic", "emoji": "🙃" }, { "mood": "Grateful", "emoji": "🙏" }, { "mood": "Proud", "emoji": "🏆" }, { "mood": "Relaxed", "emoji": "😌" }, { "mood": "Energetic", "emoji": "⚡" }, { "mood": "Serious", "emoji": "😐" }
    ];

    /* social media */
    const SocialMedia = [
        { "SocialMedia": "Instagram", "icon": "📷" }, { "SocialMedia": "Twitter", "icon": "🐦" }, { "SocialMedia": "Facebook", "icon": "📘" }, { "SocialMedia": "LinkedIn", "icon": "💼" }, { "SocialMedia": "Pinterest", "icon": "📌" }, { "SocialMedia": "Snapchat", "icon": "👻" }, { "SocialMedia": "TikTok", "icon": "🎵" }, { "SocialMedia": "YouTube", "icon": "📺" }, { "SocialMedia": "Tumblr", "icon": "🌀" }, { "SocialMedia": "Reddit", "icon": "👽" }
    ];

    const categoriesbtn = (item) => {
        setItemActive(item);
        setCategorie(item);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <>
            <div className='w-full h-auto mt-8'>
                <div className='w-full flex justify-center items-center gap-2'>
                    <h1 className='text-center text-3xl font-extrabold'>Craft Your Ideal Caption</h1>
                    <span className='text-[30px]'>&#128536;</span>
                </div>

                {/* categories */}
                <div className='w-full h-auto flex justify-center gap-2'>
                    <div className='xl:w-[70%] lg:w-[80%] md:w-[85%] sm:w-[90%] w-[95%] h-auto flex flex-col gap-2'>
                        <p className='font-bold pl-2'>Select Categories</p>
                        <div
                            ref={sliderRef}
                            className="w-full h-auto overflow-x-scroll flex gap-2 scrollbar-hide hideScroll p-2"
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                        >
                            {categories.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => categoriesbtn(item)}
                                    className={`py-2 px-4 rounded-md whitespace-nowrap bg-[#BEC6A0] ${itemActive === item ? 'bg-black text-white' : ''} font-semibold cursor-pointer hover:bg-black hover:text-white`}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* drop down */}
                <div className='w-full h-auto flex justify-center'>
                    <div className='xl:w-[70%] lg:w-[80%] md:w-[85%] sm:w-[90%] w-[95%] h-auto pl-2 flex gap-2'>
                        {/* Mood */}
                        <div className='p-2 rounded-md bg-[#D6E8DB]'>
                            <select
                                onChange={(e) => setMood(e.target.value)}
                                className='w-full h-full bg-transparent cursor-pointer text-black font-bold outline-0 appearance-none'
                            >
                                <option value="volvo">Select Mood</option>
                                {Moods.map((moods, index) => (
                                    <option className='text-center' key={index} value={moods.mood}>
                                        {moods.mood} {moods.emoji}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Social media */}
                        <div className='p-2 rounded-md bg-[#D6E8DB]'>
                            <select
                                onChange={(e) => setSocialMedia(e.target.value)}
                                className='w-full h-full bg-transparent cursor-pointer text-black font-bold outline-0 appearance-none'
                            >
                                <option value="volvo">Select Social Media</option>
                                {SocialMedia.map((social, index) => (
                                    <option className='text-center' key={index} value={social.SocialMedia}>
                                        {social.SocialMedia} {social.icon}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <Genrate
                categorie={categorie}
                mood={mood}
                socialMedia={socialMedia}
            />
        </>
    );
}

export default Catogories;
