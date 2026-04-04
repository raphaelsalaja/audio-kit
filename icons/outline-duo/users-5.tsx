import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Users5({
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
          d="M5 9.25C5.9665 9.25 6.75 8.4665 6.75 7.5C6.75 6.5335 5.9665 5.75 5 5.75C4.0335 5.75 3.25 6.5335 3.25 7.5C3.25 8.4665 4.0335 9.25 5 9.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5 11.75C6.794 11.75 8.25 13.206 8.25 15V15.25C8.25 15.802 7.802 16.25 7.25 16.25H2.75C2.198 16.25 1.75 15.802 1.75 15.25V15C1.75 13.206 3.206 11.75 5 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5 9.25C5.9665 9.25 6.75 8.4665 6.75 7.5C6.75 6.5335 5.9665 5.75 5 5.75C4.0335 5.75 3.25 6.5335 3.25 7.5C3.25 8.4665 4.0335 9.25 5 9.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5 6.25C13.7426 6.25 14.75 5.24264 14.75 4C14.75 2.75736 13.7426 1.75 12.5 1.75C11.2574 1.75 10.25 2.75736 10.25 4C10.25 5.24264 11.2574 6.25 12.5 6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.21701 10.686C9.85601 9.531 11.087 8.75 12.5 8.75C14.571 8.75 16.25 10.429 16.25 12.5V15.25C16.25 15.802 15.802 16.25 15.25 16.25H10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 11.75C6.794 11.75 8.25 13.206 8.25 15V15.25C8.25 15.802 7.802 16.25 7.25 16.25H2.75C2.198 16.25 1.75 15.802 1.75 15.25V15C1.75 13.206 3.206 11.75 5 11.75Z"
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

export default Users5;
