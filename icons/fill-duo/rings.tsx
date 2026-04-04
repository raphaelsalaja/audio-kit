import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Rings({
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
          d="M11.75 3.25C8.5791 3.25 6 5.8296 6 9C6 10.5591 6.6259 11.9731 7.637 13.0103C8.1434 12.8326 8.6002 12.5567 8.998 12.212C8.0889 11.4317 7.5 10.2891 7.5 9.0001C7.5 6.6568 9.4062 4.7501 11.75 4.7501C14.0938 4.7501 16 6.6568 16 9.0001C16 11.3434 14.0938 13.2501 11.75 13.2501C11.2611 13.2501 10.7987 13.1505 10.3612 12.9977C9.9588 13.4118 9.4928 13.7589 8.9819 14.0373C9.8037 14.4904 10.7469 14.7502 11.75 14.7502C14.9209 14.7502 17.5 12.1706 17.5 9.0002C17.5 5.8298 14.9209 3.25 11.75 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10.3729 5.001C9.8642 5.1778 9.4049 5.4463 9.0052 5.791C9.9125 6.5713 10.5001 7.7124 10.5001 9C10.5001 11.3433 8.5939 13.25 6.2501 13.25C3.9063 13.25 2.0001 11.3433 2.0001 9C2.0001 6.6567 3.9063 4.75 6.2501 4.75C6.7445 4.75 7.2121 4.8511 7.6538 5.0068C8.0538 4.5971 8.4976 4.2309 9.0042 3.9546C8.1858 3.5059 7.2474 3.25 6.2501 3.25C3.0791 3.25 0.5 5.8296 0.5 9C0.5 12.1704 3.0791 14.75 6.25 14.75C9.4209 14.75 12 12.1704 12 9C12 7.4463 11.3779 6.0366 10.3729 5.001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Rings;
