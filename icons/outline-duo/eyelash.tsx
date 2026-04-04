import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Eyelash({
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
          d="M2.71201 10.693C2.68001 10.843 2.63701 10.99 2.58301 11.133C2.71001 10.797 2.77501 10.441 2.77501 10.081C2.77501 9.59 2.65301 9.106 2.41901 8.674"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.41499 9.766C6.35099 9.78 6.28799 9.792 6.22299 9.803C8.25099 9.465 9.73699 7.711 9.73799 5.655"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.04901 10.083C11.325 10.083 13.23 8.358 13.456 6.093"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.191 11.126C11.46 11.172 11.733 11.195 12.006 11.195C14.045 11.195 15.863 9.90799 16.539 7.98399"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.035 10.296C3.962 10.344 3.887 10.388 3.81 10.431C5.199 9.66799 5.96 8.11599 5.711 6.55099"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 11.5C14.712 12.178 12.48 11.931 10.639 10.825C7.557 8.97699 3.592 9.61899 1.25 12.345"
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

export default Eyelash;
