'use client';
import { act, useReducer, useState } from "react";
const initialChannels = [
    { id: "15", lang: "telugu", name: "Telugu Birds Stories", url1: "https://www.youtube.com/@telugubirdsstories", img: "/images/telugu/Telugu Birds Stories.webp" },
    { id: "17", lang: "telugu", name: "Sitara TV Telugu", url1: "https://www.youtube.com/@Sitaratvtelugu1", img: "/images/telugu/Sitara tv Telugu.webp" },
    { id: "1", lang: "telugu", name: "Anamika TV Atha Kodalu", url1: "https://www.youtube.com/@anamikatvathakodalu", img: "/images/telugu/Anamika tv telugu atha kodal  new logo.webp" },
    { id: "2", lang: "telugu", name: "Anjali TV Atha Kodalu", url1: "https://www.youtube.com/@anjalitvathakodalu", img: "/images/telugu/Anjali logo.webp" },
    { id: "3", lang: "telugu", name: "Avani Stories telugu", url1: "https://www.youtube.com/@avanistoriestelugu", img: "/images/telugu/avni stories.webp" },
    { id: "4", lang: "telugu", name: "PSR Moral Stories Telugu", url1: "https://www.youtube.com/@psrmoralstories", img: "/images/telugu/PSR Moral Stories.webp" },
    { id: "5", lang: "telugu", name: "PSR God stories", url1: "https://www.youtube.com/@psrgodsstories", img: "/images/telugu/PSR Gods Stories.webp" },
    { id: "6", lang: "telugu", name: "PSR Sister Stories", url1: "https://www.youtube.com/@psrsisterstories", img: "/images/telugu/PSR Moral Stories Telugu.webp" },
    { id: "8", lang: "telugu", name: "PSR Birds", url1: "https://www.youtube.com/@psrbirdstelugu", img: "/images/telugu/PSR birds Telugu.webp" },
    { id: "9", lang: "telugu", name: "Stories Dunia", url1: "https://www.youtube.com/@storiesduniatelugu", img: "/images/telugu/storiesDunia.png" },
    { id: "10", lang: "telugu", name: "Best moral stories", url1: "https://www.youtube.com/@bestmoralstoriestelugu", img: "/images/telugu/BM Logo_Final.webp" },
    { id: "11", lang: "telugu", name: "Jabilli Kathalu", url1: "https://www.youtube.com/@Jabillikathal", img: "/images/telugu/jabilli kathalu.webp" },
    { id: "12", lang: "telugu", name: "Bommala Kathalu", url1: "https://www.youtube.com/@bommalakathalu1", img: "/images/telugu/bommala kathalu.png" },
    { id: "13", lang: "telugu", name: "JM TV Telugu", url1: "https://www.youtube.com/@jmtelugumoralstories", img: "/images/telugu/JM TV  Telugu.webp" },
    { id: "14", lang: "telugu", name: "Jaitra TV Telugu", url1: "https://www.youtube.com/@JaitratvTelugu", img: "/images/telugu/Jaitra Telugu.webp" },
    { id: "16", lang: "telugu", name: "Riya Fairy tales", url1: "https://www.youtube.com/@riyafairytalestelugu", img: "/images/telugu/Raiya.png" },
    { id: "34", lang: "tamil", name: "grandma Tv Tamil", url1: "https://www.youtube.com/@grandmatamil", img: "/images/tamil/Channel logo.webp" },
    { id: "19", lang: "tamil", name: "Anamika TV Mamiyar Marumagal", url1: "https://www.youtube.com/@AnamikaTVMamiyarMarumagal", img: "/images/tamil/Anamika tv tamil  atha kodal  new logo.webp" },
    { id: "32", lang: "tamil", name: "Tamil Birds Stories", url1: "https://www.youtube.com/@tamilbirdsstories", img: "/images/tamil/Tamil Birds Stories.webp" },
    { id: "22", lang: "tamil", name: "PSR Moral stories Tamil", url1: "https://www.youtube.com/@psrmoralstoriestamil", img: "/images/tamil/PSR Moral Stories _tamil.webp" },
    { id: "25", lang: "tamil", name: "Best moral stories Tamil", url1: "https://www.youtube.com/@bestmoralstoriestamil", img: "/images/tamil/Logo_Final -Tamil.webp" },
    { id: "31", lang: "tamil", name: "Jaitra TV Tamil", url1: "https://www.youtube.com/@JaitratvTamil", img: "/images/tamil/Jaitra Tamil.webp" },
    { id: "35", lang: "tamil", name: "Choti Tv Tamil", url1: "https://www.youtube.com/@chotitamil", img: "/images/tamil/choti tamil logo.webp" },
    { id: "28", lang: "tamil", name: "Jabilli Kadhaigal", url1: "https://www.youtube.com/channel/UCwyAGGt3DCvz34invXmAh_A", img: "/images/tamil/jabilli kathalu tamil.webp" },
    { id: "29", lang: "tamil", name: "Bommai Kathaigal", url1: "https://www.youtube.com/channel/UCRp8wAZfZzlUXsgQEhTp-qw", img: "/images/tamil/Bommala Kathalu tamil.webp" },
    { id: "24", lang: "tamil", name: "Stories Dunia", url1: "https://www.youtube.com/@storiesduniatamil", img: "/images/tamil/Chanel art Tamil.webp" },
    { id: "30", lang: "tamil", name: "Tamil Kataikal", url1: "https://www.youtube.com/@tamilkataikal", img: "/images/tamil/tamil kathaikal png.webp" },
    { id: "27", lang: "tamil", name: "PSR Birds Tamil", url1: "https://www.youtube.com/@psrbirdstamil", img: "/images/tamil/psr_tamil_chatgpt.png" },
    { id: "20", lang: "tamil", name: "Anjali TV Mamiyar marumagal", url1: "https://www.youtube.com/channel/UC3yMI6WFjUkVnT3bHzACzjA", img: "/images/tamil/AnjaliTamil.png" },
    { id: "21", lang: "tamil", name: "Avani Stories Tamil", url1: "https://www.youtube.com/@avanistoriestamil", img: "/images/tamil/avani_tamil_chatgpt.png" },
    // { id: "26", lang: "tamil", name: "PSR Moral stories Tamil", url1: "https://www.youtube.com/@psrmoralstoriestamil", img: "/images/tamil/img1000039661." },
    { id: "33", lang: "tamil", name: "Riya Fairy tales Tamil", url1: "https://www.youtube.com/@riyafairytalestamil", img: "/images/telugu/Raiya.png" },
    { id: "42", lang: "kannada", name: "Jaitra TV Kannada", url1: "https://www.youtube.com/@JaitratvKannada", img: "/images/kannada/jaitra kannada.webp" },
    { id: "40", lang: "kannada", name: "Stories Dunia", url1: "https://www.youtube.com/@storiesduniakannada", img: "/images/kannada/Chanel art Kannada.webp" },
    { id: "44", lang: "kannada", name: "kannada Cartoon Stories Tv", url1: "https://www.youtube.com/@kannadacartoonstoriestv", img: "/images/kannada/channels4_profile.jpg" },
    { id: "41", lang: "kannada", name: "JM TV Kannada", url1: "https://www.youtube.com/@jmkannadamoralstories", img: "/images/kannada/JM TV kannada.webp" },
    { id: "43", lang: "kannada", name: "Kananda Birds Stories", url1: "https://www.youtube.com/@kannadabirdsstories", img: "/images/kannada/kannada birds stories.jpg" },
    { id: "36", lang: "kannada", name: "Anamika TV Atte Sose", url1: "https://www.youtube.com/@AnamikaTVAtteSose", img: "/images/kannada/Anamika tv kannada atha kodal  new logo.webp" },
    { id: "39", lang: "kannada", name: "PSR Birds Kannada", url1: "https://www.youtube.com/@psrbirdskannada", img: "/images/kannada/psr_kanada_chatgpt.png" },
    { id: "37", lang: "kannada", name: "Anjali TV Atte Sose", url1: "https://www.youtube.com/channel/UCYUor5THOb7_ypYzQKwo2hw/", img: "/images/kannada/anjili_kanada_chatgpt.png" },
    { id: "38", lang: "kannada", name: "Avani Stories Kannada", url1: "https://www.youtube.com/@avanistorieskannada", img: "/images/kannada/AvaniKanda_chatgpt.png" },
    { id: "45", lang: "english", name: "Riya Fairy tales English", url1: "https://www.youtube.com/@JaitratvKannada", img: "/images/telugu/Raiya.png" },
    { id: "46", lang: "hindi", name: "Anamika Tv Saas Vs Bahu", url1: "https://www.youtube.com/@AnamikaTVSaasVsBahu", img: "/images/hindi/Anamika tv hindi sas bahu new logo final.webp" },
    { id: "47", lang: "hindi", name: "Stories Dunia Hindi", url1: "https://www.youtube.com/@storiesdunia", img: "/images/hindi/Chanel art Hindi.webp" },
];
const initialState = {
    channels: initialChannels,
    filteredChannels: initialChannels
};

