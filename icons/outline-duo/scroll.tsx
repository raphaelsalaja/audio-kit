import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Scroll({
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
          d="M7.76489 12.75H16.25V14.75C16.25 15.3023 15.8023 15.75 15.25 15.75H7.76489V12.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 3.75C1.75 2.92157 2.42157 2.25 3.25 2.25V2.25C4.07843 2.25 4.75 2.92157 4.75 3.75V6.75H1.96429C1.84594 6.75 1.75 6.65406 1.75 6.53571V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.25 2.25C2.422 2.25 1.75 2.922 1.75 3.75V5.75C1.75 6.302 2.198 6.75 2.75 6.75H4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 2.25H12.75C13.578 2.25 14.25 2.922 14.25 3.75V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 15.75C5.422 15.75 4.75 15.078 4.75 14.25V3.75C4.75 2.922 4.078 2.25 3.25 2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 15.75C15.578 15.75 16.25 15.078 16.25 14.25V13.25C16.25 12.974 16.026 12.75 15.75 12.75H8.25C7.974 12.75 7.75 12.974 7.75 13.25V14.25C7.75 15.078 7.078 15.75 6.25 15.75H14.75Z"
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

export default Scroll;
