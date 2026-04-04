import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinLink({
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
          d="M8.25 1.75C11.5637 1.75 14.25 4.438 14.25 7.75C14.25 8.6743 14.1927 9.17741 13.8828 10H11.5C9.29086 10 7.5 11.7909 7.5 14C7.5 14.4659 7.47397 14.9389 7.52051 15.4033C7.53977 15.5961 7.37745 15.7616 7.21289 15.6729C5.32318 14.6521 2.25 11.7432 2.25 7.75C2.25 4.438 4.9363 1.75 8.25 1.75ZM8.25 5.75C7.1454 5.75 6.25 6.646 6.25 7.75C6.25 8.854 7.1454 9.75 8.25 9.75C9.3546 9.75 10.25 8.854 10.25 7.75C10.25 6.646 9.3546 5.75 8.25 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.25 9.75C9.3546 9.75 10.25 8.854 10.25 7.75C10.25 6.646 9.3546 5.75 8.25 5.75C7.1454 5.75 6.25 6.646 6.25 7.75C6.25 8.854 7.1454 9.75 8.25 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 16.75H11.5C10.5335 16.75 9.75 15.9665 9.75 15V14C9.75 13.0335 10.5335 12.25 11.5 12.25H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 16.75H15.5C16.4665 16.75 17.25 15.9665 17.25 15V14C17.25 13.0335 16.4665 12.25 15.5 12.25H15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.85779 15.4917C4.92479 14.1448 2.25 11.2544 2.25 7.75C2.25 4.438 4.9363 1.75 8.25 1.75C11.5637 1.75 14.25 4.438 14.25 7.75C14.25 8.137 14.207 8.51321 14.1463 8.88431L14.0624 9.27015"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 14.5H14.75"
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

export default PinLink;
