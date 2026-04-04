import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserFocus({
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
          d="M11 2.25049C11 1.83627 11.3358 1.50049 11.75 1.50049H13.75C15.2692 1.50049 16.5 2.73128 16.5 4.25049V6.25049C16.5 6.6647 16.1642 7.00049 15.75 7.00049C15.3358 7.00049 15 6.6647 15 6.25049V4.25049C15 3.5597 14.4408 3.00049 13.75 3.00049H11.75C11.3358 3.00049 11 2.6647 11 2.25049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 9C10.105 9 11 8.105 11 7C11 5.895 10.105 5 9 5C7.895 5 7 5.895 7 7C7 8.105 7.895 9 9 9Z"
          fill={fill}
        />
        <path
          d="M5.08048 12.3163C5.93506 11.0704 7.37147 10.2505 8.99998 10.2505C10.6285 10.2505 12.0649 11.0704 12.9195 12.3163C13.0769 12.5459 13.0943 12.8438 12.9646 13.0901C12.8348 13.3364 12.5794 13.4906 12.301 13.4906H5.69898C5.4206 13.4906 5.16513 13.3364 5.0354 13.0901C4.90567 12.8438 4.92303 12.5459 5.08048 12.3163Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.75 11.0005C16.1642 11.0005 16.5 11.3363 16.5 11.7505V13.7505C16.5 15.2697 15.2692 16.5005 13.75 16.5005H11.75C11.3358 16.5005 11 16.1647 11 15.7505C11 15.3363 11.3358 15.0005 11.75 15.0005H13.75C14.4408 15.0005 15 14.4413 15 13.7505V11.7505C15 11.3363 15.3358 11.0005 15.75 11.0005Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.25 11.0005C2.66421 11.0005 3 11.3363 3 11.7505V13.7505C3 14.4413 3.55921 15.0005 4.25 15.0005H6.25C6.66421 15.0005 7 15.3363 7 15.7505C7 16.1647 6.66421 16.5005 6.25 16.5005H4.25C2.73079 16.5005 1.5 15.2697 1.5 13.7505V11.7505C1.5 11.3363 1.83579 11.0005 2.25 11.0005Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.25 3.00049C3.55921 3.00049 3 3.5597 3 4.25049V6.25049C3 6.6647 2.66421 7.00049 2.25 7.00049C1.83579 7.00049 1.5 6.6647 1.5 6.25049V4.25049C1.5 2.73128 2.73079 1.50049 4.25 1.50049H6.25C6.66421 1.50049 7 1.83627 7 2.25049C7 2.6647 6.66421 3.00049 6.25 3.00049H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default UserFocus;
