import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I use CaptionNest?",
      answer:
        "Simply select a category, choose a mood, and pick the social media platform. Our tool will generate the perfect caption for you instantly!",
    },
    {
      question: "Can I customize the generated captions?",
      answer:
        "Yes, you can easily edit any generated caption to better fit your specific needs.",
    },
    {
      question: "Is CaptionNest free to use?",
      answer:
        "Yes, our basic features are free. We also offer premium options with advanced functionalities.",
    },
    {
      question: "Which social media platforms are supported?",
      answer:
        "CaptionNest supports captions for a variety of platforms including Instagram, Facebook, Twitter, LinkedIn, and more. You can select the platform you want to tailor your caption to.",
    },
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 mt-12">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <svg
              className={`w-5 h-5 transform ${openIndex === index ? "rotate-180" : ""
                } transition-transform duration-300`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
