import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SackCoins({
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
          d="M9.5 5.25L11.5 2.25C11.5 1.698 11.052 1.25 10.5 1.25H5C4.448 1.25 4 1.698 4 2.25L6 5.25H9.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 5.25V3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.156 7.75C11.434 6.69 10.515 5.794 9.5 5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 5.25C3.609 6.531 1.75 9.766 1.75 12.5C1.75 15.814 4.436 16.75 7.75 16.75C7.7923 16.75 7.83449 16.7498 7.87659 16.7495"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.75H11.75C11.198 7.75 10.75 8.198 10.75 8.75V9.75C10.75 10.302 11.198 10.75 11.75 10.75H16.25C16.802 10.75 17.25 10.302 17.25 9.75V8.75C17.25 8.198 16.802 7.75 16.25 7.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 10.75H10.75C10.198 10.75 9.75 11.198 9.75 11.75V12.75C9.75 13.302 10.198 13.75 10.75 13.75H15.25C15.802 13.75 16.25 13.302 16.25 12.75V11.75C16.25 11.198 15.802 10.75 15.25 10.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 13.75H11.75C11.198 13.75 10.75 14.198 10.75 14.75V15.75C10.75 16.302 11.198 16.75 11.75 16.75H16.25C16.802 16.75 17.25 16.302 17.25 15.75V14.75C17.25 14.198 16.802 13.75 16.25 13.75Z"
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

export default SackCoins;
