import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCopyPlus2({
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
          d="M7.25012 13.5C10.6964 13.5 13.5001 10.6963 13.5001 7.25C13.5001 3.8037 10.6964 1 7.25012 1C3.80382 1 1.00012 3.8037 1.00012 7.25C1.00012 10.6963 3.80382 13.5 7.25012 13.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.5001 7.25005C13.5001 10.6964 10.6964 13.5001 7.25011 13.5001C6.43657 13.5001 5.65884 13.3438 4.94534 13.0598C5.86528 15.3659 8.11954 17 10.7501 17C14.1964 17 17.0001 14.1963 17.0001 10.75C17.0001 8.11938 15.366 5.86519 13.0598 4.94531C13.3439 5.6588 13.5001 6.43652 13.5001 7.25005Z"
          fill={fill}
        />
        <path
          d="M6.50012 6.5H4.75012C4.33602 6.5 4.00012 6.8359 4.00012 7.25C4.00012 7.6641 4.33602 8 4.75012 8H6.50012V9.75C6.50012 10.1641 6.83602 10.5 7.25012 10.5C7.66422 10.5 8.00012 10.1641 8.00012 9.75V8H9.75012C10.1642 8 10.5001 7.6641 10.5001 7.25C10.5001 6.8359 10.1642 6.5 9.75012 6.5H8.00012V4.75C8.00012 4.3359 7.66422 4 7.25012 4C6.83602 4 6.50012 4.3359 6.50012 4.75V6.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleCopyPlus2;
