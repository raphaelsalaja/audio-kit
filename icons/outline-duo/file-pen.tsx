import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilePen({
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
          d="M10.3359 1.75C10.48 1.75 10.6212 1.78131 10.75 1.83984V5.25C10.75 5.802 11.198 6.25 11.75 6.25H15.1602C15.2188 6.37884 15.25 6.51984 15.25 6.66406V8.7793C14.7613 8.84191 14.2837 9.01318 13.8584 9.29785L13.6113 9.48047L13.3662 9.70215L10.2051 12.8633C10.0524 13.0159 9.92362 13.1894 9.82129 13.377L9.72754 13.5693L9.69434 13.6523L9.66211 13.7422L9.63184 13.8379L8.88281 16.4668L4.75 16.25C3.645 16.25 2.75 15.355 2.75 14.25V3.75C2.75 2.645 3.645 1.75 4.75 1.75H10.3359Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.7959 16.4542L16.9571 13.293C17.3476 12.9025 17.3476 12.2693 16.9571 11.8788L16.3713 11.293C15.9808 10.9025 15.3476 10.9025 14.9571 11.293L11.7959 14.4542L11.0001 17.2501L13.7959 16.4542Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 6.75H7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 9.75H10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.16 6.25001H11.75C11.198 6.25001 10.75 5.80201 10.75 5.25001V1.85202"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.04049V6.66399C15.25 6.39889 15.145 6.14399 14.957 5.95699L11.043 2.04288C10.855 1.85488 10.601 1.74988 10.336 1.74988H4.75C3.645 1.74988 2.75 2.64588 2.75 3.74988V14.2499C2.75 15.3539 3.645 16.2499 4.75 16.2499H8.1656"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 16.4542L16.9571 13.293C17.3476 12.9025 17.3476 12.2693 16.9571 11.8788L16.3713 11.293C15.9808 10.9025 15.3476 10.9025 14.9571 11.293L11.7959 14.4542L11.0001 17.2501L13.7959 16.4542Z"
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

export default FilePen;
