import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TopHat({
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
          d="M3.16505 3.96202C3.03069 2.91015 3.85676 2.00098 4.9 2.00098H13.1C14.1432 2.00098 14.9693 2.91014 14.835 3.96202C14.6537 5.38077 14.5339 6.95433 14.531 8.68926C14.5281 10.9398 14.7252 12.9421 14.9909 14.6336C15.0249 14.8502 14.9625 15.0708 14.82 15.2374C14.6775 15.4041 14.4692 15.5 14.25 15.5H3.75001C3.53075 15.5 3.32248 15.4041 3.17998 15.2374C3.03749 15.0708 2.97506 14.8501 3.0091 14.6335C3.27487 12.9428 3.47292 10.9395 3.469 8.68929C3.46605 6.95525 3.34775 5.39236 3.16505 3.96202Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.36902 11.5C3.40433 11.0155 3.43142 10.5152 3.44843 10H14.5518C14.5689 10.5153 14.596 11.0156 14.6313 11.5H3.36902Z"
          fill={fill}
        />
        <path
          d="M1.25 12C1.66421 12 2 12.3358 2 12.75C2 13.4408 2.55921 14 3.25 14H14.75C15.4408 14 16 13.4408 16 12.75C16 12.3358 16.3358 12 16.75 12C17.1642 12 17.5 12.3358 17.5 12.75C17.5 14.2692 16.2692 15.5 14.75 15.5H3.25C1.73079 15.5 0.5 14.2692 0.5 12.75C0.5 12.3358 0.835786 12 1.25 12Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TopHat;
