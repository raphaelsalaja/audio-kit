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
          d="M14.5001 5.11719V10.25C14.5001 12.5933 12.5934 14.5 10.2501 14.5H5.11719C5.44609 15.6506 6.49529 16.5 7.75009 16.5H13.7501C15.2667 16.5 16.5001 15.2666 16.5001 13.75V7.75C16.5001 6.4951 15.6507 5.44579 14.5001 5.11719Z"
          fill={secondaryfill}
        />
        <path
          d="M10.25 1.5H4.25C2.7334 1.5 1.5 2.7334 1.5 4.25V10.25C1.5 11.7666 2.7334 13 4.25 13H10.25C11.7666 13 13 11.7666 13 10.25V4.25C13 2.7334 11.7666 1.5 10.25 1.5ZM9.5 8H8V9.5C8 9.9141 7.6641 10.25 7.25 10.25C6.8359 10.25 6.5 9.9141 6.5 9.5V8H5C4.5859 8 4.25 7.6641 4.25 7.25C4.25 6.8359 4.5859 6.5 5 6.5H6.5V5C6.5 4.5859 6.8359 4.25 7.25 4.25C7.6641 4.25 8 4.5859 8 5V6.5H9.5C9.9141 6.5 10.25 6.8359 10.25 7.25C10.25 7.6641 9.9141 8 9.5 8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ClonePlus;
