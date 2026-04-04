import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenWriting({
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
          d="M2.75 15.25C2.75 15.25 6.349 14.682 7.296 13.735C8.243 12.788 14.623 6.40799 14.623 6.40799C15.46 5.57099 15.46 4.21399 14.623 3.37799C13.786 2.54099 12.429 2.54099 11.593 3.37799C11.593 3.37799 5.213 9.75799 4.266 10.705C3.319 11.652 2.751 15.251 2.751 15.251L2.75 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 15.25C2.75 15.25 6.349 14.682 7.296 13.735C8.243 12.788 14.623 6.40799 14.623 6.40799C15.46 5.57099 15.46 4.21399 14.623 3.37799C13.786 2.54099 12.429 2.54099 11.593 3.37799C11.593 3.37799 5.213 9.75799 4.266 10.705C3.319 11.652 2.751 15.251 2.751 15.251L2.75 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 15.25H15.25"
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

export default PenWriting;
