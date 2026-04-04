import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Lightbulb({
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
          d="M7.92199 1.86301C11.154 1.18801 14 3.63701 14 6.75001C14 8.70101 12.88 10.387 11.25 11.211V13.25H6.74999V11.211C4.85899 10.255 3.65399 8.14001 4.08799 5.79601C4.44699 3.85601 5.98999 2.26601 7.92199 1.86301Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.75 13.25H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 6.75001C14 3.63701 11.154 1.18801 7.92199 1.86301C5.98999 2.26601 4.44699 3.85601 4.08799 5.79601C3.65399 8.14001 4.85899 10.255 6.74999 11.211V14.25C6.74999 15.355 7.64499 16.25 8.74999 16.25H9.24999C10.355 16.25 11.25 15.355 11.25 14.25V11.211C12.88 10.387 14 8.70101 14 6.75001Z"
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

export default Lightbulb;
