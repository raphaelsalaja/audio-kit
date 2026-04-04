import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Swap({
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
          d="M11.75 15.75C13.9589 15.75 15.75 13.9617 15.75 11.75C15.75 9.5383 13.9589 7.75 11.75 7.75C9.5411 7.75 7.75 9.5383 7.75 11.75C7.75 13.9617 9.5411 15.75 11.75 15.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M11.75 15.75C13.9589 15.75 15.75 13.9617 15.75 11.75C15.75 9.5383 13.9589 7.75 11.75 7.75C9.5411 7.75 7.75 9.5383 7.75 11.75C7.75 13.9617 9.5411 15.75 11.75 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 1.75H12.25C13.6307 1.75 14.75 2.8693 14.75 4.25V5.75L16.5 4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 16.25H5.75C4.3693 16.25 3.25 15.1307 3.25 13.75V12.25L1.5 14"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.0132 4.97705C9.47941 3.39745 8.0097 2.25 6.25 2.25C4.041 2.25 2.25 4.041 2.25 6.25C2.25 8.0098 3.39759 9.47948 4.97699 10.0132"
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

export default Swap;
