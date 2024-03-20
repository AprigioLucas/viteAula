import Menu from "./components/Menu"
import {Card} from "./components/Card"
import Data from "./constants/animais.json"

export const Consumo = () => {
    return(
        <div>
        <br />
        <Menu/>
        <br/>
        Consumo JSON
        {Data.map((item) => {
            return(
                <Card 
                name={item.name}
                desc={item.desc}
                value={item.value}
                image={item.image}
                key={item.id}
                />
            )
        })}   
       

</div>
    )
}