const socialMedia=[
    {
        path:'github.png', 
        name:'Github Profile', 
        link:'https://github.com/SairajRajput12'
    }, 
    {
        path:'instagram.png', 
        name:'Instagrame Profile', 
        link:'https://www.instagram.com/sairaj2172/'
    }, 
    {
        path:'linkedin.png', 
        name:'Linkedine Profile', 
        link:'https://www.linkedin.com/in/sairajrajputit/'
    }, 
    {
        path:'twitter.png', 
        name:'Twitter Profile', 
        link:'https://x.com/sairaj026'
    },
    {
        path:'Leetcode.png', 
        name:'Leetcode Profile', 
        link:'https://leetcode.com/u/Vegabond_12/'
    }
]

export default function SocialMediaIcons(){
    function goto(link){
        window.location.href = link;
    }

    return (
        <div className="si">
            {
                socialMedia.map((value,index) => {
                    return(
                        <img onClick={() => goto(value.link)} style={{width:'60px',margin:'15px',height:'60px'}} key={index} src={value.path} alt={value.name} />
                    )
                })
            }
        </div>
    )
}