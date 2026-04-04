import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EarthShield({
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
          d="M6.85461 2.04793C4.55874 2.61682 3.05356 4.72304 2.58795 5.70505C2.85039 6.71247 3.86288 8.96093 5.81335 9.89552C4.94986 8.70187 5.18692 7.2491 6.2705 6.41618C7.71176 5.30831 9.14568 7.13997 9.80065 6.61935C10.0648 6.37554 9.77525 4.79077 9.97843 3.85109C10.1562 3.37702 11.0248 2.54063 13.0769 2.9876C12.1372 2.17491 9.72446 1.33681 6.85461 2.04793Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.5 10.75L11.75 12V14.94C11.75 16.48 14.5 17.25 14.5 17.25V10.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.5 10.75L17.25 12V14.94C17.25 16.48 14.5 17.25 14.5 17.25C14.5 17.25 11.75 16.48 11.75 14.94V12L14.5 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.0008 2.98069L11.4893 2.9094C10.4948 2.8625 9.73549 3.7861 9.97369 4.7527L10.2457 5.8562C10.3051 6.0973 10.2086 6.3499 10.0036 6.4899C9.838 6.603 9.62659 6.6251 9.44119 6.5487L8.5141 6.1666C7.7892 5.8678 6.96159 5.9623 6.32269 6.4169C5.75689 6.8194 5.40529 7.4578 5.36749 8.1511L5.29651 9.4532"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.59174 5.7457C3.02034 6.8697 3.97034 8.6883 5.49664 9.6832C5.92254 9.9178 6.90034 10.6811 6.83234 11.8894C6.73914 13.5437 7.70383 13.6532 8.50253 14.2477C8.91253 14.5528 9.01712 15.4906 8.95712 16.2307"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75421 9.8474C6.74691 9.6381 7.94269 9.27061 9.31149 10.2039"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.94839 16.2498C4.96809 16.2221 1.75 12.9868 1.75 9C1.75 4.996 4.996 1.75 9 1.75C12.7451 1.75 15.826 4.5886 16.2096 8.2319"
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

export default EarthShield;
