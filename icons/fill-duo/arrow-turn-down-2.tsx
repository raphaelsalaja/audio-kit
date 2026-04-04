import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTurnDown2({
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
          d="M8.25 15.75C7.836 15.75 7.5 15.414 7.5 15V4.75C7.5 3.233 8.733 2 10.25 2H14.25C14.664 2 15 2.336 15 2.75C15 3.164 14.664 3.5 14.25 3.5H10.25C9.561 3.5 9 4.061 9 4.75V15C9 15.414 8.664 15.75 8.25 15.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.24999 16C8.05799 16 7.86599 15.927 7.71999 15.78L3.46999 11.53C3.17699 11.237 3.17699 10.762 3.46999 10.469C3.76299 10.176 4.238 10.176 4.531 10.469L8.251 14.189L11.971 10.469C12.264 10.176 12.739 10.176 13.032 10.469C13.325 10.762 13.325 11.237 13.032 11.53L8.78201 15.78C8.63601 15.926 8.44401 16 8.25201 16H8.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTurnDown2;
