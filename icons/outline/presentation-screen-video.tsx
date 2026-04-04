import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PresentationScreenVideo({
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
          d="M5.75 16.25L6.75 13.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 16.25L11.25 13.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 0.75H10.5C9.5335 0.75 8.75 1.534 8.75 2.5V4.5C8.75 5.466 9.5335 6.25 10.5 6.25H13C13.9665 6.25 14.75 5.466 14.75 4.5V2.5C14.75 1.534 13.9665 0.75 13 0.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.619 1.288C17.385 1.155 17.094 1.15899 16.865 1.29899L14.743 2.57096C14.593 2.66096 14.5 2.82397 14.5 2.99997V3.99997C14.5 4.17597 14.592 4.33899 14.743 4.42899L16.864 5.69999C16.983 5.77199 17.117 5.80796 17.251 5.80796C17.378 5.80796 17.505 5.77597 17.619 5.71097C17.854 5.57797 18 5.32796 18 5.05796V1.94095C18 1.66995 17.854 1.42 17.619 1.288Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M5.75 2.75H3.75C2.645 2.75 1.75 3.646 1.75 4.75V11.25C1.75 12.354 2.645 13.25 3.75 13.25H14.25C15.355 13.25 16.25 12.354 16.25 11.25V7.94482"
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

export default PresentationScreenVideo;
