import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PresentationScreenLink({
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
          d="M15.5 7.5H15C14.4217 7.5 13.899 7.27469 13.5 6.91479C13.101 7.27469 12.5783 7.5 12 7.5H11.5C9.2944 7.5 7.5 5.7056 7.5 3.5V2.75H3.75C2.6454 2.75 1.75 3.645 1.75 4.75V11.25C1.75 12.355 2.6454 13.25 3.75 13.25H14.25C15.3546 13.25 16.25 12.355 16.25 11.25V7.45001C16.0065 7.49661 15.7568 7.5 15.5 7.5Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 16.25L6.75 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 16.25L11.25 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 2.75H3.75C2.645 2.75 1.75 3.646 1.75 4.75V11.25C1.75 12.354 2.645 13.25 3.75 13.25H14.25C15.355 13.25 16.25 12.354 16.25 11.25V8.19049"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 5.25H11.5C10.5335 5.25 9.75 4.4665 9.75 3.5V2.5C9.75 1.5335 10.5335 0.75 11.5 0.75H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 5.25H15.5C16.4665 5.25 17.25 4.4665 17.25 3.5V2.5C17.25 1.5335 16.4665 0.75 15.5 0.75H15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 3H14.75"
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

export default PresentationScreenLink;
