import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudDownload2({
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
          d="M3.54903 12H13.8491C15.2535 11.4583 16.25 10.0955 16.25 8.5C16.25 6.764 15.065 5.318 13.464 4.891C13.278 2.577 11.362 0.75 9 0.75C6.515 0.75 4.5 2.765 4.5 5.25C4.5 5.6 4.549 5.936 4.624 6.263C3.027 6.33 1.75 7.637 1.75 9.25C1.75 10.4799 2.48996 11.5369 3.54903 12Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12 12.25H12.5C14.571 12.25 16.25 10.571 16.25 8.5C16.25 6.764 15.065 5.318 13.464 4.891C13.278 2.577 11.362 0.75 9 0.75C6.515 0.75 4.5 2.765 4.5 5.25C4.5 5.6 4.549 5.936 4.624 6.263C3.027 6.33 1.75 7.637 1.75 9.25C1.75 10.907 3.093 12.25 4.75 12.25H6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 15L9 17.25L6.75 15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 17.25V8.75"
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

export default CloudDownload2;
