import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquarePlus2({
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
          d="M14.75 7.99999C13.5098 7.99999 12.5 6.99069 12.5 5.74999V5.49999H12.25C11.0098 5.49999 10 4.49069 10 3.24999C10 3.12658 10.0121 3.00636 10.0325 2.88879C10.0623 2.71694 5.32989 2.74999 4.75 2.74999C3.6454 2.74999 2.75 3.64549 2.75 4.74999V13.25C2.75 14.3545 3.6454 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3545 15.25 13.25C15.25 12.7302 15.2718 7.93946 15.1143 7.96702C14.9958 7.98778 14.8745 7.99999 14.75 7.99999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 0.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.2959 2.75H4.75C3.645 2.75 2.75 3.645 2.75 4.75V13.25C2.75 14.355 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.355 15.25 13.25V8.7041"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 3.25H12.25"
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

export default SquarePlus2;
