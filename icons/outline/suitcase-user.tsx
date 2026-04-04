import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseUser({
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
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 12C15.3284 12 16 11.3284 16 10.5C16 9.67157 15.3284 9 14.5 9C13.6716 9 13 9.67157 13 10.5C13 11.3284 13.6716 12 14.5 12Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M16.25 7.20392V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H8.9433"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.6011 17H12.399C11.9923 17 11.6085 16.8013 11.3717 16.4683C11.1393 16.1407 11.0787 15.7207 11.2096 15.3453C11.6979 13.943 13.0201 13.0001 14.5001 13.0001C15.9801 13.0001 17.3023 13.943 17.7911 15.3458C17.9215 15.7208 17.8609 16.1407 17.6285 16.4684C17.3917 16.8014 17.0078 17 16.6011 17Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SuitcaseUser;
