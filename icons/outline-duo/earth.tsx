import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Earth({
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
          d="M8.63696 9.86229C7.60866 9.44829 6.30547 9.70092 5.78241 9.87898C6.01911 10.039 6.42389 10.3858 6.70054 10.9641C7.0347 11.6626 6.62959 12.3347 6.96763 13.034C7.27651 13.673 7.98121 13.7145 8.36986 14.1525C8.57018 14.4251 8.90405 15.2309 8.63696 16.2725C12.2694 16.4595 15.0472 13.2242 15.7595 11.911C15.587 11.3323 15.0648 10.573 14.0903 10.2419C13.1153 9.91067 11.8571 11.9113 10.7236 11.5149C9.995 11.2602 9.92234 10.3798 8.63696 9.86229Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.85461 2.04793C4.55874 2.61682 3.05356 4.72304 2.58795 5.70505C2.85039 6.71247 3.86288 8.96093 5.81335 9.89552C4.94986 8.70187 5.18692 7.2491 6.2705 6.41618C7.71176 5.30831 9.14568 7.13997 9.80065 6.61935C10.0648 6.37554 9.77525 4.79077 9.97843 3.85109C10.1562 3.37702 11.0248 2.54063 13.0769 2.9876C12.1372 2.17491 9.72446 1.33681 6.85461 2.04793Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C13.004 16.25 16.25 13.0041 16.25 9C16.25 4.9959 13.004 1.75 9 1.75C4.996 1.75 1.75 4.9959 1.75 9C1.75 13.0041 4.996 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75421 9.84739C6.90811 9.60409 8.3363 9.14719 9.9917 10.7675C12.1745 12.904 12.6914 7.98749 15.8171 11.2571"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.0008 2.9807L11.4893 2.9094C10.4948 2.8625 9.73549 3.7861 9.97369 4.7527L10.2457 5.8562C10.3051 6.0973 10.2086 6.3499 10.0036 6.4899C9.838 6.603 9.62659 6.6251 9.44119 6.5487L8.5141 6.1666C7.7892 5.8678 6.96159 5.9623 6.32269 6.4169C5.75689 6.8194 5.40529 7.4578 5.36749 8.1511L5.29651 9.4532"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.59174 5.7457C3.02034 6.8697 3.97034 8.6883 5.49664 9.6832C5.92254 9.9178 6.90034 10.6811 6.83234 11.8894C6.73914 13.5436 7.35882 13.633 8.15762 14.2274C8.56772 14.5326 8.67224 15.4704 8.61224 16.2104"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Earth;
