import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DrinkSlash({
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
          d="M11.1384 6.86157C10.9053 6.7772 10.75 6.75 10.75 6.75V4.75H7.24997V6.75C7.24997 6.75 4.89971 7.16177 4.75677 9.75V13.1527L8.24996 9.75L11.1384 6.86157Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.83894 14.25H9.24665V11.9353L12.6192 8.56281C13.2832 8.83543 13.25 9.30955 13.25 9.99999V15.75C13.25 16.302 12.802 16.75 12.25 16.75H5.75C5.198 16.75 4.75 16.302 4.75 15.75V14.25C5.43785 14.25 6.17193 14.25 6.83894 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.141 6.862C10.907 6.777 10.75 6.75 10.75 6.75V2.25C10.75 1.698 10.302 1.25 9.75 1.25H8.25C7.698 1.25 7.25 1.698 7.25 2.25V6.75C7.25 6.75 4.75 7.188 4.75 10V15.75C4.75 16.302 5.198 16.75 5.75 16.75H12.25C12.802 16.75 13.25 16.302 13.25 15.75V10C13.25 9.6645 13.2143 9.3625 13.1514 9.091"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 8.75V13.75H4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 4.75H10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DrinkSlash;
