import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function IronDoNot({
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
          d="M11.6583 6.3417C11.3165 6.2464 10.9645 6.17724 10.605 6.13599L1.74895 5.10046L1.00396 12.171C0.981962 12.382 1.05096 12.593 1.19196 12.752C1.33496 12.91 1.53696 13 1.74996 13H4.99999L11.6583 6.3417Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.28288 4.84956C3.35596 4.15558 3.98303 3.65588 4.67677 3.73955L9.50377 4.32455C9.91497 4.37439 10.2887 4.08144 10.3386 3.67024C10.3884 3.25903 10.0954 2.88529 9.68424 2.83545L4.85697 2.25042C3.33281 2.06625 1.95204 3.16453 1.79113 4.69246L1.74896 5.10046L3.23815 5.27459L3.28288 4.84956Z"
          fill={fill}
        />
        <path
          d="M5.18195 16H16.25C16.6642 16 17 15.6642 17 15.25C17 14.8358 16.6642 14.5 16.25 14.5H6.68195L5.18195 16Z"
          fill={fill}
        />
        <path
          d="M8.18195 13H16.2499C16.5099 13 16.7509 12.865 16.8879 12.644C17.0249 12.423 17.0039 12.083 16.8879 11.851L15.8739 9.82399C15.3801 8.83583 14.6662 8.00372 13.8042 7.3777L8.18195 13Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default IronDoNot;
