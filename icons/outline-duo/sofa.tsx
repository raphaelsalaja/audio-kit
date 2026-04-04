import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sofa({
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
          d="M2.75 6.75C3.578 6.75 4.25 7.422 4.25 8.25V10.25H9H13.75V8.25C13.75 7.422 14.422 6.75 15.25 6.75V4.75C15.25 3.645 14.355 2.75 13.25 2.75H4.75C3.645 2.75 2.75 3.645 2.75 4.75V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.75 6.75V4.75C2.75 3.645 3.645 2.75 4.75 2.75H13.25C14.355 2.75 15.25 3.645 15.25 4.75V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 2.75V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.25H14.75C15.855 13.25 16.75 12.355 16.75 11.25V8.25C16.75 7.422 16.078 6.75 15.25 6.75C14.422 6.75 13.75 7.422 13.75 8.25V10.25H9H4.25V8.25C4.25 7.422 3.578 6.75 2.75 6.75C1.922 6.75 1.25 7.422 1.25 8.25V11.25C1.25 12.355 2.145 13.25 3.25 13.25H9Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 13.25V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 13.25V15.25"
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

export default Sofa;
