import { useState, useId} from "react";

export const Filters = ({changeFilters})=>{
    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterId = useId();
    const categoryFilterId = useId();
    
    const handleChangeMinPrice = (event)=>{
       
        setMinPrice(event.target.value);
        changeFilters((prevState) =>{
            return ({
                ...prevState,
                minPrice: event.target.value
            });
        })
    };

    const handleChangeCategory = (event)=>{
       
            changeFilters((prevState) =>({
            ...prevState,
            category: event.target.value,
        }))
    };
    return(
        <section className="filters">
<div>
    <label htmlFor={minPriceFilterId}>Initial Price</label>
    <input type="range"
    id={minPriceFilterId} 
    min={0}
    max={1000}
    onChange= {handleChangeMinPrice}
    />
    
</div>
<span>${minPrice}</span>
<div>
    <label htmlFor={categoryFilterId}>Categories</label>
    <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
        <option value="all">All</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="groceries">Groceries</option>
        <option value="furniture">Furniture</option>
    </select>
</div>
        </section>
    )
};