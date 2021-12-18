import { ReactComponent as IconCross } from '../assets/svgs/icon-cross.svg';

export const Item = ({ line = true }) => {
    return (
        <>
            <div className='item item-line'>
                <input type="radio"></input>
                <input type="text"></input>
                <button className='btn-icon'>
                    <IconCross></IconCross>
                </button>
            </div>
            {(line && <hr></hr>)}
        </>
    )
}

export default Item;