import "./social.css"; // Importing the CSS file

const socialMedia = [
    { path: "github.png", name: "Github Profile", link: "https://github.com/SairajRajput12" },
    { path: "instagram.png", name: "Instagram Profile", link: "https://www.instagram.com/sairaj2172/" },
    { path: "linkedin.png", name: "LinkedIn Profile", link: "https://www.linkedin.com/in/sairajrajput-ps/" },
    { path: "twitter.png", name: "Twitter Profile", link: "https://x.com/sairaj026" },
    { path: "Leetcode.png", name: "Leetcode Profile", link: "https://leetcode.com/u/Vegabond_12/" }
];

export default function SocialMediaIcons() {
    function goto(link) {
        window.open(link, "_blank"); // Opens in a new tab
    }

    return (
        <div className="social-container">
            {socialMedia.map((value, index) => (
                <img 
                    key={index} 
                    className="social-icon" 
                    onClick={() => goto(value.link)} 
                    src={value.path} 
                    alt={value.name} 
                />
            ))}
        </div>
    );
}
