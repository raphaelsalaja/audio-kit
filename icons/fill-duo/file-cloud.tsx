import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileCloud({
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
          d="M15.487 5.427L11.572 1.512C11.2442 1.1841 10.7996 1 10.336 1H4.75C3.2312 1 2 2.2312 2 3.75V14.25C2 15.7688 3.2312 17 4.75 17H7.79076C7.60325 16.5368 7.5 16.0305 7.5 15.5C7.5 13.6717 8.72597 12.1306 10.4013 11.653C11.2959 10.3609 12.7873 9.5 14.5 9.5C15.0226 9.5 15.5265 9.58018 16 9.7289V6.6655C16 6.2009 15.8155 5.7553 15.487 5.427Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.3471 13.0046C11.9051 11.8246 13.099 11 14.5 11C16.433 11 18 12.5671 18 14.5C18 16.4329 16.433 18 14.5 18H11.5C10.1193 18 9 16.8807 9 15.5C9 14.1706 10.0376 13.0836 11.3471 13.0046Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 6.75C5 6.33579 5.33579 6 5.75 6H7.75C8.16421 6 8.5 6.33579 8.5 6.75C8.5 7.16421 8.16421 7.5 7.75 7.5H5.75C5.33579 7.5 5 7.16421 5 6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 9.75C5 9.33579 5.33579 9 5.75 9H10.25C10.6642 9 11 9.33579 11 9.75C11 10.1642 10.6642 10.5 10.25 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.8691 6.00095H12C11.45 6.00095 11 5.55095 11 5.00095V1.13098C11.212 1.21803 11.4068 1.34674 11.572 1.51197L15.487 5.42697C15.6527 5.59263 15.7818 5.78817 15.8691 6.00095Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FileCloud;
