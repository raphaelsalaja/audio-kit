import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EarthPosition({
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
          d="M9.08151 1.91746C9.02804 2.18668 9 2.46506 9 2.74999C9 3.7419 9.31746 5.12023 10.375 5.99609C10.1953 6.30078 10.0312 6.46875 9.80071 6.61935C9.53529 6.83032 9.14195 6.65501 8.67204 6.44556C7.98237 6.13817 7.12776 5.75726 6.27056 6.41617C5.18698 7.2491 4.94992 8.70188 5.81342 9.89553C3.86294 8.96093 2.85045 6.71247 2.58801 5.70506C3.05362 4.72305 4.5588 2.61681 6.85468 2.04792C7.06387 1.99608 9.15809 1.53189 9.08151 1.91746Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.63696 9.86229C7.60866 9.44829 6.30547 9.70092 5.78241 9.87898C6.01911 10.039 6.42389 10.3858 6.70054 10.9641C7.0347 11.6626 6.62959 12.3347 6.96763 13.034C7.27651 13.673 7.98121 13.7145 8.36986 14.1525C8.57018 14.4251 8.90405 15.2309 8.63696 16.2725C12.2694 16.4595 14.7882 14.1525 15.9022 11.5149C15.6051 10.9641 15.0695 10.619 14.095 10.2879C13.12 9.9567 11.8571 11.9113 10.7236 11.5149C9.995 11.2602 9.92234 10.3798 8.63696 9.86229Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 4.75C14.3546 4.75 15.25 3.85457 15.25 2.75C15.25 1.64543 14.3546 0.75 13.25 0.75C12.1454 0.75 11.25 1.64543 11.25 2.75C11.25 3.85457 12.1454 4.75 13.25 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 4.75C14.3546 4.75 15.25 3.85457 15.25 2.75C15.25 1.64543 14.3546 0.75 13.25 0.75C12.1454 0.75 11.25 1.64543 11.25 2.75C11.25 3.85457 12.1454 4.75 13.25 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 4.75V7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.29649 9.45319L5.36749 8.15109C5.40529 7.45779 5.75689 6.81939 6.32269 6.41689C6.96159 5.96229 7.7891 5.8678 8.5141 6.1666L9.44119 6.54869C9.58799 6.60919 9.751 6.60789 9.8947 6.54869"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.59171 5.7457C3.02031 6.8697 3.9703 8.6883 5.4966 9.6832C5.9225 9.9178 6.90031 10.6811 6.83231 11.8894C6.73911 13.5437 7.49169 13.4869 8.29049 14.0814C8.70059 14.3865 8.8051 15.3243 8.7451 16.0644"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.7542 9.84739C6.9081 9.60409 8.3363 9.14719 9.9917 10.7675C12.1745 12.904 12.6914 7.9875 15.8171 11.2571"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.34779 1.78299C4.64989 2.11329 1.75 5.21609 1.75 8.99999C1.75 13.0042 4.996 16.25 9 16.25C13.004 16.25 16.25 13.0042 16.25 8.99999C16.25 8.63789 16.2148 8.28489 16.1635 7.93699"
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

export default EarthPosition;
