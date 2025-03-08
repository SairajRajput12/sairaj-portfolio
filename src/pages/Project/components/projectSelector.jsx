import ToggleButton from "../../../components/ToggleButton"
import ToggleButtonGroup from "../../../components/ToggleGroup"


export default function ProjectSelector({handleSelector}){
    return(
        <ToggleButtonGroup>
            <ToggleButton onClick={handleSelector} val='web' d='true' text='Web Application' />
            <ToggleButton onClick={handleSelector} val='ml' d='true' text='Machine Learning' />
            <ToggleButton onClick={handleSelector} val='other' d='false' text='Other Work' />                
        </ToggleButtonGroup>
    )
}