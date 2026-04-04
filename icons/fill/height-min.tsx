import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeightMin({
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
          d="M16.5 15.75C16.5 16.164 16.164 16.5 15.75 16.5H10.5C10.086 16.5 9.75 16.164 9.75 15.75C9.75 15.336 10.086 15 10.5 15H15.75C16.164 15 16.5 15.336 16.5 15.75Z"
          fill={secondaryfill}
        />
        <path
          d="M16.5 6.75C16.5 7.164 16.164 7.5 15.75 7.5H10.5C10.086 7.5 9.75 7.164 9.75 6.75C9.75 6.336 10.086 6 10.5 6H15.75C16.164 6 16.5 6.336 16.5 6.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.78 11.2194C16.073 11.5124 16.073 11.9874 15.78 12.2804C15.487 12.5734 15.012 12.5734 14.719 12.2804L13.999 11.5604V12.7494C13.999 13.1634 13.663 13.4994 13.249 13.4994C12.835 13.4994 12.499 13.1634 12.499 12.7494V11.5604L11.779 12.2804C11.486 12.5734 11.011 12.5734 10.718 12.2804C10.572 12.1344 10.498 11.9424 10.498 11.7504C10.498 11.5584 10.571 11.3664 10.718 11.2204L12.718 9.22036C13.011 8.92736 13.486 8.92736 13.779 9.22036L15.78 11.2194Z"
          fill={secondaryfill}
        />
        <path
          d="M8.5 3.25V14.75C8.5 15.715 7.715 16.5 6.75 16.5H3.75C2.785 16.5 2 15.715 2 14.75V13.5H3.25C3.66421 13.5 4 13.1642 4 12.75C4 12.3358 3.66421 12 3.25 12H2V11H4.25C4.66421 11 5 10.6642 5 10.25C5 9.83579 4.66421 9.5 4.25 9.5H2V8.5H3.25C3.66421 8.5 4 8.16421 4 7.75C4 7.33579 3.66421 7 3.25 7H2V6H4.25C4.66421 6 5 5.66421 5 5.25C5 4.83579 4.66421 4.5 4.25 4.5H2V3.25C2 2.285 2.785 1.5 3.75 1.5H6.75C7.715 1.5 8.5 2.285 8.5 3.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HeightMin;
