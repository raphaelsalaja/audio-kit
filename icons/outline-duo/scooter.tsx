import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Scooter({
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
          d="M6.8703 11.75C7.1129 12.1091 7.25 12.534 7.25 13C7.25 14.2426 6.2426 15.25 5 15.25C3.7574 15.25 2.75 14.2426 2.75 13C2.75 12.5375 2.88998 12.1069 3.12939 11.7493"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.8703 11.75C15.1129 12.1091 15.25 12.534 15.25 13C15.25 14.2426 14.2426 15.25 13 15.25C11.7574 15.25 10.75 14.2426 10.75 13C10.75 12.5372 10.8897 12.107 11.1294 11.7493"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.75 5.75H15C14.0335 5.75 13.25 4.9665 13.25 4C13.25 3.0335 14.0335 2.25 15 2.25H16.75V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.9254 8.25C16.162 9.2958 16.2715 10.4613 16.25 11.75H1.75V10.75C1.75 7.9886 3.9886 5.75 6.75 5.75H8.75V9.25H10.25C11.9069 9.25 13.25 7.9069 13.25 6.25V3.75H11"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 5.75H15C14.0335 5.75 13.25 4.9665 13.25 4C13.25 3.0335 14.0335 2.25 15 2.25H16.75V5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8703 11.75C15.1129 12.1091 15.25 12.534 15.25 13C15.25 14.2426 14.2426 15.25 13 15.25C11.7574 15.25 10.75 14.2426 10.75 13C10.75 12.5372 10.8897 12.107 11.1294 11.7493"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.8703 11.75C7.1129 12.1091 7.25 12.534 7.25 13C7.25 14.2426 6.2426 15.25 5 15.25C3.7574 15.25 2.75 14.2426 2.75 13C2.75 12.5372 2.88969 12.107 3.12939 11.7493"
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

export default Scooter;
