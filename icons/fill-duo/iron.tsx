import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Iron({
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
          d="M10.605 6.13599C12.88 6.39699 14.85 7.77499 15.874 9.82399L16.9114 11.8978C17.0274 12.1298 17.025 12.423 16.888 12.644C16.751 12.865 16.51 13 16.25 13H1.74996C1.53696 13 1.33496 12.91 1.19196 12.752C1.05096 12.593 0.981962 12.382 1.00396 12.171L1.74895 5.10046L10.605 6.13599Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1 15.25C1 14.8358 1.33579 14.5 1.75 14.5H16.25C16.6642 14.5 17 14.8358 17 15.25C17 15.6642 16.6642 16 16.25 16H1.75C1.33579 16 1 15.6642 1 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.99896 9.49999C4.99896 10.052 5.44696 10.5 5.99896 10.5C6.55096 10.5 6.99896 10.052 6.99896 9.49999C6.99896 8.94799 6.55096 8.49999 5.99896 8.49999C5.44696 8.49999 4.99896 8.94799 4.99896 9.49999Z"
          fill={fill}
        />
        <path
          d="M8.99896 9.49999C8.99896 10.052 9.44696 10.5 9.99896 10.5C10.551 10.5 10.999 10.052 10.999 9.49999C10.999 8.94799 10.551 8.49999 9.99896 8.49999C9.44696 8.49999 8.99896 8.94799 8.99896 9.49999Z"
          fill={fill}
        />
        <path
          d="M3.28288 4.84956C3.35596 4.15558 3.98303 3.65588 4.67677 3.73955L9.50377 4.32455C9.91497 4.37439 10.2887 4.08144 10.3386 3.67024C10.3884 3.25903 10.0954 2.88529 9.68424 2.83545L4.85697 2.25042C3.33281 2.06625 1.95204 3.16453 1.79113 4.69246L1.74896 5.10046L3.23815 5.27459L3.28288 4.84956Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Iron;
