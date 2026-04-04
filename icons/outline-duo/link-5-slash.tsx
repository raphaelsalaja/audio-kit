import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Link5Slash({
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
          d="M2.587 4.51769L4.51901 2.58589C5.30001 1.80479 6.56598 1.80479 7.34698 2.58589L11.4385 6.67643L6.67756 11.4367L2.587 7.34609C1.806 6.56499 1.806 5.29869 2.587 4.51769Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.21088 12.9711L10.8221 15.5823C11.6031 16.3634 12.8695 16.3634 13.6505 15.5823L15.5823 13.6505C16.3634 12.8695 16.3634 11.6031 15.5823 10.8221L12.9711 8.21088L8.21088 12.9711Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.1221 11.1211L11.751 11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25101 6.25L9.00101 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.51901 4.94699C9.42201 4.73299 9.29199 4.52999 9.11499 4.35299L7.34698 2.58499C6.56598 1.80399 5.30001 1.80399 4.51901 2.58499L2.587 4.51699C1.806 5.29799 1.806 6.56399 2.587 7.34499L4.35501 9.11299C4.53101 9.28899 4.734 9.41999 4.949 9.51699"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5026 8.7406L15.416 10.654C16.197 11.435 16.197 12.701 15.416 13.482L13.484 15.414C12.703 16.195 11.437 16.195 10.656 15.414L8.74261 13.5006"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.00101 16L16.001 2"
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

export default Link5Slash;
