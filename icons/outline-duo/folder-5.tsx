import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder5({
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
          d="M14.25 5.75H3.75C2.64543 5.75 1.75 6.64543 1.75 7.75V13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25V7.75C16.25 6.64543 15.3546 5.75 14.25 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 7.75V3.75C1.75 3.198 2.198 2.75 2.75 2.75H6.547C6.835 2.75 7.11 2.875 7.3 3.092L9.625 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 5.75H3.75C2.64543 5.75 1.75 6.64543 1.75 7.75V13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25V7.75C16.25 6.64543 15.3546 5.75 14.25 5.75Z"
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

export default Folder5;
