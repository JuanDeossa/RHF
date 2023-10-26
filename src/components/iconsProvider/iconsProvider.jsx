export const OpenEyeIcon = ({ color = "#9f9d9da3", width = 24, height = 24, className = "", onClick = () => { } }) => {
    return (
        <svg
            className={`OpenEyeIcon ${className}`}
            onClick={onClick}
            width={width}
            height={height}
            stroke={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
        </svg>
    );
};
export const ClosedEyeIcon = ({ color = "#9f9d9da3", width = 24, height = 24, className = "", onClick = () => { } }) => {
    return (
        <svg
            className={`ClosedEyeIcon ${className}`}
            onClick={onClick}
            width={width}
            height={height}
            stroke={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path>
            <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path>
            <path d="M3 3l18 18"></path>
        </svg>
    );
};

export const IconAlert = ({ color = "#E54545", width = 16, height = 16, className = "", onClick = () => { } }) => {
    return (
        <svg
            className={`IconAlert ${className}`}
            onClick={onClick}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M7.49948 5.55013V8.80008" stroke={color} strokeLinecap="round" />
            <path d="M7.49948 11.0751V11.4" stroke={color} strokeLinecap="round" />
            <path d="M13.849 12.0604L8.57241 1.68395C8.10896 0.772015 6.88893 0.772015 6.42613 1.68395L1.15015 12.0604C0.707507 12.934 1.2964 14 2.22459 14H12.7759C13.7034 14 14.293 12.934 13.8484 12.0604H13.849Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export const IconOk = ({ color = "#5CE5B4", width = 16, height = 16, className = "", onClick = () => { } }) => {
    return (
        <svg
            className={`IconOk ${className}`}
            onClick={onClick}
            width={width}
            height={height}
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M17.5931 1.19486C18.0377 1.52241 18.1327 2.14841 17.8051 2.59308L7.49264 16.5931C7.31337 16.8365 7.03362 16.9857 6.73164 16.999C6.42965 17.0124 6.13783 16.8884 5.93779 16.6618L1.25029 11.3514C0.884805 10.9374 0.924174 10.3054 1.33822 9.93995C1.75227 9.57447 2.38421 9.61384 2.7497 10.0279L6.61722 14.4093L16.1949 1.40693C16.5224 0.962258 17.1484 0.867311 17.5931 1.19486Z" fill={color} />
        </svg>
    )
}