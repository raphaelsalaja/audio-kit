import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayerReplace({
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
          d="M9.25 15.75H14.25C15.0784 15.75 15.75 15.078 15.75 14.25V9.25C15.75 8.422 15.0784 7.75 14.25 7.75H9.25C8.4216 7.75 7.75 8.422 7.75 9.25V14.25C7.75 15.078 8.4216 15.75 9.25 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.25 15.75H14.25C15.0784 15.75 15.75 15.078 15.75 14.25V9.25C15.75 8.422 15.0784 7.75 14.25 7.75H9.25C8.4216 7.75 7.75 8.422 7.75 9.25V14.25C7.75 15.078 8.4216 15.75 9.25 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 10.25H3.75C2.922 10.25 2.25 9.578 2.25 8.75V3.75C2.25 2.922 2.922 2.25 3.75 2.25H8.75C9.578 2.25 10.25 2.922 10.25 3.75V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 15.75C3.593 15.75 2.25 14.407 2.25 12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 2.25C14.407 2.25 15.75 3.593 15.75 5.25"
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

export default LayerReplace;
