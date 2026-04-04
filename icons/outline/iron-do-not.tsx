import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function IronDoNot({
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
          d="M5.75 12.25H1.75C1.75 12.25 2.337 6.67001 2.537 4.77101C2.654 3.66001 3.658 2.861 4.767 2.995C6.376 3.19 7.985 3.385 9.594 3.58"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.8558 8.3864C14.4041 8.8807 14.8642 9.4794 15.204 10.159L16.25 12.25H9.99219"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 6.25L10.519 6.881C10.694 6.901 10.866 6.928 11.037 6.963"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.99219 15.25H16.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 10C7.164 10 7.5 9.664 7.5 9.25C7.5 8.836 7.164 8.5 6.75 8.5C6.336 8.5 6 8.836 6 9.25C6 9.664 6.336 10 6.75 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M2 16L16 2"
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

export default IronDoNot;
