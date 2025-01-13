import axios from 'axios'

export default async function getPhotos() {
    let photoLinks = [];

    const API_KEY = '24d9f7d7aec0277bc9f41ed2ced464dd';
    const USER_ID = '201168900@N04';

    const BASE_URL = 'https://api.flickr.com/services/rest/';
    let response = '';
    try {
        const retrievedLinks = JSON.parse(sessionStorage.getItem('photoLinks'));
        if (!retrievedLinks) {
            response = await axios.get(BASE_URL, {
            params: {
                method: 'flickr.people.getPhotos',
                api_key: API_KEY,
                user_id: USER_ID,
                format: 'json',
                nojsoncallback: 1,
                per_page: 500,
            }
            });

            const data = response.data;
            console.log(data);

            const photos = data.photos.photo;

            for (let p of photos) {
                let title = p.title;
                const link = `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_b.jpg`;
                const flickerLink = `https://www.flickr.com/photos/${USER_ID}/${p.id}/`;
                photoLinks.push({title, link, flickerLink});
            }
            if (data.stat !== 'ok') {
                throw new Error(`API Error: ${data.message}`);
            }

            sessionStorage.setItem('photoLinks', JSON.stringify(photoLinks));
            console.log('used api')
        } else {
            photoLinks = retrievedLinks;
        }
    } catch (e) {
        console.log(e);
    }
    return photoLinks;
}
