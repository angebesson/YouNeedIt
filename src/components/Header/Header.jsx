import {Filters} from '../Filters';
import { TbShoppingBagHeart } from "react-icons/tb";

export const Header = (changeFilters) =>{
    return(
        <header>
            <h1>You Need It <TbShoppingBagHeart /></h1>
            <Filters onChange = {changeFilters}/>
        </header>
    )
};