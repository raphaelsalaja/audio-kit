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
          d="M5.95776 8.36987C5.25107 5.02534 5.56612 2.12596 6.662 1.89399C7.758 1.66199 9.22 4.18599 9.927 7.53199C9.972 7.42999 10.503 6.29099 11.795 6.04599C13.023 5.81299 13.903 6.58299 14 6.67099C13.293 3.32599 10.007 1.18699 6.662 1.89399C3.316 2.60099 1.178 5.88699 1.885 9.23199C1.938 9.11199 2.431 8.05199 3.649 7.76799C4.92393 7.47041 5.86703 8.28818 5.95776 8.36987Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.36401 10.1631L9.25001 14.776"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.722 6.90699C8.964 6.64399 9.852 7.45999 9.927 7.53199C9.972 7.42999 10.503 6.29099 11.795 6.04599C13.023 5.81299 13.903 6.58299 14 6.67099C13.293 3.32599 10.007 1.18699 6.662 1.89399C3.316 2.60099 1.178 5.88699 1.885 9.23199C1.938 9.11199 2.431 8.05199 3.649 7.76799C4.93 7.46899 5.876 8.29599 5.959 8.37099C5.999 8.27499 6.48 7.16999 7.722 6.90699Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.95799 8.37101C5.25099 5.02601 5.56599 2.12601 6.66199 1.89401C7.75799 1.66201 9.21999 4.18601 9.92699 7.53201"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 15.75C4.859 15.324 6.688 14.776 9 14.776C11.312 14.776 13.141 15.324 14.25 15.75"
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

export default UmbrellaBeach;
