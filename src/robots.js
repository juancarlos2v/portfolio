// app/robots.js
export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://juanvilcherrez.vercel.app/sitemap.xml',
    };
}
