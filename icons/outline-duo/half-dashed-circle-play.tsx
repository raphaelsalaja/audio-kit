import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HalfDashedCirclePlay({
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
          d="M11.652 8.56801L8.001 6.43901C7.668 6.24501 7.249 6.48501 7.249 6.87101V11.13C7.249 11.516 7.668 11.756 8.001 11.562L11.652 9.43301C11.983 9.24001 11.983 8.76201 11.652 8.56901V8.56801Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.652 8.56801L8.001 6.43901C7.668 6.24501 7.249 6.48501 7.249 6.87101V11.13C7.249 11.516 7.668 11.756 8.001 11.562L11.652 9.43301C11.983 9.24001 11.983 8.76201 11.652 8.56901V8.56801Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.987 2.96099C5.765 2.44299 6.649 2.07099 7.599 1.88599"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.879 7.631C2.064 6.663 2.441 5.764 2.97 4.974"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.987 15.039C5.765 15.557 6.649 15.929 7.599 16.114"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.879 10.369C2.064 11.337 2.441 12.236 2.97 13.026"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.435 1.892C13.752 2.558 16.25 5.487 16.25 9C16.25 12.513 13.751 15.443 10.433 16.108"
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

export default HalfDashedCirclePlay;
