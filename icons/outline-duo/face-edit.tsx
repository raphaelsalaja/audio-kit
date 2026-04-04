import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceEdit({
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
          d="M9.19221 15.2712L9.63191 13.8385C9.73831 13.4674 9.93661 13.1305 10.2081 12.861L13.3663 9.70281C13.9786 9.08951 14.795 8.75161 15.6642 8.75161C15.8473 8.75161 16.0262 8.77481 16.2032 8.80411C16.2324 8.54021 16.2501 8.27261 16.2501 8.00061C16.2501 3.99641 13.0041 0.75061 9.00012 0.75061C4.99612 0.75061 1.75012 3.99641 1.75012 8.00061C1.75012 12.0048 4.99612 15.2506 9.00012 15.2506C9.07872 15.2506 9.11421 15.2736 9.19221 15.2712Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 10.7586C10.778 11.5046 9.946 12.0006 9 12.0006C8.054 12.0006 7.222 11.5046 6.75 10.7586"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 9.00061C6.552 9.00061 7 8.55291 7 8.00061C7 7.44831 6.552 7.00061 6 7.00061C5.448 7.00061 5 7.44831 5 8.00061C5 8.55291 5.448 9.00061 6 9.00061Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 9.00061C12.552 9.00061 13 8.55291 13 8.00061C13 7.44831 12.552 7.00061 12 7.00061C11.448 7.00061 11 7.44831 11 8.00061C11 8.55291 11.448 9.00061 12 9.00061Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.2471 8.05751C16.2479 8.03851 16.25 8.01991 16.25 8.00061C16.25 3.99671 13.004 0.75061 9 0.75061C4.996 0.75061 1.75 3.99671 1.75 8.00061C1.75 11.8214 4.7104 14.9369 8.4601 15.2145"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 16.4548L16.9571 13.2936C17.3476 12.9031 17.3476 12.2699 16.9571 11.8794L16.3713 11.2936C15.9808 10.9031 15.3476 10.9031 14.9571 11.2936L11.7959 14.4548L11.0001 17.2507L13.7959 16.4548Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13.7959 16.4548L16.9571 13.2936C17.3476 12.9031 17.3476 12.2699 16.9571 11.8794L16.3713 11.2936C15.9808 10.9031 15.3476 10.9031 14.9571 11.2936L11.7959 14.4548L11.0001 17.2507L13.7959 16.4548Z"
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

export default FaceEdit;
