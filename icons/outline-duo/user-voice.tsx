import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserVoice({
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
          d="M7.5 7.25C8.74264 7.25 9.75 6.24264 9.75 5C9.75 3.75736 8.74264 2.75 7.5 2.75C6.25736 2.75 5.25 3.75736 5.25 5C5.25 6.24264 6.25736 7.25 7.5 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.5 7.25C8.74264 7.25 9.75 6.24264 9.75 5C9.75 3.75736 8.74264 2.75 7.5 2.75C6.25736 2.75 5.25 3.75736 5.25 5C5.25 6.24264 6.25736 7.25 7.5 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.341 6.591C12.748 6.184 13 5.621 13 5C13 4.379 12.748 3.816 12.341 3.409"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.639 8.889C15.634 7.894 16.25 6.519 16.25 5C16.25 3.481 15.634 2.106 14.639 1.111"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.54 14.817C12.377 14.526 12.806 13.56 12.406 12.769C11.5 10.978 9.645 9.749 7.5 9.749C5.355 9.749 3.5 10.977 2.594 12.769C2.194 13.56 2.622 14.526 3.46 14.817C4.491 15.175 5.868 15.5 7.5 15.5C9.132 15.5 10.509 15.175 11.54 14.817Z"
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

export default UserVoice;
