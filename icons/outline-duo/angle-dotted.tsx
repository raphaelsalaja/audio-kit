import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AngleDotted({
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
          d="M9.77426 15.2212C9.77426 11.3945 6.67216 8.29242 2.84552 8.29242C2.80956 8.29242 2.77366 8.29269 2.73782 8.29324V13.2212C2.73782 14.3257 3.63325 15.2212 4.73782 15.2212H9.77426Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.75 2.75V13.25C2.75 14.355 3.645 15.25 4.75 15.25H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.42899 9.53299C5.8432 9.53299 6.17899 9.1972 6.17899 8.78299C6.17899 8.36878 5.8432 8.03299 5.42899 8.03299C5.01477 8.03299 4.67899 8.36878 4.67899 8.78299C4.67899 9.1972 5.01477 9.53299 5.42899 9.53299Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.70001 11.05C8.11423 11.05 8.45001 10.7142 8.45001 10.3C8.45001 9.88577 8.11423 9.54999 7.70001 9.54999C7.2858 9.54999 6.95001 9.88577 6.95001 10.3C6.95001 10.7142 7.2858 11.05 7.70001 11.05Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.21701 13.321C9.63122 13.321 9.96701 12.9852 9.96701 12.571C9.96701 12.1568 9.63122 11.821 9.21701 11.821C8.8028 11.821 8.46701 12.1568 8.46701 12.571C8.46701 12.9852 8.8028 13.321 9.21701 13.321Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default AngleDotted;
