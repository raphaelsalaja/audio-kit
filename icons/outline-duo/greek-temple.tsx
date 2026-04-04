import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GreekTemple({
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
          d="M9 7.25H14.25C14.802 7.25 15.25 6.802 15.25 6.25V5.836C15.25 5.474 15.054 5.14001 14.739 4.96301L9.489 2.02301C9.185 1.85301 8.81499 1.85301 8.51199 2.02301L3.261 4.96399C2.945 5.14099 2.75 5.475 2.75 5.837V6.251C2.75 6.803 3.198 7.251 3.75 7.251L9 7.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 15.25H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 7.25H14.25C14.802 7.25 15.25 6.802 15.25 6.25V5.836C15.25 5.474 15.054 5.14001 14.739 4.96301L9.489 2.02301C9.185 1.85301 8.81499 1.85301 8.51199 2.02301L3.261 4.96399C2.945 5.14099 2.75 5.475 2.75 5.837V6.251C2.75 6.803 3.198 7.251 3.75 7.251L9 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 15.25V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 15.25V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 15.25V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 15.25V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.75C9.552 5.75 10 5.302 10 4.75C10 4.198 9.552 3.75 9 3.75C8.448 3.75 8 4.198 8 4.75C8 5.302 8.448 5.75 9 5.75Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default GreekTemple;
