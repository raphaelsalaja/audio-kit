import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxCart({
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
          d="M12.75 3.75H8.75C7.922 3.75 7.25 4.4216 7.25 5.25V9.25C7.25 10.0784 7.922 10.75 8.75 10.75H12.75C13.578 10.75 14.25 10.0784 14.25 9.25V5.25C14.25 4.4216 13.578 3.75 12.75 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 3.75H8.75C7.922 3.75 7.25 4.4216 7.25 5.25V9.25C7.25 10.0784 7.922 10.75 8.75 10.75H12.75C13.578 10.75 14.25 10.0784 14.25 9.25V5.25C14.25 4.4216 13.578 3.75 12.75 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 3.75V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.86301 13.75H12.9211"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 12.75V2.75C4.25 2.198 3.802 1.75 3.25 1.75H1.83301"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 16.25C5.216 16.25 6 15.4665 6 14.5C6 13.5335 5.216 12.75 4.25 12.75C3.284 12.75 2.5 13.5335 2.5 14.5C2.5 15.4665 3.284 16.25 4.25 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 16.25C15.466 16.25 16.25 15.4665 16.25 14.5C16.25 13.5335 15.466 12.75 14.5 12.75C13.534 12.75 12.75 13.5335 12.75 14.5C12.75 15.4665 13.534 16.25 14.5 16.25Z"
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

export default BoxCart;
