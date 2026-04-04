import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PeopleRoof({
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
          d="M5.25 10.25C6.35457 10.25 7.25 9.35457 7.25 8.25C7.25 7.14543 6.35457 6.25 5.25 6.25C4.14543 6.25 3.25 7.14543 3.25 8.25C3.25 9.35457 4.14543 10.25 5.25 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 10.25C13.8546 10.25 14.75 9.35457 14.75 8.25C14.75 7.14543 13.8546 6.25 12.75 6.25C11.6454 6.25 10.75 7.14543 10.75 8.25C10.75 9.35457 11.6454 10.25 12.75 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 10.25C6.35457 10.25 7.25 9.35457 7.25 8.25C7.25 7.14543 6.35457 6.25 5.25 6.25C4.14543 6.25 3.25 7.14543 3.25 8.25C3.25 9.35457 4.14543 10.25 5.25 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.32 16C1.671 14.149 3.297 12.75 5.25 12.75C7.203 12.75 8.829 14.149 9.18 16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 10.25C13.8546 10.25 14.75 9.35457 14.75 8.25C14.75 7.14543 13.8546 6.25 12.75 6.25C11.6454 6.25 10.75 7.14543 10.75 8.25C10.75 9.35457 11.6454 10.25 12.75 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 13.152C11.529 12.894 12.123 12.75 12.75 12.75C14.703 12.75 16.329 14.149 16.68 16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 4.25L9 0.75L16.25 4.25"
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

export default PeopleRoof;
