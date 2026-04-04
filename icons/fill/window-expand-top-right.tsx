import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowExpandTopRight({
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
          d="M2.75 8C3.1641 8 3.5 7.6641 3.5 7.25V4.75C3.5 4.0605 4.0605 3.5 4.75 3.5H13.25C13.9395 3.5 14.5 4.0605 14.5 4.75V13.25C14.5 13.9395 13.9395 14.5 13.25 14.5H10.75C10.3359 14.5 10 14.8359 10 15.25C10 15.6641 10.3359 16 10.75 16H13.25C14.7666 16 16 14.7666 16 13.25V4.75C16 3.2334 14.7666 2 13.25 2H4.75C3.2334 2 2 3.2334 2 4.75V7.25C2 7.6641 2.3359 8 2.75 8Z"
          fill={fill}
        />
        <path
          d="M6.25 9H4.75C3.23122 9 2 10.2312 2 11.75V13.25C2 14.7688 3.23122 16 4.75 16H6.25C7.76878 16 9 14.7688 9 13.25V11.75C9 10.2312 7.76878 9 6.25 9Z"
          fill={secondaryfill}
        />
        <path
          d="M8.96979 9.03027C9.26279 9.32327 9.7374 9.32327 10.0303 9.03027L11.5 7.56055V8.75012C11.5 9.16422 11.8359 9.50012 12.25 9.50012C12.6641 9.50012 13 9.16422 13 8.75012V5.75012C13 5.33602 12.6641 5.00012 12.25 5.00012H9.25C8.8359 5.00012 8.5 5.33602 8.5 5.75012C8.5 6.16422 8.8359 6.50012 9.25 6.50012H10.4395L8.96979 7.96985C8.67679 8.26285 8.67679 8.73737 8.96979 9.03027Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default WindowExpandTopRight;
