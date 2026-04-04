import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImagePlus({
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
          d="M10.3367 2H4.75098C3.23216 2 2.00098 3.23119 2.00098 4.75V13.25C2.00098 14.7688 3.23216 16 4.75098 16H13.251C14.7698 16 16.001 14.7688 16.001 13.25V7.66435C15.5885 8.17409 14.9578 8.5 14.251 8.5C13.0084 8.5 12.001 7.49264 12.001 6.25V6H11.751C10.5084 6 9.50101 4.99264 9.50101 3.75C9.50101 3.04318 9.82692 2.41249 10.3367 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.001 13.25V12.1893L13.1953 9.38367C12.1214 8.30977 10.3806 8.30977 9.30667 9.38367L3.18172 15.5086C3.62674 15.8184 4.16764 16 4.75098 16H13.251C14.7698 16 16.001 14.7688 16.001 13.25Z"
          fill={fill}
        />
        <path
          d="M6.25098 8.5C6.94138 8.5 7.50098 7.9404 7.50098 7.25C7.50098 6.5596 6.94138 6 6.25098 6C5.56058 6 5.00098 6.5596 5.00098 7.25C5.00098 7.9404 5.56058 8.5 6.25098 8.5Z"
          fill={fill}
        />
        <path
          d="M15.001 1.25C15.001 0.835786 14.6652 0.5 14.251 0.5C13.8368 0.5 13.501 0.835786 13.501 1.25V3H11.751C11.3368 3 11.001 3.33579 11.001 3.75C11.001 4.16421 11.3368 4.5 11.751 4.5H13.501V6.25C13.501 6.66421 13.8368 7 14.251 7C14.6652 7 15.001 6.66421 15.001 6.25V4.5H16.751C17.1652 4.5 17.501 4.16421 17.501 3.75C17.501 3.33579 17.1652 3 16.751 3H15.001V1.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ImagePlus;
