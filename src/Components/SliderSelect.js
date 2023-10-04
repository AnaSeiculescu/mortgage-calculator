import React from "react";
import SliderComponent from "./Common/SliderComponent";

const SliderSelect = () => {
    return (
        <div>
            <SliderComponent
                defaultValue={20}
                min={1000}
                max={10000}
                onChange={(e, value) => console.log(value)}
                step={100}
                amount={3000}
                label={'Home Value'}
            />

            <SliderComponent
                defaultValue={20}
                min={1000}
                max={10000}
                onChange={(e, value) => console.log(value)}
                step={100}
                amount={3000}
                label={'Down Payment'}
            />

            <SliderComponent
                defaultValue={20}
                min={1000}
                max={10000}
                onChange={(e, value) => console.log(value)}
                step={100}
                amount={3000}
                label={'Loan Amount'}
            />
        </div>
    )
}

export default SliderSelect;