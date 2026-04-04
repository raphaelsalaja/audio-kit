import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Boot({
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
          d="M3.4213 4.75L3.722 10.016L3.723 10.015C3.74 10.316 3.687 10.61 3.574 10.889C3.375 11.383 3.161 12.123 3.188 13.031C3.218 14.053 3.539 14.83 3.75 15.25L4 16.25H8.25C8.2915 16.0835 8.33325 15.9167 8.375 15.75C8.41675 15.5833 8.4585 15.4165 8.5 15.25C9.192 15.572 10.1 15.906 11.196 16.094C12.913 16.389 14.403 16.207 15.466 15.961C15.924 15.855 16.25 15.453 16.25 14.983V13.484C16.25 12.489 15.518 11.645 14.533 11.504L11.974 11.139C10.433 10.919 9.317 9.557 9.403 8.003L9.58352 4.75H3.4213Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.421 4.75H9.583"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 7.75H9.417"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.722 10.016L3.25 1.75H9.75L9.403 8.003C9.317 9.557 10.433 10.919 11.974 11.139L14.533 11.504C15.518 11.645 16.25 12.489 16.25 13.484V14.983C16.25 15.453 15.924 15.855 15.466 15.961C14.403 16.207 12.913 16.389 11.196 16.094C10.1 15.906 9.192 15.572 8.5 15.25C8.417 15.583 8.333 15.917 8.25 16.25H4L3.75 15.25C3.539 14.83 3.218 14.053 3.188 13.031C3.161 12.123 3.375 11.383 3.574 10.889C3.687 10.61 3.74 10.316 3.723 10.015L3.722 10.016Z"
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

export default Boot;
