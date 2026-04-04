import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UmbrellaBeach({
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
          d="M7.72198 6.90699C8.96398 6.64399 9.85198 7.45999 9.92698 7.53199C9.97198 7.42999 10.503 6.29099 11.795 6.04599C13.023 5.81299 13.903 6.58299 14 6.67099C13.293 3.32599 10.007 1.18699 6.66198 1.89399C3.31598 2.60099 1.17797 5.887 1.88497 9.232C1.93797 9.112 2.43098 8.05199 3.64898 7.76799C4.92998 7.46899 5.87597 8.296 5.95897 8.371C5.99897 8.275 6.47998 7.16999 7.72198 6.90699Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.95802 8.37101C5.25102 5.02601 5.56603 2.12601 6.66203 1.89401C7.75803 1.66201 9.22003 4.18601 9.92703 7.53201"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 15.75C4.859 15.324 6.688 14.776 9 14.776C11.312 14.776 13.141 15.324 14.25 15.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.36401 10.1631L9.25002 14.776"
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

export default UmbrellaBeach;
