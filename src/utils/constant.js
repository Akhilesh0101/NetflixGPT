export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const AVTAR_LOGO = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg";

export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN = "https://image.tmdb.org/t/p/w300/";

export  const SUPPORTED_LANGUAGES = [
  {identifier : "en", name : "English"},
  {identifier : "hindi", name : "Hindi"},
  {identifier : "spanish", name : "Spanish"},

]


export const OPENAI_KEY =process.env.REACT_APP_OPENAI_KEY ;

