import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoonStars({
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
          d="M13 11.75C9.548 11.75 6.75 8.952 6.75 5.5C6.75 4.148 7.183 2.901 7.912 1.878C4.548 2.506 2 5.453 2 9C2 13.004 5.246 16.25 9.25 16.25C12.622 16.25 15.448 13.944 16.259 10.826C15.309 11.409 14.196 11.75 13 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13 11.75C9.548 11.75 6.75 8.952 6.75 5.5C6.75 4.148 7.183 2.901 7.912 1.878C4.548 2.506 2 5.453 2 9C2 13.004 5.246 16.25 9.25 16.25C12.622 16.25 15.448 13.944 16.259 10.826C15.309 11.409 14.196 11.75 13 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.743 4.492L11.797 4.177L11.481 3.23C11.379 2.924 10.872 2.924 10.77 3.23L10.454 4.177L9.508 4.492C9.355 4.543 9.251 4.686 9.251 4.848C9.251 5.01 9.355 5.153 9.508 5.204L10.454 5.519L10.77 6.466C10.821 6.619 10.964 6.722 11.125 6.722C11.286 6.722 11.43 6.618 11.48 6.466L11.796 5.519L12.742 5.204C12.895 5.153 12.999 5.01 12.999 4.848C12.999 4.686 12.895 4.543 12.742 4.492H12.743Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.25 8.5C14.6642 8.5 15 8.16421 15 7.75C15 7.33579 14.6642 7 14.25 7C13.8358 7 13.5 7.33579 13.5 7.75C13.5 8.16421 13.8358 8.5 14.25 8.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MoonStars;
