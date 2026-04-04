import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FullScreen({
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
          d="M1.75 7.5C2.164 7.5 2.5 7.164 2.5 6.75V4.75C2.5 4.061 3.061 3.5 3.75 3.5H5.75C6.164 3.5 6.5 3.164 6.5 2.75C6.5 2.336 6.164 2 5.75 2H3.75C2.233 2 1 3.233 1 4.75V6.75C1 7.164 1.336 7.5 1.75 7.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.25 2H12.25C11.836 2 11.5 2.336 11.5 2.75C11.5 3.164 11.836 3.5 12.25 3.5H14.25C14.939 3.5 15.5 4.061 15.5 4.75V6.75C15.5 7.164 15.836 7.5 16.25 7.5C16.664 7.5 17 7.164 17 6.75V4.75C17 3.233 15.767 2 14.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.25 10.5C15.836 10.5 15.5 10.836 15.5 11.25V13.25C15.5 13.939 14.939 14.5 14.25 14.5H12.25C11.836 14.5 11.5 14.836 11.5 15.25C11.5 15.664 11.836 16 12.25 16H14.25C15.767 16 17 14.767 17 13.25V11.25C17 10.836 16.664 10.5 16.25 10.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.75 14.5H3.75C3.061 14.5 2.5 13.939 2.5 13.25V11.25C2.5 10.836 2.164 10.5 1.75 10.5C1.336 10.5 1 10.836 1 11.25V13.25C1 14.767 2.233 16 3.75 16H5.75C6.164 16 6.5 15.664 6.5 15.25C6.5 14.836 6.164 14.5 5.75 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.25 5H4.75C4.33579 5 4 5.33579 4 5.75V12.25C4 12.6642 4.33579 13 4.75 13H13.25C13.6642 13 14 12.6642 14 12.25V5.75C14 5.33579 13.6642 5 13.25 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FullScreen;
