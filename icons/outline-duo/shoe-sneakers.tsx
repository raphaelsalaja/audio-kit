import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShoeSneakers({
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
          d="M5.694 6.25001C7.185 6.25001 8.407 5.41901 8.911 4.10601L8.045 3.48801L16.288 9.34901C16.7733 9.66751 17.1209 10.1771 17.2207 10.7718H5.86001L5.8034 10.6475C5.60571 10.2137 5.21358 9.89971 4.74704 9.80163L1.25 9.06645V5.00001C1.25 4.44801 1.698 4.00001 2.25 4.00001H2.434C2.938 5.31301 4.203 6.25001 5.694 6.25001Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.83801 10.75H17.217"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 9.065L4.533 9.785C5.142 9.92 5.653 10.333 5.915 10.899L7 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.038 5.619L10.235 6.905"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.911 4.10601C8.407 5.41901 7.185 6.25001 5.694 6.25001C4.203 6.25001 2.938 5.31301 2.434 4.00001H2.25C1.698 4.00001 1.25 4.44801 1.25 5.00001V11.25C1.25 12.354 2.145 13.25 3.25 13.25H15.125C16.299 13.25 17.25 12.299 17.25 11.125C17.25 10.381 16.867 9.72901 16.288 9.34901L8.045 3.48801"
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

export default ShoeSneakers;
