import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjLeft({
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
          d="M4.75 2H3.75C2.7835 2 2 2.7835 2 3.75V14.25C2 15.2165 2.7835 16 3.75 16H4.75C5.7165 16 6.5 15.2165 6.5 14.25V3.75C6.5 2.7835 5.7165 2 4.75 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.25 8.25002H10.561L12.531 6.28005C12.824 5.98705 12.824 5.51202 12.531 5.21902C12.238 4.92602 11.763 4.92602 11.47 5.21902L8.21999 8.46902C7.92699 8.76202 7.92699 9.23705 8.21999 9.53005L11.47 12.7801C11.616 12.9261 11.808 13 12 13C12.192 13 12.384 12.9271 12.53 12.7801C12.823 12.4871 12.823 12.012 12.53 11.719L10.56 9.74905H16.249C16.663 9.74905 16.999 9.41305 16.999 8.99905C16.999 8.58505 16.663 8.24905 16.249 8.24905L16.25 8.25002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FollowObjLeft;
