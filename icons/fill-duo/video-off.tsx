import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VideoOff({
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
          d="M1.00101 5.75C1.00101 4.23079 2.23179 3 3.75101 3H10.251C11.7702 3 13.001 4.23079 13.001 5.75C13.001 5.94891 12.922 6.13968 12.7813 6.28033L4.28134 14.7803C4.14069 14.921 3.94992 15 3.75101 15C2.23179 15 1.00101 13.7692 1.00101 12.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 8C5.552 8 6 7.552 6 7C6 6.448 5.552 6 5 6C4.448 6 4 6.448 4 7C4 7.552 4.448 8 5 8Z"
          fill={fill}
        />
        <path
          d="M16.5313 1.46967C16.8242 1.76256 16.8242 2.23744 16.5313 2.53033L2.53134 16.5303C2.23844 16.8232 1.76357 16.8232 1.47068 16.5303C1.17778 16.2374 1.17778 15.7626 1.47068 15.4697L15.4707 1.46967C15.7636 1.17678 16.2384 1.17678 16.5313 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13 8.18298V11.2688L16.1488 13.0003C16.9809 13.4576 18.001 12.8561 18.001 11.905V6.09599C18.001 5.17077 17.0358 4.57656 16.2174 4.96562L13 8.18298Z"
          fill={fill}
        />
        <path
          d="M7.44743 13.7356C7.24485 13.9504 7.18686 14.2649 7.30092 14.5386C7.41739 14.818 7.69045 15 7.99319 15H10.251C11.7702 15 13.001 13.7692 13.001 12.25V11.2693L13 11.2688V8.18298L7.44743 13.7356Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default VideoOff;
