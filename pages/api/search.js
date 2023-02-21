// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs')
const axios = require('axios').default
const path = require('path');
const cwd = path.join(__dirname, '..');


export default function handler(req, res) {
    console.log(req.query)
    const callReq = async(url) => {
        let domain = 'https://www.tikwm.com';
        let resp = await axios.post(domain+'/api/', {}, {
            headers: {
                'accept': 'application/json, text/javascript, */*; q=0.01',
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                // 'cookie': 'current_language=en; _ga=GA1.1.115940210.1660795490; _gcl_au=1.1.669324151.1660795490; _ga_5370HT04Z3=GS1.1.1660795489.1.1.1660795513.0.0.0',
                'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
            },
            params: {
                url: url,
                count: 12,
                cursor: 0,
                web: 1,
                hd: 1
            }
        })
        if(resp) {
            if(resp.data && resp.data.data) {
                res.status(200).json({
                    nowm: domain+resp.data.data.play, 
                    wm: domain+resp.data.data.wmplay, 
                    music: domain+resp.data.data.music, 
                    title: resp.data.data.title,
                    cover: domain+resp.data.data.cover,
                    size: resp.data.data.size,
                    create_time: resp.data.data.create_time
                })
            } else {
                res.status(400).json({err: 'Oops we could not fetch the tiktok URL! It might be the wrong URL structure :)'});
            }
            
        } else {
            res.status(400).json({err: 'Oops we could not fetch the tiktok URL! It might be the wrong URL structure :)'});
        }
        
    }
    callReq(req.query.videoUrl);
}
