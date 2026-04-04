import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandHoldingHeart({
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
          d="M10.781 6.447C10.919 6.518 11.08 6.518 11.218 6.447C11.947 6.073 14.249 4.717 14.249 2.513C14.253 1.545 13.458 0.756 12.472 0.75C11.879 0.757 11.328 1.051 10.999 1.536C10.67 1.052 10.118 0.758 9.526 0.75C8.541 0.756 7.746 1.544 7.749 2.513C7.749 4.718 10.052 6.073 10.78 6.447H10.781Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M0 10.75C0 10.1977 0.447715 9.75 1 9.75H2C2.55228 9.75 3 10.1977 3 10.75V15.75C3 16.3023 2.55228 16.75 2 16.75H1C0.447715 16.75 0 16.3023 0 15.75V10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.437 12.965L15.254 10.791C15.966 10.47 16.803 10.786 17.125 11.498C17.446 12.21 17.13 13.047 16.418 13.369L9.62701 16.434C8.95101 16.739 8.18601 16.783 7.47901 16.557L3.00101 15.125"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.245 12.098L9.216 12.992C9.927 13.315 10.765 13 11.088 12.289C11.411 11.578 11.096 10.74 10.385 10.417L7.608 9.149C5.312 8.126 3.375 9.688 3 11.501"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 9.75H2C2.552 9.75 3 10.198 3 10.75V15.75C3 16.302 2.552 16.75 2 16.75H0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.781 6.447C10.919 6.518 11.08 6.518 11.218 6.447C11.947 6.073 14.249 4.717 14.249 2.513C14.253 1.545 13.458 0.756 12.472 0.75C11.879 0.757 11.328 1.051 10.999 1.536C10.67 1.052 10.118 0.758 9.526 0.75C8.541 0.756 7.746 1.544 7.749 2.513C7.749 4.718 10.052 6.073 10.78 6.447H10.781Z"
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

export default HandHoldingHeart;
