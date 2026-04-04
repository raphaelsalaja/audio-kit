import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquarePaintbrush({
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
          d="M1.5 5.25C1.5 3.73079 2.73079 2.5 4.25 2.5H12.75C14.2692 2.5 15.5 3.73079 15.5 5.25V13.75C15.5 15.2692 14.2692 16.5 12.75 16.5H4.25C2.73079 16.5 1.5 15.2692 1.5 13.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10 9.5L16.3649 3.63116C16.9169 3.08116 16.9169 2.19106 16.3649 1.63116C15.8129 1.08116 14.9169 1.08116 14.3649 1.63116L8.5 8"
          fill={fill}
        />
        <path
          d="M6.43548 7.38193C7.60362 6.20329 9.47741 6.2191 10.6329 7.38124C11.7879 8.5429 11.7887 10.4135 10.6355 11.5763C9.79462 12.4372 8.83422 12.8688 7.7741 12.9762C6.74171 13.0808 5.65169 12.8743 4.53408 12.5382C4.24477 12.4513 4.0359 12.1992 4.00417 11.8988C3.97244 11.5983 4.12405 11.3082 4.3888 11.1627C4.81023 10.9311 5.00983 10.7174 5.12151 10.5393C5.2628 10.3139 5.3211 10.0491 5.3901 9.6365C5.49007 9.03864 5.63173 8.19254 6.43548 7.38193Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquarePaintbrush;
