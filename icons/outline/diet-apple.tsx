import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DietApple({
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
          d="M5.92303 14.638C7.37103 15.733 8.71504 15.023 9.55704 15.023C10.638 15.023 12.549 16.197 14.443 13.206C16.416 10.092 15.932 6.567 14.464 5.405C12.869 4.138 11.073 5.182 9.55502 5.182C8.03702 5.182 6.42403 4.075 4.64603 5.405C4.50903 5.507 4.38204 5.622 4.26404 5.747"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 0.25C12.276 0.25 12.5 0.474 12.5 0.75C12.5 2.13 11.38 3.25 10 3.25C9.724 3.25 9.5 3.026 9.5 2.75C9.5 1.37 10.62 0.25 12 0.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.25 8.25H2.25C1.698 8.25 1.25 8.6977 1.25 9.25V11.25C1.25 11.8023 1.698 12.25 2.25 12.25H10.25C10.802 12.25 11.25 11.8023 11.25 11.25V9.25C11.25 8.6977 10.802 8.25 10.25 8.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 8.25V9.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 8.25V9.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DietApple;
