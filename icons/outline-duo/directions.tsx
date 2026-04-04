import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Directions({
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
          d="M9 6.74999H4.134C3.887 6.74999 3.649 6.65899 3.465 6.49299L2.076 5.24299C1.635 4.84599 1.635 4.15399 2.076 3.75599L3.465 2.50599C3.649 2.34099 3.887 2.24899 4.134 2.24899H9"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 2.25V15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 15.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.74999H4.134C3.887 6.74999 3.649 6.65899 3.465 6.49299L2.076 5.24299C1.635 4.84599 1.635 4.15399 2.076 3.75599L3.465 2.50599C3.649 2.34099 3.887 2.24899 4.134 2.24899H9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.745 11.25H13.861C14.108 11.25 14.346 11.159 14.53 10.993L15.919 9.74299C16.36 9.34599 16.36 8.65399 15.919 8.25599L14.53 7.00599C14.346 6.84099 14.108 6.74899 13.861 6.74899H11.745"
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

export default Directions;
