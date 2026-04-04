import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShieldKeyhole({
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
          d="M14.555 3.528L9.305 1.848C9.106 1.785 8.893 1.785 8.695 1.848L3.445 3.528C3.031 3.66 2.75 4.045 2.75 4.48V11C2.75 14.03 7.434 15.748 8.692 16.155C8.895 16.221 9.105 16.221 9.308 16.155C10.566 15.748 15.25 14.03 15.25 11V4.48C15.25 4.046 14.969 3.661 14.555 3.528ZM11 8.25C11 9.35457 10.1046 10.25 9 10.25C7.89543 10.25 7 9.35457 7 8.25C7 7.14543 7.89543 6.25 9 6.25C10.1046 6.25 11 7.14543 11 8.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 10.25C10.1046 10.25 11 9.35457 11 8.25C11 7.14543 10.1046 6.25 9 6.25C7.89543 6.25 7 7.14543 7 8.25C7 9.35457 7.89543 10.25 9 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.25V12.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.305 1.848L14.555 3.528C14.969 3.661 15.25 4.046 15.25 4.48V11C15.25 14.03 10.566 15.748 9.308 16.155C9.105 16.221 8.895 16.221 8.692 16.155C7.434 15.748 2.75 14.03 2.75 11V4.48C2.75 4.045 3.031 3.66 3.445 3.528L8.695 1.848C8.893 1.785 9.106 1.785 9.305 1.848Z"
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

export default ShieldKeyhole;