const channelReducer = (state, action) => {

    console.log(action.payload)
    switch (action.type.toLowerCase()) {
        case "filter":
            const lang = action.payload.toLowerCase();
            return {
                ...state,
                filteredChannels:
                    lang === "all channels"
                        ? state.channels
                        : state.channels.filter(
                            (channel) => channel.lang.toLowerCase() === lang
                        )
            };
        default:
            return state;
    }
};

export default function AnimationsPage() {
    const [state, dispatch] = useReducer(channelReducer, initialState);
    const [selectedLang, setSelectedLang] = useState("all channels");

    const filterChannels = (lang) => {
        setSelectedLang(lang.toLowerCase());
        dispatch({ type: "filter", payload: lang });
    };

    const categories = ["All Channels", "Telugu", "Tamil", "Kannada", "Hindi"];

    return (
        <section className="pt-32 pb-10 bg-[#fff0f5]">
  <div className="flex flex-col lg:flex-row gap-8 w-full px-8 md:px-6 lg:px-24">

    {/* Dropdown for Mobile */}
    <div className="lg:hidden mb-6">
      <select
        value={selectedLang}
        onChange={(e) => filterChannels(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-text"
      >
        <option value="">Select Category</option>
        {categories.map((lang) => (
          <option key={lang} value={lang.toLowerCase()}>
            {lang}
          </option>
        ))}
      </select>
    </div>

    {/* Sidebar for Large Screens */}
    <div className="hidden lg:block sticky top-[120px] w-[26%] bg-gray-100 rounded-[8px] shadow-lg border border-gray-300 pt-6 px-4 h-fit">
      <h2 className="text-xl font-bold text-primary-text mb-2">Categories</h2>
      <div className="my-6">
        {categories.map((lang) => (
          <button
            key={lang}
            onClick={() => filterChannels(lang)}
            className={`w-full mb-2 text-start px-4 py-2 rounded transition duration-200 ${
              selectedLang === lang.toLowerCase()
                ? "bg-[#FFBCBC] text-primary-text"
                : "hover:bg-gray-200"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>

    {/* Grid of Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {state.filteredChannels.map((data) => (
        <a
          href={data.url1}
          key={data.id}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-between items-center bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
        >
          <div className="w-full">
            <img
              src={data.img}
              alt={data.name}
              className="w-full h-60 object-cover"
            />
          </div>
          <div className="p-4 text-center bg-gray-100 w-full">
            <h3 className="text-sm font-semibold truncate">{data.name}</h3>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

    );
}