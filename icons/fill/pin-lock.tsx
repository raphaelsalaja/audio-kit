import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinLock({
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
          d="M16.5 13.025V12.25C16.5 11.009 15.49 10 14.25 10C13.01 10 12 11.009 12 12.25V13.025C11.154 13.148 10.5 13.87 10.5 14.75V16.25C10.5 17.215 11.285 18 12.25 18H16.25C17.215 18 18 17.215 18 16.25V14.75C18 13.871 17.346 13.148 16.5 13.025ZM14.25 11.5C14.663 11.5 15 11.836 15 12.25V13H13.5V12.25C13.5 11.836 13.837 11.5 14.25 11.5Z"
          fill={secondaryfill}
        />
        <path
          d="M1.5 8.25C1.5 4.52392 4.52195 1.5 8.25 1.5C11.9781 1.5 15 4.52392 15 8.25C15 8.35858 14.9977 8.46654 14.9932 8.57386C14.7529 8.52542 14.5044 8.5 14.25 8.5C12.2611 8.5 10.6292 10.0541 10.5073 12.0143C9.60521 12.5871 9 13.5911 9 14.75V16.25C9 16.5745 9.04769 16.888 9.13643 17.1838C8.89931 17.3063 8.67658 17.4018 8.47585 17.4652C8.32886 17.5116 8.17114 17.5116 8.02415 17.4652C7.5159 17.3047 6.86652 16.9385 6.1999 16.4477C5.52063 15.9477 4.77887 15.2854 4.08989 14.4916C2.72115 12.9149 1.5 10.7465 1.5 8.25ZM10.25 8.25C10.25 9.35457 9.35457 10.25 8.25 10.25C7.14543 10.25 6.25 9.35457 6.25 8.25C6.25 7.14543 7.14543 6.25 8.25 6.25C9.35457 6.25 10.25 7.14543 10.25 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PinLock;
