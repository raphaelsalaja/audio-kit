import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Workstation2({
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
          d="M11.75 11.75V14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.74999 14.75L0.949999 10.95C0.719999 10.72 0.69699 10.355 0.89699 10.098L2.99999 7.3941"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 14.75H2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 14.75H9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.98499 11.75H15.25C16.355 11.75 17.25 10.854 17.25 9.75V5.25C17.25 4.146 16.355 3.25 15.25 3.25H10.1172"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.29306 5.17996L3.31906 4.50998C2.99606 4.28798 2.55507 4.36996 2.33307 4.69296L1.87607 5.35794C1.65407 5.68094 1.73605 6.12197 2.05905 6.34397L3.03305 7.01395C3.81205 7.54995 3.50807 9.63597 5.07907 10.716L8.48306 5.76499C6.93706 4.70199 5.07407 5.71596 4.29407 5.17996H4.29306Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4.29306 5.17996L3.31906 4.50998C2.99606 4.28798 2.55507 4.36996 2.33307 4.69296L1.87607 5.35794C1.65407 5.68094 1.73605 6.12197 2.05905 6.34397L3.03305 7.01395C3.81205 7.54995 3.50807 9.63597 5.07907 10.716L8.48306 5.76499C6.93706 4.70199 5.07407 5.71596 4.29407 5.17996H4.29306Z"
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

export default Workstation2;
