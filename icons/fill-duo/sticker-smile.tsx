import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StickerSmile({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M9 1C4.58152 1 1 4.58606 1 9C1 13.4139 4.58152 17 9 17C9.18067 17 9.38072 17.0035 9.54993 16.9346C11.2063 16.2599 12.7335 15.2658 13.9992 13.9995C15.6677 12.3257 16.5175 10.5883 16.9334 9.54857C17 9.38193 17 9.18284 17 9.00462V9C17 4.58606 13.4185 1 9 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.89752 9.3385C5.26285 9.1433 5.71726 9.28121 5.91246 9.64654C6.50322 10.7521 7.66659 11.5 8.99997 11.5H9.75982C10.174 11.5 10.5098 11.8358 10.5098 12.25C10.5098 12.6642 10.174 13 9.75982 13H8.99997C7.09136 13 5.43073 11.9278 4.58948 10.3534C4.39427 9.98812 4.53219 9.53371 4.89752 9.3385Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 8C7.552 8 8 7.55 8 7C8 6.45 7.552 6 7 6C6.448 6 6 6.45 6 7C6 7.55 6.448 8 7 8Z"
          fill={fill}
        />
        <path
          d="M11 8C11.552 8 12 7.55 12 7C12 6.45 11.552 6 11 6C10.448 6 10 6.45 10 7C10 7.55 10.448 8 11 8Z"
          fill={fill}
        />
        <path
          d="M16.9255 9.56822L16.237 9.27002C15.556 8.94002 14.804 8.75 14 8.75C11.101 8.75 8.75 11.1 8.75 14C8.75 14.8 8.945 15.56 9.267 16.24L9.57746 16.9233C10.6167 16.4976 12.3424 15.651 13.9975 14.0012L13.9992 13.9995C15.6572 12.3362 16.5068 10.6101 16.9255 9.56822Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StickerSmile;
