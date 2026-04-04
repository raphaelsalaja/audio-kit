import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowExpandTopLeft({
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
          d="M8 15.25C8 14.8359 7.6641 14.5 7.25 14.5H4.75C4.0605 14.5 3.5 13.9395 3.5 13.25V4.75C3.5 4.0605 4.0605 3.5 4.75 3.5H13.25C13.9395 3.5 14.5 4.0605 14.5 4.75V7.25C14.5 7.6641 14.8359 8 15.25 8C15.6641 8 16 7.6641 16 7.25V4.75C16 3.2334 14.7666 2 13.25 2H4.75C3.2334 2 2 3.2334 2 4.75V13.25C2 14.7666 3.2334 16 4.75 16H7.25C7.6641 16 8 15.6641 8 15.25Z"
          fill={fill}
        />
        <path
          d="M13.25 9H11.75C10.2312 9 9 10.2312 9 11.75V13.25C9 14.7688 10.2312 16 11.75 16H13.25C14.7688 16 16 14.7688 16 13.25V11.75C16 10.2312 14.7688 9 13.25 9Z"
          fill={secondaryfill}
        />
        <path
          d="M9.03021 9.03027C9.32321 8.73727 9.32321 8.26275 9.03021 7.96985L7.56052 6.50012H8.75C9.1641 6.50012 9.5 6.16422 9.5 5.75012C9.5 5.33602 9.1641 5.00012 8.75 5.00012H5.75C5.3359 5.00012 5 5.33602 5 5.75012V8.75012C5 9.16422 5.3359 9.50012 5.75 9.50012C6.1641 9.50012 6.5 9.16422 6.5 8.75012V7.56055L7.9697 9.03027C8.2627 9.32327 8.73731 9.32327 9.03021 9.03027Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default WindowExpandTopLeft;
