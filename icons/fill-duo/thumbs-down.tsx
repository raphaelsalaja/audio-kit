import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ThumbsDown({
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
          d="M16.81 8.54671L15.619 4.04671C15.2998 2.84071 14.2086 2.0007 12.961 2.0007H7.75C6.2312 2.0007 5 3.2319 5 4.7507V10.5067C5 11.1662 5.2372 11.8037 5.6683 12.3029L9.76349 17.0445C10.0531 17.3798 10.5808 17.4014 10.8725 17.068C11.2902 16.5907 11.7056 15.8066 11.3571 14.7542L10.4705 12.0008H14.0388C14.7945 12.0008 15.5493 11.7452 16.0836 11.2107C16.7973 10.4966 17.0627 9.4988 16.811 8.5468L16.81 8.54671Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.75 12.0007H2.75C1.785 12.0007 1 11.2157 1 10.2507V3.7507C1 2.7857 1.785 2.0007 2.75 2.0007H3.75C4.715 2.0007 5.5 2.7857 5.5 3.7507V10.2507C5.5 11.2157 4.715 12.0007 3.75 12.0007Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ThumbsDown;
