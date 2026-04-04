import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Laptop2({
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
          d="M13.75 14H4.25C2.733 14 1.5 12.767 1.5 11.25V4.75C1.5 3.233 2.733 2 4.25 2H13.75C15.267 2 16.5 3.233 16.5 4.75V11.25C16.5 12.767 15.267 14 13.75 14ZM4.25 3.5C3.561 3.5 3 4.061 3 4.75V11.25C3 11.939 3.561 12.5 4.25 12.5H13.75C14.439 12.5 15 11.939 15 11.25V4.75C15 4.061 14.439 3.5 13.75 3.5H4.25Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25 16H3.74999C2.1327 16 0.75459 14.9763 0.228287 13.5415C0.0291955 12.9987 0.498039 12.5 1.07617 12.5H16.9238C17.5019 12.5 17.9708 12.9987 17.7717 13.5415C17.2454 14.9763 15.8673 16 14.25 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Laptop2;
