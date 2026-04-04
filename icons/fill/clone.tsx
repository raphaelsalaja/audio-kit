import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Clone({
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
          d="M14.5001 5.11719V10.25C14.5001 12.5933 12.5934 14.5 10.2501 14.5H5.11719C5.44609 15.6506 6.49528 16.5 7.75008 16.5H13.7501C15.2667 16.5 16.5001 15.2666 16.5001 13.75V7.75C16.5001 6.4951 15.6507 5.44579 14.5001 5.11719Z"
          fill={secondaryfill}
        />
        <path
          d="M10.25 1.5H4.25C2.73122 1.5 1.5 2.73122 1.5 4.25V10.25C1.5 11.7688 2.73122 13 4.25 13H10.25C11.7688 13 13 11.7688 13 10.25V4.25C13 2.73122 11.7688 1.5 10.25 1.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Clone;
