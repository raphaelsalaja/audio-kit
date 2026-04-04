import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StillRings({
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
          d="M6.5 2.75C6.5 2.33579 6.16421 2 5.75 2C5.33579 2 5 2.33579 5 2.75V7.06222C2.87177 7.41928 1.25 9.27022 1.25 11.5C1.25 13.9853 3.2648 16 5.75 16C8.2352 16 10.25 13.9853 10.25 11.5C10.25 9.27022 8.62823 7.41928 6.5 7.06222V2.75ZM5.75 8.5C4.0932 8.5 2.75 9.84313 2.75 11.5C2.75 13.1569 4.0932 14.5 5.75 14.5C7.4068 14.5 8.75 13.1569 8.75 11.5C8.75 9.84313 7.4068 8.5 5.75 8.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13 2.75C13 2.33579 12.6642 2 12.25 2C11.8358 2 11.5 2.33579 11.5 2.75V7.06222C10.5244 7.22589 9.6553 7.70346 9 8.38753C9.35861 8.76188 9.65317 9.19807 9.86609 9.6785C10.4143 8.96207 11.2782 8.5 12.25 8.5C13.9068 8.5 15.25 9.84313 15.25 11.5C15.25 13.1569 13.9068 14.5 12.25 14.5C11.2782 14.5 10.4143 14.0379 9.86609 13.3215C9.65317 13.8019 9.35861 14.2381 9 14.6125C9.81914 15.4676 10.9724 16 12.25 16C14.7352 16 16.75 13.9853 16.75 11.5C16.75 9.27022 15.1282 7.41928 13 7.06222V2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default StillRings;
