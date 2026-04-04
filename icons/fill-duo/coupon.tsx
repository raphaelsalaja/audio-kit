import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Coupon({
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
          d="M1.5 3.75C1.5 2.23079 2.73079 1 4.25 1H13.75C15.2692 1 16.5 2.23079 16.5 3.75V6.25C16.5 7.76921 15.2692 9 13.75 9H9H4.25C2.73079 9 1.5 7.76921 1.5 6.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 5.25C9 4.83579 8.66421 4.5 8.25 4.5C7.83579 4.5 7.5 4.83579 7.5 5.25V15.25C7.5 16.6301 8.61915 17.75 10 17.75C11.3809 17.75 12.5 16.6301 12.5 15.25C12.5 13.8699 11.3809 12.75 10 12.75C9.64443 12.75 9.30622 12.8243 9 12.9581V5.25ZM9 15.25C9 15.8019 9.44785 16.25 10 16.25C10.5521 16.25 11 15.8019 11 15.25C11 14.6981 10.5521 14.25 10 14.25C9.44785 14.25 9 14.6981 9 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.37138 11.7065L9.36956 9H11.6149L10.5585 9.95687C10.5324 9.98053 10.505 10.002 10.4767 10.0213L5.66858 14.3617C5.66335 14.3664 5.65807 14.3711 5.65274 14.3756C5.21216 14.7642 4.63364 15 4 15C2.61915 15 1.5 13.8801 1.5 12.5C1.5 11.1199 2.61915 10 4 10C5.10337 10 6.03965 10.7151 6.37138 11.7065ZM3 12.5C3 11.9481 3.44785 11.5 4 11.5C4.55215 11.5 5 11.9481 5 12.5C5 13.0519 4.55215 13.5 4 13.5C3.44785 13.5 3 13.0519 3 12.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Coupon;
