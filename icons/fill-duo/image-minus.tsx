import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageMinus({
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
          d="M10.3367 2C9.82692 2.41249 9.501 3.04318 9.501 3.75C9.501 4.99264 10.5084 6 11.751 6H16.001V13.25C16.001 14.7688 14.7698 16 13.251 16H4.75098C3.23216 16 2.00098 14.7688 2.00098 13.25V4.75C2.00098 3.23119 3.23216 2 4.75098 2H10.3367Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.25098 8.5C6.94138 8.5 7.50098 7.9404 7.50098 7.25C7.50098 6.5596 6.94138 6 6.25098 6C5.56058 6 5.00098 6.5596 5.00098 7.25C5.00098 7.9404 5.56058 8.5 6.25098 8.5Z"
          fill={fill}
        />
        <path
          d="M6.25101 8.5C6.94101 8.5 7.50101 7.9404 7.50101 7.25C7.50101 6.5596 6.94101 6 6.25101 6C5.56101 6 5.00101 6.5596 5.00101 7.25C5.00101 7.9404 5.56101 8.5 6.25101 8.5Z"
          fill={fill}
        />
        <path
          d="M11.001 3.75C11.001 3.33579 11.3368 3 11.751 3H16.751C17.1652 3 17.501 3.33579 17.501 3.75C17.501 4.16421 17.1652 4.5 16.751 4.5H11.751C11.3368 4.5 11.001 4.16421 11.001 3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.001 13.25V12.1893L13.1953 9.38367C12.1214 8.30977 10.3806 8.30977 9.30667 9.38367L3.18172 15.5086C3.62674 15.8184 4.16764 16 4.75098 16H13.251C14.7698 16 16.001 14.7688 16.001 13.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ImageMinus;
