require('dotenv/config');
var configs = {
    linkedin: { source: process.env.LINKEDIN_SOURCE, target: process.env.LINKEDIN_TARGET },
    youtube: { source: process.env.YOUTUBE_SOURCE, target: process.env.YOUTUBE_TARGET },
    website: { source: process.env.SITE_SOURCE, target: process.env.SITE_TARGET },
    instagram: { source: process.env.INSTAGRAM_SOURCE, target: process.env.INSTAGRAM_TARGET },
    whatsapp: { source: process.env.WHATSAPP_SOURCE, target: process.env.WHATSAPP_TARGET },
    email: { source: process.env.EMAIL_SOURCE, target: process.env.EMAIL_TARGET },
    background:{ colors: process.env.BACKGROUND_COLOR.split(','), gradient: process.env.BACKGROUND_COLOR.split(',').length > 1 ? true : false ,type: process.env.BACKGROUND_COLOR_TYPE},
    box: process.env.BOX_COLOR,
    text_color: process.env.TEXT_COLOR,
    permissions: process.env.PERMISSION.split(','),
    page: {
        title: process.env.TITLE_PAGE,
        description: process.env.DESCRIPTION_PAGE,
        keywords: process.env.KEYWORDS_PAGE
    },
    source_img: process.env.SOURCE_IMG ? process.env.SOURCE_IMG : 'https://isocarp.org/app/uploads/2014/05/noimage.jpg',
    your_name: process.env.YOUR_NAME,
    details_color: process.env.DETAILS_COLOR
};
class Pages{
    home(req,res){
        res.render('index', {page: 'home', config: configs});
    }
    api(req, res){
        res.json(configs);
    }
}
module.exports = new Pages;