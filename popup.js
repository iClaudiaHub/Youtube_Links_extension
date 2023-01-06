// document.addEventListener('DOMContentLoaded', async()=> {
//     const linksList = document.getElementById('linksList');
//     const url = 'https://jqq-utils.netlify.app/api/recentYTVideos';

// try {
//     const res = await fetch(url);
//     const videos = await res.json();
//     const videoHtml = videos
//         .map((video) => {
//             const videoUrl = `https: // www.youtube.com/watch?v=${video.videoId}`;
//             return `<li class="video-link">
//             <button class="btn" href="${videoUrl}">Copy URL</button>
//             <a class="btn" href="${videoUrl}" rel="noopener norehreferrer" 
//             target="_blanks">Watch</a>
//             ${video.title}
//             </li>
//             `;
//         })
//         .join('');
//     linksList.innerHTML = videosHTML;    
//     } catch (err) {
//         console.error(err);
//     }
// });

document.addEventListener('DOMContentLoaded', async () => {
    const linksList = document.getElementById('linksList');
    const url = 'https://jqq-utils.netlify.app/api/recentYTVideos';

    const copy = (e) => {
        const str = e.target.dataset.url;
        navigator.clipboard.writeText(str);
    };
    try {
        const res = await fetch(url);
        const videos = await res.json();
        const videosHTML = videos
            .map((video) => {
                const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
                return `<li class="video-link">
                        <button class="btn" data-url="${videoUrl}">Copy URL</button>
                        <a class="btn" href="${videoUrl}" rel="noopener noreferrer" target="_blank">Watch</a>
                     ${video.title}
                    </li>`;
            })
            .join('');
        linksList.innerHTML = videosHTML;
    } catch (err) {
        console.error(err);
    }
});