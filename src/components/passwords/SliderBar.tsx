
interface IPropsSliderBar {
    value: number,
    changeValue: (value: number) => void,
}

export const SliderBar = ({value, changeValue}: IPropsSliderBar) => {
    return(
        <div>
            <input className="w-full" type="range" value={value} 
            onChange={e => changeValue(Number(e.target.value))}
            min={5} max={30}
            />
        </div>
    );
}