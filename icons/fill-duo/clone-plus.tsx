import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClonePlus({
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
          d="M10.25 1.5H4.25C2.73122 1.5 1.5 2.73122 1.5 4.25V10.25C1.5 11.7688 2.73122 13 4.25 13H10.25C11.7688 13 13 11.7688 13 10.25V4.25C13 2.73122 11.7688 1.5 10.25 1.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.75 5H13V10.25C13 11.7666 11.7666 13 10.25 13H5V13.75C5 15.2666 6.2334 16.5 7.75 16.5H13.75C15.2666 16.5 16.5 15.2666 16.5 13.75V7.75C16.5 6.2334 15.2666 5 13.75 5Z"
          fill={fill}
        />
        <path
          d="M7.25 10.25C6.8359 10.25 6.5 9.9141 6.5 9.5V5C6.5 4.5859 6.8359 4.25 7.25 4.25C7.6641 4.25 8 4.5859 8 5V9.5C8 9.9141 7.6641 10.25 7.25 10.25Z"
          fill={fill}
        />
        <path
          d="M9.5 8H5C4.5859 8 4.25 7.6641 4.25 7.25C4.25 6.8359 4.5859 6.5 5 6.5H9.5C9.9141 6.5 10.25 6.8359 10.25 7.25C10.25 7.6641 9.9141 8 9.5 8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ClonePlus;
