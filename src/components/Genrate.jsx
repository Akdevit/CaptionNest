import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Genrate = ({ categorie, mood, socialMedia }) => {
    const [rangeActive, setRangeActive] = useState()
    const [lang, setLang] = useState('English')
    const [ranges, setRanges] = useState('')
    const [userinput, setUserinput] = useState('')
    const [keyword, setKeyword] = useState('')
    const [countCaption, setCountCaption] = useState(4)
    // console.log(keyword)
    const [captiondata, setCaptiondata] = useState([])
    const [ailoading, setAiloading] = useState(false)

    const languages = [
        { "name": "English", "code": "en" },
        { "name": "Hindi", "code": "hi" },
        { "name": "Abkhaz", "code": "ab" },
        { "name": "Afar", "code": "aa" },
        { "name": "Afrikaans", "code": "af" },
        { "name": "Akan", "code": "ak" },
        { "name": "Albanian", "code": "sq" },
        { "name": "Amharic", "code": "am" },
        { "name": "Arabic", "code": "ar" },
        { "name": "Aragonese", "code": "an" },
        { "name": "Armenian", "code": "hy" },
        { "name": "Assamese", "code": "as" },
        { "name": "Avar", "code": "av" },
        { "name": "Avestan", "code": "ae" },
        { "name": "Aymara", "code": "ay" },
        { "name": "Azerbaijani", "code": "az" },
        { "name": "Bashkir", "code": "ba" },
        { "name": "Basque", "code": "eu" },
        { "name": "Belarusian", "code": "be" },
        { "name": "Bengali", "code": "bn" },
        { "name": "Bislama", "code": "bi" },
        { "name": "Bosnian", "code": "bs" },
        { "name": "Breton", "code": "br" },
        { "name": "Bulgarian", "code": "bg" },
        { "name": "Burmese", "code": "my" },
        { "name": "Catalan", "code": "ca" },
        { "name": "Cebuano", "code": "ceb" },
        { "name": "Chichewa", "code": "ny" },
        { "name": "Chinese (Mandarin)", "code": "zh" },
        { "name": "Church Slavonic", "code": "cu" },
        { "name": "Chuvash", "code": "cv" },
        { "name": "Cornish", "code": "kw" },
        { "name": "Corsican", "code": "co" },
        { "name": "Cree", "code": "cr" },
        { "name": "Croatian", "code": "hr" },
        { "name": "Czech", "code": "cs" },
        { "name": "Danish", "code": "da" },
        { "name": "Divehi", "code": "dv" },
        { "name": "Dutch", "code": "nl" },
        { "name": "Dzongkha", "code": "dz" },
        { "name": "Esperanto", "code": "eo" },
        { "name": "Estonian", "code": "et" },
        { "name": "Ewe", "code": "ee" },
        { "name": "Fijian", "code": "fj" },
        { "name": "Finnish", "code": "fi" },
        { "name": "French", "code": "fr" },
        { "name": "Fula", "code": "ff" },
        { "name": "Galician", "code": "gl" },
        { "name": "Georgian", "code": "ka" },
        { "name": "German", "code": "de" },
        { "name": "Ganda", "code": "lg" },
        { "name": "Greek", "code": "el" },
        { "name": "Guarani", "code": "gn" },
        { "name": "Gujarati", "code": "gu" },
        { "name": "Haitian Creole", "code": "ht" },
        { "name": "Hausa", "code": "ha" },
        { "name": "Hebrew", "code": "he" },
        { "name": "Herero", "code": "hz" },
        { "name": "Hmong", "code": "hmn" },
        { "name": "Hungarian", "code": "hu" },
        { "name": "Ibanag", "code": "ib" },
        { "name": "Icelandic", "code": "is" },
        { "name": "Igbo", "code": "ig" },
        { "name": "Indonesian", "code": "id" },
        { "name": "Interlingua", "code": "ia" },
        { "name": "Inuktitut", "code": "iu" },
        { "name": "Irish", "code": "ga" },
        { "name": "Italian", "code": "it" },
        { "name": "Japanese", "code": "ja" },
        { "name": "Javanese", "code": "jv" },
        { "name": "Kalaallisut", "code": "kl" },
        { "name": "Kannada", "code": "kn" },
        { "name": "Kazakh", "code": "kk" },
        { "name": "Khmer", "code": "km" },
        { "name": "Kikuyu", "code": "ki" },
        { "name": "Kinyarwanda", "code": "rw" },
        { "name": "Kirmanjki", "code": "kmr" },
        { "name": "Korean", "code": "ko" },
        { "name": "Kurdish", "code": "ku" },
        { "name": "Kyrgyz", "code": "ky" },
        { "name": "Lao", "code": "lo" },
        { "name": "Latin", "code": "la" },
        { "name": "Latvian", "code": "lv" },
        { "name": "Limburgish", "code": "li" },
        { "name": "Lingala", "code": "ln" },
        { "name": "Lithuanian", "code": "lt" },
        { "name": "Luxembourgish", "code": "lb" },
        { "name": "Macedonian", "code": "mk" },
        { "name": "Malagasy", "code": "mg" },
        { "name": "Malay", "code": "ms" },
        { "name": "Malayalam", "code": "ml" },
        { "name": "Maltese", "code": "mt" },
        { "name": "Manx", "code": "gv" },
        { "name": "Mongolian", "code": "mn" },
        { "name": "Nepali", "code": "ne" },
        { "name": "Norwegian", "code": "no" },
        { "name": "Nyanja", "code": "ny" },
        { "name": "Occitan", "code": "oc" },
        { "name": "Oromo", "code": "om" },
        { "name": "Ossetian", "code": "os" },
        { "name": "Pali", "code": "pi" },
        { "name": "Panjabi", "code": "pa" },
        { "name": "Pashto", "code": "ps" },
        { "name": "Persian", "code": "fa" },
        { "name": "Polish", "code": "pl" },
        { "name": "Portuguese", "code": "pt" },
        { "name": "Quechua", "code": "qu" },
        { "name": "Romanian", "code": "ro" },
        { "name": "Russian", "code": "ru" },
        { "name": "Samoan", "code": "sm" },
        { "name": "Sanskrit", "code": "sa" },
        { "name": "Scots Gaelic", "code": "gd" },
        { "name": "Serbian", "code": "sr" },
        { "name": "Sesotho", "code": "st" },
        { "name": "Shona", "code": "sn" },
        { "name": "Sichuan Yi", "code": "ii" },
        { "name": "Sindhi", "code": "sd" },
        { "name": "Sinhala", "code": "si" },
        { "name": "Slovak", "code": "sk" },
        { "name": "Slovenian", "code": "sl" },
        { "name": "Somali", "code": "so" },
        { "name": "Spanish", "code": "es" },
        { "name": "Sundanese", "code": "su" },
        { "name": "Swahili", "code": "sw" },
        { "name": "Swedish", "code": "sv" },
        { "name": "Tajik", "code": "tg" },
        { "name": "Tamil", "code": "ta" },
        { "name": "Tatar", "code": "tt" },
        { "name": "Telugu", "code": "te" },
        { "name": "Thai", "code": "th" },
        { "name": "Tigrinya", "code": "ti" },
        { "name": "Tok Pisin", "code": "tok" },
        { "name": "Tonga", "code": "to" },
        { "name": "Turkish", "code": "tr" },
        { "name": "Turkmen", "code": "tk" },
        { "name": "Twi", "code": "tw" },
        { "name": "Ukrainian", "code": "uk" },
        { "name": "Urdu", "code": "ur" },
        { "name": "Uzbek", "code": "uz" },
        { "name": "Vietnamese", "code": "vi" },
        { "name": "Wolof", "code": "wo" },
        { "name": "Xhosa", "code": "xh" },
        { "name": "Yoruba", "code": "yo" },
        { "name": "Zulu", "code": "zu" }
    ]

    const range = [
        "Short",
        "Medium",
        "long"
    ]
    const setSelectionRange = (range) => {
        // console.log(code.target.value)
        setRangeActive(range)
        setRanges(range)
    }
    /* genreate captions */
    const CaptionGenerate = () => {
        setAiloading(true)
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`;
        const requestData = {
            contents: [
                {
                    parts: [
                        {
                        text: `Create a caption for a ${categorie} post designed
                        for ${socialMedia} with a ${mood} tone. The caption should be in 
                        ${lang} and targeted towards ${userinput}.
                        Include a mix of keywords and relevant hashtags like ${keyword} 
                        to enhance engagement and reach. The length should be ${ranges}.
                        Generate ${countCaption} captions, providing only the captions in the order requested with emojies.`
                        }
                    ]
                }
            ]
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
            .then(response => response.json())
            .then(data => {
                setCaptiondata(data?.candidates[0]?.content?.parts[0]?.text);
                setAiloading(false)
                toast.success('Caption genrated successfully')
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const generateCaption = () => {
        // Create an array of error messages based on the conditions
        const errors = [];

        if (!categorie) errors.push('Please select a category.');
        if (!mood) errors.push('Please select a mood.');
        if (!socialMedia) errors.push('Please select a social media platform.');
        if (!ranges) errors.push('Please select a range.');
        if (!userinput) errors.push('Please enter user input.');
        if (!keyword) errors.push('Please enter a keyword.');

        if (errors.length > 0) {
            // Show the first error message
            toast.error(errors[0]);
        } else {
            // If no errors, proceed with caption generation
            CaptionGenerate();
        }
    };








    return (
        <>
            <div className='w-full h-auto pb-6 mt-12'>
                <div className='w-full h-auto flex justify-center items-center gap-2'>
                    {
                        range.map((item, index) => (
                            <>
                                <button onClick={() => setSelectionRange(item)} key={index} className={`w-[100px] h-[40px] bg-[#C8B6A6] ${rangeActive === item ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded-md`}>{item}</button>
                            </>
                        ))
                    }
                    {/* select number of genrate caption */}
                    <select onChange={(e) => setCountCaption(e.target.value)} className='w-[50px] h-[45px] rounded-md text-center bg-[#EDE9D5] cursor-pointer text-black font-bold outline-0 appearance-none '>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                {/* inputs */}
                <div className='w-full h-auto flex  justify-center items-center gap-2 mt-8'>
                    <div className='xl:w-[30%] lg:w-[50%] md:w-[60%] sm:w-[70%] w-[95%] h-auto  flex flex-col justify-center items-center gap-2'>
                        <div className='w-[100%] h-auto flex gap-2'>
                            {/* user input */}
                            <input onChange={(e) => setUserinput(e.target.value)} className='w-[100%] h-[45px] rounded-md outline-0 p-2 bg-[#E1EEDD] ' type='text' placeholder='Express Your Thoughts Here' />
                            {/* lang */}
                            <select onChange={(e) => setLang(e.target.value)} className='w-[50px] h-[45px] rounded-md p-2 bg-[#EDE9D5] cursor-pointer text-black font-bold outline-0 appearance-none '>
                                {
                                    languages.map((lang, index) => (
                                        <>
                                            <option key={index} value={lang.name}>{lang.name} ({lang.code})</option>
                                        </>
                                    ))
                                }

                            </select>
                        </div>
                        {/* keyword */}
                        <input onChange={(e) => setKeyword(e.target.value)} className='w-[100%] h-[45px] rounded-md outline-0 p-2 bg-[#E1EEDD] ' type='text' placeholder='Enter Hashtags and Keywords' />
                        {/* genrate btn */}

                        <button onClick={generateCaption} className='w-[200px] h-[40px] bg-black text-white rounded-md'>{ailoading ? 'Lodding..' : "Genrate"}</button>


                    </div>

                </div>


                {/* genrated captions */}
                <div className='w-full h-auto flex flex-col justify-center items-center gap-4 mt-8'>
                    <h1 className='text-center font-bold text-3xl'>Your Caption's</h1>
                    <div className='xl:w-[70%] lg:w-[80%] md:w-[80%] sm:w-[90%] w-[95%] h-auto grid grid-cols-1 gap-4'>
                        <div className='p-4 bg-[#E3CAA5] rounded-md cursor-pointer break-words'>
                            <pre className='whitespace-pre-wrap'>{captiondata}</pre>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Genrate
