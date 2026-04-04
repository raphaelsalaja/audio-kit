import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Memories({
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
          d="M11.652 8.568L8.00104 6.439C7.66804 6.245 7.24902 6.485 7.24902 6.871V11.13C7.24902 11.516 7.66804 11.756 8.00104 11.562L11.652 9.433C11.983 9.24 11.983 8.761 11.652 8.568Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 3.25L2.28999 6.25C3.37299 3.61 5.969 1.75 9 1.75C13.004 1.75 16.25 5 16.25 9C16.25 13 13.004 16.25 9 16.25C5.0635 16.25 1.85961 13.1086 1.75281 9.2016"
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

export default Memories;
