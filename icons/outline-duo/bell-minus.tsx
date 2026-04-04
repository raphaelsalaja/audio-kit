import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BellMinus({
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
          d="M9.56094 2.23437C9.21178 2.63079 8.99999 3.18021 8.99999 3.75C8.99999 4.99264 10.0074 6 11.25 6H13.724C13.7412 6.16432 13.75 6.33113 13.75 6.5L13.75 10.7869C13.75 11.8919 14.645 12.7869 15.75 12.7869H2.25C3.355 12.7869 4.25 11.8919 4.25 10.7869L4.24999 6.5C4.24999 3.877 6.37699 1.75 8.99999 1.75C9.18061 1.75 9.56094 1.7209 9.56094 2.23437Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.5 15.3843C10.2005 15.9018 9.6409 16.25 9 16.25C8.3591 16.25 7.7995 15.9018 7.5 15.3843"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 1.75C6.377 1.75 4.25 3.877 4.25 6.5V10.75C4.25 11.855 3.355 12.75 2.25 12.75H15.75C14.645 12.75 13.75 11.855 13.75 10.75V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 3.75H11.25"
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

export default BellMinus;
