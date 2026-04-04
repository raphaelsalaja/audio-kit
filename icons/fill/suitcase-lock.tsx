import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseLock({
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
          d="M11.75 5.5C11.336 5.5 11 5.164 11 4.75V2.25C11 2.112 10.888 2 10.75 2H7.25C7.112 2 7 2.112 7 2.25V4.75C7 5.164 6.664 5.5 6.25 5.5C5.836 5.5 5.5 5.164 5.5 4.75V2.25C5.5 1.285 6.285 0.5 7.25 0.5H10.75C11.715 0.5 12.5 1.285 12.5 2.25V4.75C12.5 5.164 12.164 5.5 11.75 5.5Z"
          fill={fill}
        />
        <path
          d="M16.5 12.025V11.25C16.5 10.009 15.49 9 14.25 9C13.01 9 12 10.009 12 11.25V12.025C11.154 12.148 10.5 12.87 10.5 13.75V15.25C10.5 16.215 11.285 17 12.25 17H16.25C17.215 17 18 16.215 18 15.25V13.75C18 12.871 17.346 12.148 16.5 12.025ZM14.25 10.5C14.663 10.5 15 10.836 15 11.25V12H13.5V11.25C13.5 10.836 13.837 10.5 14.25 10.5Z"
          fill={secondaryfill}
        />
        <path
          d="M9.08716 16C9.03016 15.7592 9 15.5081 9 15.25V13.75C9 12.5911 9.60521 11.5871 10.5073 11.0143C10.6292 9.0541 12.2611 7.5 14.25 7.5C15.3355 7.5 16.3146 7.96291 17 8.70212V6.75C17 5.233 15.767 4 14.25 4H3.75C2.233 4 1 5.233 1 6.75V13.25C1 14.767 2.233 16 3.75 16H9.08716Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SuitcaseLock;
