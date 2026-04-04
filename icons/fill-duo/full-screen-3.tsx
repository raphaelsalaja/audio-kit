import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FullScreen3({
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
          d="M2.75 7.5C3.164 7.5 3.5 7.164 3.5 6.75V4.75C3.5 4.061 4.061 3.5 4.75 3.5H6.75C7.164 3.5 7.5 3.164 7.5 2.75C7.5 2.336 7.164 2 6.75 2H4.75C3.233 2 2 3.233 2 4.75V6.75C2 7.164 2.336 7.5 2.75 7.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.25 2H11.25C10.836 2 10.5 2.336 10.5 2.75C10.5 3.164 10.836 3.5 11.25 3.5H13.25C13.939 3.5 14.5 4.061 14.5 4.75V6.75C14.5 7.164 14.836 7.5 15.25 7.5C15.664 7.5 16 7.164 16 6.75V4.75C16 3.233 14.767 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 10.5C14.836 10.5 14.5 10.836 14.5 11.25V13.25C14.5 13.939 13.939 14.5 13.25 14.5H11.25C10.836 14.5 10.5 14.836 10.5 15.25C10.5 15.664 10.836 16 11.25 16H13.25C14.767 16 16 14.767 16 13.25V11.25C16 10.836 15.664 10.5 15.25 10.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.75 14.5H4.75C4.061 14.5 3.5 13.939 3.5 13.25V11.25C3.5 10.836 3.164 10.5 2.75 10.5C2.336 10.5 2 10.836 2 11.25V13.25C2 14.767 3.233 16 4.75 16H6.75C7.164 16 7.5 15.664 7.5 15.25C7.5 14.836 7.164 14.5 6.75 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.25 6H5.75C5.33579 6 5 6.33579 5 6.75V11.25C5 11.6642 5.33579 12 5.75 12H12.25C12.6642 12 13 11.6642 13 11.25V6.75C13 6.33579 12.6642 6 12.25 6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FullScreen3;
