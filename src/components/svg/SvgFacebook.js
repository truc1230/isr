const SvgFacebook = ({ size, color, fill }) => {
    return (
        <svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4975_40385)">
                <path
                    d="M24 12.0719C23.9997 9.77866 23.3424 7.53355 22.1058 5.60233C20.8692 3.67111 19.1051 2.13465 17.0225 1.17486C14.9398 0.215067 12.6257 -0.127869 10.3542 0.186652C8.08263 0.501172 5.94878 1.45998 4.20524 2.94956C2.4617 4.43914 1.18149 6.39711 0.516158 8.59167C-0.149172 10.7862 -0.171753 13.1255 0.451088 15.3325C1.07393 17.5395 2.31611 19.5218 4.03057 21.0448C5.74503 22.5677 7.85996 23.5675 10.125 23.9259V15.5409H7.078V12.0719H10.125V9.42786C10.125 6.42086 11.917 4.75886 14.657 4.75886C15.5571 4.77177 16.4552 4.84998 17.344 4.99286V7.94686H15.83C15.3742 7.88636 14.9131 8.00934 14.548 8.28875C14.1829 8.56816 13.9437 8.98113 13.883 9.43686C13.8658 9.56448 13.8632 9.69363 13.875 9.82186V12.0719H17.2L16.668 15.5409H13.868V23.9259C16.692 23.4808 19.2644 22.0422 21.1219 19.869C22.9795 17.6957 24.0001 14.9307 24 12.0719Z"
                    fill={color || '#CBD5E0'}/>
            </g>
            <defs>
                <clipPath id="clip0_4975_40385">
                    <rect width={size || '24'} height={size || '24'} fill={fill || 'white'}/>
                </clipPath>
            </defs>
        </svg>

    )
}

export default SvgFacebook
