import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Compose2({
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
          d="M4.75 3.5C4.05921 3.5 3.5 4.05921 3.5 4.75V13.25C3.5 13.9408 4.05921 14.5 4.75 14.5H13.25C13.9408 14.5 14.5 13.9408 14.5 13.25V9.2422C14.5 8.82799 14.8358 8.4922 15.25 8.4922C15.6642 8.4922 16 8.82799 16 9.2422V13.25C16 14.7692 14.7692 16 13.25 16H4.75C3.23079 16 2 14.7692 2 13.25V4.75C2 3.23079 3.23079 2 4.75 2H8.75781C9.17202 2 9.50781 2.33579 9.50781 2.75C9.50781 3.16421 9.17202 3.5 8.75781 3.5H4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.3121 1.68785C15.5891 0.964849 14.3281 0.964849 13.6051 1.68785L7.96124 7.33173C7.31524 7.97773 7.08424 9.38973 7.00524 10.1727C6.98324 10.3967 7.06224 10.6197 7.22124 10.7787C7.36324 10.9207 7.55324 10.9987 7.75124 10.9987C7.77624 10.9987 7.80224 10.9977 7.82624 10.9947C8.61024 10.9147 10.0212 10.6857 10.6682 10.0387L16.3131 4.39385C17.0571 3.64785 17.0561 2.43485 16.3121 1.68785Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Compose2;
