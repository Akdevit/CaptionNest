import React from 'react';

const trendingCaptions = [

    {
        "name": "Summer Vibes Only ☀️🏖️",
        "categories": ["Travel", "Lifestyle", "Events"]
    },
    {
        "name": "Fitness Motivation 💪🏋️",
        "categories": ["Fitness", "Lifestyle", "Health"]
    },
    {
        "name": "Foodie Moments 🍔🍕",
        "categories": ["Food", "Lifestyle"]
    },
    {
        "name": "Tech Trends 💻📱",
        "categories": ["Technology", "Business"]
    },
    {
        "name": "Love and Relationships 💕💑",
        "categories": ["Lifestyle", "Events"]
    },
    {
        "name": "Weekend Getaway 🚗🗺️",
        "categories": ["Travel", "Lifestyle"]
    },
    {
        "name": "Inspirational Quotes ✨📝",
        "categories": ["Motivation", "Lifestyle"]
    },
    {
        "name": "Fashion Forward 👗👠",
        "categories": ["Fashion", "Lifestyle"]
    },
    {
        "name": "Daily Hustle 📈💼",
        "categories": ["Business", "Motivation"]
    },
    {
        "name": "Adventure Awaits 🌍🚀",
        "categories": ["Travel", "Events"]
    },
    {
        "name": "Mindfulness Matters 🧘‍♂️🌿",
        "categories": ["Health", "Lifestyle", "Wellness"]
    },
    {
        "name": "Pet Lovers Unite 🐾❤️",
        "categories": ["Pets", "Lifestyle", "Community"]
    },
    {
        "name": "Artistic Expressions 🎨🖌️",
        "categories": ["Art", "Lifestyle", "Creativity"]
    },
    {
        "name": "Gamer Zone 🎮🕹️",
        "categories": ["Gaming", "Technology", "Entertainment"]
    },
    {
        "name": "DIY Projects 🔨🧶",
        "categories": ["Crafts", "Lifestyle", "Hobbies"]
    },
    {
        "name": "Bookworm's Paradise 📚🧐",
        "categories": ["Books", "Lifestyle", "Education"]
    },
    {
        "name": "Eco-Friendly Living 🌱🌍",
        "categories": ["Environment", "Lifestyle", "Sustainability"]
    },
    {
        "name": "Music Mania 🎵🎤",
        "categories": ["Music", "Entertainment", "Lifestyle"]
    },
    {
        "name": "Home Sweet Home 🏡🛋️",
        "categories": ["Lifestyle", "Home", "Decor"]
    },
    {
        "name": "Financial Freedom 💰📊",
        "categories": ["Finance", "Business", "Motivation"]
    },
    {
        "name": "Cooking Up a Storm 🍳👩‍🍳",
        "categories": ["Food", "Lifestyle", "Cooking"]
    },
    {
        "name": "Self-Care Sundays 🛀🧖‍♀️",
        "categories": ["Health", "Lifestyle", "Wellness"]
    },
    {
        "name": "City Life Chronicles 🏙️🌆",
        "categories": ["Travel", "Lifestyle", "Urban"]
    },
    {
        "name": "Road Trip Ready 🚙🗺️",
        "categories": ["Travel", "Lifestyle", "Adventure"]
    },
    {
        "name": "Crafting Joy 🎁✨",
        "categories": ["Hobbies", "Lifestyle", "Creativity"]
    },
    {
        "name": "Entrepreneur Life 🚀📈",
        "categories": ["Business", "Motivation", "Lifestyle"]
    },
    {
        "name": "Healthy Eating Habits 🥗🍎",
        "categories": ["Health", "Lifestyle", "Food"]
    },
    {
        "name": "Tech Innovations 🚀🤖",
        "categories": ["Technology", "Business", "Innovation"]
    },
    {
        "name": "Travel Tales 🏞️🛩️",
        "categories": ["Travel", "Adventure", "Lifestyle"]
    },
    {
        "name": "The Great Outdoors 🌲⛺",
        "categories": ["Nature", "Lifestyle", "Adventure"]
    }


];

function TrendingCaptions() {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                🔥 Trending Captions 🚀
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingCaptions.map((caption, index) => (
                    <div key={index} className="bg-[#BEC6A0] rounded-lg  p-4 ">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">{caption.name}</h2>
                        <div className="flex flex-wrap space-x-2">
                            {caption.categories.map((category, i) => (
                                <span key={i} className="bg-[#D6E8DB] text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{category}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrendingCaptions;
