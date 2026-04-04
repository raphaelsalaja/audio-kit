import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjLeft({
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
          d="M14.75 2H13.75C12.7835 2 12 2.7835 12 3.75V14.25C12 15.2165 12.7835 16 13.75 16H14.75C15.7165 16 16.5 15.2165 16.5 14.25V3.75C16.5 2.7835 15.7165 2 14.75 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.74999 8.25002H4.06099L6.03099 6.28005C6.32399 5.98705 6.32399 5.51202 6.03099 5.21902C5.73799 4.92602 5.26299 4.92602 4.96999 5.21902L1.71999 8.46902C1.42699 8.76202 1.42699 9.23705 1.71999 9.53005L4.96999 12.7801C5.11599 12.9261 5.30799 13 5.49999 13C5.69199 13 5.88399 12.9271 6.02999 12.7801C6.32299 12.4871 6.32299 12.012 6.02999 11.719L4.05999 9.74905H9.74899C10.163 9.74905 10.499 9.41305 10.499 8.99905C10.499 8.58505 10.163 8.24905 9.74899 8.24905L9.74999 8.25002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoveObjLeft;
