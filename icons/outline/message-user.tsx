import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageUser({
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
          d="M16.25 6.3298V4.25C16.25 3.146 15.355 2.25 14.25 2.25H3.75C2.645 2.25 1.75 3.146 1.75 4.25V11.25C1.75 12.354 2.645 13.25 3.75 13.25H5.75V16.25L8.76169 13.8408"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 11C15.0784 11 15.75 10.3284 15.75 9.5C15.75 8.67157 15.0784 8 14.25 8C13.4216 8 12.75 8.67157 12.75 9.5C12.75 10.3284 13.4216 11 14.25 11Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M16.3511 16H12.149C11.7423 16 11.3585 15.8013 11.1217 15.4683C10.8893 15.1407 10.8287 14.7207 10.9596 14.3453C11.4479 12.943 12.7701 12.0001 14.2501 12.0001C15.7301 12.0001 17.0523 12.943 17.5411 14.3458C17.6715 14.7208 17.611 15.1407 17.3786 15.4684C17.1418 15.8014 16.7578 16 16.3511 16Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MessageUser;
