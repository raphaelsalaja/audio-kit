import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodeAction({
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
          d="M9 5.75C10.2426 5.75 11.25 4.74264 11.25 3.5C11.25 2.25736 10.2426 1.25 9 1.25C7.75736 1.25 6.75 2.25736 6.75 3.5C6.75 4.74264 7.75736 5.75 9 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.75C10.2426 16.75 11.25 15.7426 11.25 14.5C11.25 13.2574 10.2426 12.25 9 12.25C7.75736 12.25 6.75 13.2574 6.75 14.5C6.75 15.7426 7.75736 16.75 9 16.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 5.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.75C10.2426 5.75 11.25 4.74264 11.25 3.5C11.25 2.25736 10.2426 1.25 9 1.25C7.75736 1.25 6.75 2.25736 6.75 3.5C6.75 4.74264 7.75736 5.75 9 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.75C10.2426 16.75 11.25 15.7426 11.25 14.5C11.25 13.2574 10.2426 12.25 9 12.25C7.75736 12.25 6.75 13.2574 6.75 14.5C6.75 15.7426 7.75736 16.75 9 16.75Z"
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

export default CodeAction;
