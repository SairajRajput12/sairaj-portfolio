import './ToggleButton.css'; 

export default function ToggleButton({onClick,text,d,val}){
    return(
        <>
            <div onClick={(e) => onClick(e,val)} className='ToggleButton'>{text}</div>
            {d === 'true' && <div className='Divider'></div>}
        </>
    )
}