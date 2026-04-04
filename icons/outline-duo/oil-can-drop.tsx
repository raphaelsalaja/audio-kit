import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OilCanDrop({
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
          d="M3.75 6.75H9.662C10.025 6.75 10.36 6.947 10.536 7.264L11.5 9L17.25 6.75L12.349 12.542C11.969 12.991 11.411 13.25 10.822 13.25H5.75C4.645 13.25 3.75 12.355 3.75 11.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 6.75H9.662C10.025 6.75 10.36 6.947 10.536 7.264L11.5 9L17.25 6.75L12.349 12.542C11.969 12.991 11.411 13.25 10.822 13.25H5.75C4.645 13.25 3.75 12.355 3.75 11.25V6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 2.75H9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 2.75V4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 16.75C16.578 16.75 17.25 16.069 17.25 15.228C17.25 14.072 16.409 13.578 15.75 12.75C15.091 13.578 14.25 14.072 14.25 15.228C14.25 16.069 14.922 16.75 15.75 16.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 10.75H2.75C1.645 10.75 0.75 9.855 0.75 8.75V7.75C0.75 7.198 1.198 6.75 1.75 6.75H3.75"
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

export default OilCanDrop;
