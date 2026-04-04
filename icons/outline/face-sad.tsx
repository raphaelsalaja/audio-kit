import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSad({
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
          d="M5.5 10C6.052 10 6.5 9.5523 6.5 9C6.5 8.4477 6.052 8 5.5 8C4.948 8 4.5 8.4477 4.5 9C4.5 9.5523 4.948 10 5.5 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M11.5 10C12.052 10 12.5 9.5523 12.5 9C12.5 8.4477 12.052 8 11.5 8C10.948 8 10.5 8.4477 10.5 9C10.5 9.5523 10.948 10 11.5 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M9.25 13.75C10.078 13.75 10.75 13.0784 10.75 12.25C10.75 11.4216 10.078 10.75 9.25 10.75C8.422 10.75 7.75 11.4216 7.75 12.25C7.75 13.0784 8.422 13.75 9.25 13.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 6.75C14.578 6.75 15.25 6.0784 15.25 5.25C15.25 4.4216 14.578 3.75 13.75 3.75C12.922 3.75 12.25 4.4216 12.25 5.25C12.25 6.0784 12.922 6.75 13.75 6.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5993 2.0647C9.9342 1.8635 9.2309 1.75 8.5 1.75C4.496 1.75 1.25 4.9961 1.25 9C1.25 13.0039 4.496 16.25 8.5 16.25C12.415 16.25 15.5968 13.1445 15.7367 9.2637"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 5.25V0.75C15.25 0.75 15.896 1.646 17.25 2.25"
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

export default FaceSad;
