import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopePen({
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
          d="M13.7959 16.2042L16.9571 13.043C17.3476 12.6525 17.3476 12.0193 16.9571 11.6288L16.3713 11.043C15.9808 10.6525 15.3476 10.6525 14.9571 11.043L11.7959 14.2042L11.0001 17.0001L13.7959 16.2042Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 5.64296L8.565 9.54C8.84 9.673 9.16 9.673 9.434 9.54L16.25 5.64239V5.25C16.25 4.14543 15.3546 3.25 14.25 3.25H3.75C2.64543 3.25 1.75 4.14543 1.75 5.25V5.64296Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M1.75 5.75L8.517 9.483C8.818 9.649 9.182 9.649 9.483 9.483L16.25 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.7943V5.25C16.25 4.146 15.355 3.25 14.25 3.25H3.75C2.645 3.25 1.75 4.146 1.75 5.25V12.75C1.75 13.854 2.645 14.75 3.75 14.75H8.5215"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 16.2042L16.9571 13.043C17.3476 12.6525 17.3476 12.0193 16.9571 11.6288L16.3713 11.043C15.9808 10.6525 15.3476 10.6525 14.9571 11.043L11.7959 14.2042L11.0001 17.0001L13.7959 16.2042Z"
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

export default EnvelopePen;
