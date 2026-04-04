import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenInNewWindow({
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
          d="M14.25 16.5H4.25C2.7334 16.5 1.5 15.2666 1.5 13.75V3.75C1.5 3.3359 1.8359 3 2.25 3C2.6641 3 3 3.3359 3 3.75V13.75C3 14.4395 3.5605 15 4.25 15H14.25C14.6641 15 15 15.3359 15 15.75C15 16.1641 14.6641 16.5 14.25 16.5Z"
          fill={secondaryfill}
        />
        <path
          d="M13.7501 1.5H7.25009C5.73349 1.5 4.50009 2.7334 4.50009 4.25V6.75H9.93961L8.71988 5.53027C8.42688 5.23727 8.42688 4.76269 8.71988 4.46979C9.01288 4.17689 9.4875 4.17679 9.7804 4.46979L12.2804 6.96979C12.5734 7.26279 12.5734 7.73737 12.2804 8.03027L9.7804 10.5303C9.6339 10.6768 9.44249 10.75 9.25009 10.75C9.05769 10.75 8.86629 10.6768 8.71979 10.5303C8.42679 10.2373 8.42679 9.76269 8.71979 9.46979L9.93948 8.25012H4.5V10.7501C4.5 12.2667 5.7334 13.5001 7.25 13.5001H13.75C15.2666 13.5001 16.5 12.2667 16.5 10.7501V4.25012C16.5 2.73352 15.2667 1.5 13.7501 1.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OpenInNewWindow;
