import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bucket({
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
          d="M15.2213 4.71709C14.9179 5.85788 12.2483 6.75001 8.99997 6.75001C5.75161 6.75001 3.08204 5.85788 2.77869 4.71709L3.99997 13.95C3.99997 14.944 6.23897 15.75 8.99997 15.75C11.761 15.75 14 14.944 14 13.95L15.2213 4.71709Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.75 4.5L4 13.95C4 14.944 6.239 15.75 9 15.75C11.761 15.75 14 14.944 14 13.95L15.25 4.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.75C12.4518 6.75 15.25 5.74264 15.25 4.5C15.25 3.25736 12.4518 2.25 9 2.25C5.54822 2.25 2.75 3.25736 2.75 4.5C2.75 5.74264 5.54822 6.75 9 6.75Z"
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

export default Bucket;
