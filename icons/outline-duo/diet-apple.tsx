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
          d="M10.25 8.25H2.25C1.69772 8.25 1.25 8.69772 1.25 9.25V11.25C1.25 11.8023 1.69772 12.25 2.25 12.25H10.25C10.8023 12.25 11.25 11.8023 11.25 11.25V9.25C11.25 8.69772 10.8023 8.25 10.25 8.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.92301 14.638C7.37101 15.733 8.71501 15.023 9.55701 15.023C10.638 15.023 12.549 16.197 14.443 13.206C16.416 10.092 15.932 6.56697 14.464 5.40497C12.869 4.13797 11.073 5.18197 9.55501 5.18197C8.03701 5.18197 6.42401 4.07497 4.64601 5.40497C4.50901 5.50697 4.38201 5.62197 4.26401 5.74697"
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
          d="M7.75 8.25V9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 8.25V9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 8.25H2.25C1.69772 8.25 1.25 8.69772 1.25 9.25V11.25C1.25 11.8023 1.69772 12.25 2.25 12.25H10.25C10.8023 12.25 11.25 11.8023 11.25 11.25V9.25C11.25 8.69772 10.8023 8.25 10.25 8.25Z"
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

export default DietApple;
