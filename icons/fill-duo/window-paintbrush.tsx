import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowPaintbrush({
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
          d="M3.75 2C2.22957 2 1 3.23701 1 4.75V13.25C1 14.763 2.22957 16 3.75 16H14.25C15.7704 16 17 14.763 17 13.25V4.75C17 3.23701 15.7704 2 14.25 2H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11 9.5L17.3649 3.63116C17.9169 3.08116 17.9169 2.19106 17.3649 1.63116C16.8129 1.08116 15.9169 1.08116 15.3649 1.63116L9.5 8"
          fill={fill}
        />
        <path
          d="M3.75 5.5C4.1642 5.5 4.5 5.16 4.5 4.75C4.5 4.34 4.1642 4 3.75 4C3.3358 4 3 4.34 3 4.75C3 5.16 3.3358 5.5 3.75 5.5Z"
          fill={fill}
        />
        <path
          d="M6.25 5.5C6.6642 5.5 7 5.16 7 4.75C7 4.34 6.6642 4 6.25 4C5.8358 4 5.5 4.34 5.5 4.75C5.5 5.16 5.8358 5.5 6.25 5.5Z"
          fill={fill}
        />
        <path
          d="M7.43548 7.38193C8.60362 6.20329 10.4774 6.2191 11.6329 7.38124C12.7879 8.5429 12.7887 10.4135 11.6355 11.5763C10.7946 12.4372 9.83422 12.8688 8.7741 12.9762C7.74171 13.0808 6.65169 12.8743 5.53408 12.5382C5.24477 12.4513 5.0359 12.1992 5.00417 11.8988C4.97244 11.5983 5.12405 11.3082 5.3888 11.1627C5.81023 10.9311 6.00983 10.7174 6.12151 10.5393C6.2628 10.3139 6.3211 10.0491 6.3901 9.6365C6.49007 9.03864 6.63173 8.19254 7.43548 7.38193Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default WindowPaintbrush;
