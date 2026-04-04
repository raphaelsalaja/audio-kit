import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SmokingBan({
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
          d="M6.18195 15H15.25C16.2161 15 17 14.2167 17 13.25V12.25C17 11.2833 16.2161 10.5 15.25 10.5H10.6819L6.18195 15Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.49997 10.5H2.75C1.78393 10.5 1 11.2833 1 12.25V13.25C1 14.2167 1.78393 15 2.75 15H2.99997L7.49997 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 2.5C6.5 4.43 8.07 6 10 6C10.5062 6 10.969 6.18893 11.3217 6.5L12.5 5.55278C11.8643 4.90347 10.9784 4.5 10 4.5C8.897 4.5 8 3.603 8 2.5V2.25C8 1.836 7.664 1.5 7.25 1.5C6.836 1.5 6.5 1.836 6.5 2.25V2.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13 15V10.5H15.25C16.2161 10.5 17 11.2833 17 12.25V13.25C17 14.2167 16.2161 15 15.25 15H13Z"
          fill={fill}
        />
        <path
          d="M14.6672 3.33274C13.5355 2.20099 11.973 1.5 10.25 1.5C9.836 1.5 9.5 1.836 9.5 2.25C9.5 2.664 9.836 3 10.25 3C11.5595 3 12.747 3.53274 13.6071 4.39286L14.6672 3.33274Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.9639 5.21808L14.7994 6.38259C14.9298 6.8158 15 7.27489 15 7.75003V8.25003C15 8.66403 15.336 9.00003 15.75 9.00003C16.164 9.00003 16.5 8.66403 16.5 8.25003V7.75003C16.5 6.84932 16.3084 5.99246 15.9639 5.21808Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SmokingBan;
