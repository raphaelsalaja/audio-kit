import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Paperclip({
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
          d="M7.75 5V11.75C7.75 12.578 8.422 13.25 9.25 13.25C10.078 13.25 10.75 12.578 10.75 11.75V4.75C10.75 3.093 9.407 1.75 7.75 1.75C6.093 1.75 4.75 3.093 4.75 4.75V11.75C4.75 14.235 6.765 16.25 9.25 16.25C11.735 16.25 13.75 14.235 13.75 11.75V5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Paperclip;
