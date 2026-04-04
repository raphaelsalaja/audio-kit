import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Car({
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
          d="M13.25 13.25V14.25C13.25 14.8023 13.6977 15.25 14.25 15.25H15.25C15.8023 15.25 16.25 14.8023 16.25 14.25V9.85C16.25 9.2205 15.9536 8.6277 15.45 8.25L14.45 7.5L13.7087 4.2988C13.4987 3.3921 12.691 2.75 11.7603 2.75H6.23979C5.30909 2.75 4.50129 3.392 4.29139 4.2988L3.55009 7.5L2.55009 8.25C2.04649 8.6277 1.75009 9.2205 1.75009 9.85V14.25C1.75009 14.8023 2.19779 15.25 2.75009 15.25H3.75009C4.30239 15.25 4.75009 14.8023 4.75009 14.25V13.25H13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 13.25V14.25C13.25 14.8023 13.6977 15.25 14.25 15.25H15.25C15.8023 15.25 16.25 14.8023 16.25 14.25V9.85C16.25 9.2205 15.9536 8.6277 15.45 8.25L14.45 7.5L13.7087 4.2988C13.4987 3.3921 12.691 2.75 11.7603 2.75H6.23979C5.30909 2.75 4.50129 3.392 4.29139 4.2988L3.55009 7.5L2.55009 8.25C2.04649 8.6277 1.75009 9.2205 1.75009 9.85V14.25C1.75009 14.8023 2.19779 15.25 2.75009 15.25H3.75009C4.30239 15.25 4.75009 14.8023 4.75009 14.25V13.25H13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 11.5C5.55228 11.5 6 11.0523 6 10.5C6 9.94772 5.55228 9.5 5 9.5C4.44772 9.5 4 9.94772 4 10.5C4 11.0523 4.44772 11.5 5 11.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13 11.5C13.5523 11.5 14 11.0523 14 10.5C14 9.94772 13.5523 9.5 13 9.5C12.4477 9.5 12 9.94772 12 10.5C12 11.0523 12.4477 11.5 13 11.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.2565 8L11.6958 5.5806C11.6172 5.2408 11.3145 5 10.9653 5H7.0346C6.6855 5 6.3827 5.2407 6.3041 5.5806L5.7431 8H12.2565Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Car;
