import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PanoramaImage({
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
          d="M15.284 14.2938C15.8029 14.2796 16.25 13.8556 16.25 13.294V4.706C16.25 4.018 15.58 3.538 14.93 3.761C13.462 4.265 11.429 4.754 8.988 4.752C6.558 4.751 4.534 4.264 3.07 3.761C2.42 3.538 1.75 4.019 1.75 4.706V13.294C1.75 13.982 2.42 14.462 3.07 14.239C3.84149 13.9743 4.76927 13.7137 5.8303 13.5263L9.45744 8.57692C9.85631 8.03265 10.6687 8.03155 11.069 8.57474L15.284 14.2938Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M15.271 14.293L11.081 8.596C10.681 8.053 9.869 8.053 9.47 8.596L5.847 13.523"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 13.294C16.25 13.981 15.581 14.462 14.93 14.239C13.462 13.735 11.429 13.246 8.988 13.248C6.558 13.25 4.533 13.737 3.07 14.239C2.42 14.462 1.75 13.982 1.75 13.294V4.706C1.75 4.019 2.42 3.538 3.07 3.761C4.534 4.264 6.558 4.751 8.988 4.752C11.429 4.754 13.462 4.265 14.93 3.761C15.58 3.538 16.25 4.018 16.25 4.706V13.294Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 6.5C5.061 6.5 4.5 7.061 4.5 7.75C4.5 8.439 5.061 9 5.75 9C6.439 9 7 8.439 7 7.75C7 7.061 6.439 6.5 5.75 6.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default PanoramaImage;
