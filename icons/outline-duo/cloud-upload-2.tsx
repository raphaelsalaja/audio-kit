import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudUpload2({
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
          d="M9 2.25C11.362 2.25 13.278 4.077 13.464 6.391C15.065 6.818 16.25 8.264 16.25 10C16.25 12.071 14.571 13.75 12.5 13.75H12V14H6V13.75H4.75C3.093 13.75 1.75 12.407 1.75 10.75C1.75 9.137 3.027 7.83 4.624 7.763C4.549 7.436 4.5 7.1 4.5 6.75C4.5 4.265 6.515 2.25 9 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12 13.75H12.5C14.571 13.75 16.25 12.071 16.25 10C16.25 8.264 15.065 6.818 13.464 6.391C13.278 4.077 11.362 2.25 9 2.25C6.515 2.25 4.5 4.265 4.5 6.75C4.5 7.1 4.549 7.436 4.624 7.763C3.027 7.83 1.75 9.137 1.75 10.75C1.75 12.407 3.093 13.75 4.75 13.75H6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 10.5L9 8.25L11.25 10.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.25V17.25"
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

export default CloudUpload2;
