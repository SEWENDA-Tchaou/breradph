import PropTypes from 'prop-types';

function Input({id, onChange, value, label, type}) {
    return (
        <div className="relative">
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder=""
                className="block rounded-md p-6 pt-6 pb-1 w-full text-md text-noir bg-blanc appearance-none focus:outline-none focus:ring-0 peer border border-cafe"
            />
            <label
                htmlFor={id}
                className="absolute text-md text-cafe duration-150 transform -translate-y-3 scale-75 top-4 left-6 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
                {label}
            </label>
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Input;
