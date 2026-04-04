import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folders({
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
          d="M11.124 9.75H14.75C15.578 9.75 16.25 10.422 16.25 11.25V14.75C16.25 15.578 15.578 16.25 14.75 16.25H7.25C6.422 16.25 5.75 15.578 5.75 14.75V9.25C5.75 8.422 6.422 7.75 7.25 7.75H8.601C9.016 7.75 9.412 7.92201 9.696 8.22501L11.125 9.75H11.124Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.251 6.5647V5.25C12.251 4.4219 11.5789 3.75 10.751 3.75H7.125L5.696 2.2251C5.412 1.9219 5.016 1.75 4.601 1.75H3.25C2.422 1.75 1.75 2.4219 1.75 3.25V8.75C1.75 9.4019 2.1689 9.9514 2.75 10.1582"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Folders;
