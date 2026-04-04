import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaLibrary({
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
          d="M6.75 12.25L14.25 12.25C15.3546 12.25 16.25 11.3546 16.25 10.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75L6.75 2.75C5.64543 2.75 4.75 3.64543 4.75 4.75L4.75 10.25C4.75 11.3546 5.64543 12.25 6.75 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.211 6.984L9.915 5.599C9.513 5.356 9 5.646 9 6.115V8.886C9 9.356 9.513 9.645 9.915 9.402L12.211 8.017C12.6 7.782 12.6 7.219 12.211 6.984Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 6.75V13.25C1.75 14.355 2.645 15.25 3.75 15.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 12.25L14.25 12.25C15.3546 12.25 16.25 11.3546 16.25 10.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75L6.75 2.75C5.64543 2.75 4.75 3.64543 4.75 4.75L4.75 10.25C4.75 11.3546 5.64543 12.25 6.75 12.25Z"
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

export default MediaLibrary;
