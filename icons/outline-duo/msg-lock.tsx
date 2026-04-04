import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgLock({
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
          d="M1.75 9C1.75 4.996 4.996 1.75 9 1.75C12.8359 1.75 15.9762 4.72922 16.233 8.5C16.2348 8.52649 16.2365 8.55734 16.238 8.59048C16.2474 8.79414 16.0478 8.9521 15.8638 8.86423C15.375 8.63074 14.8277 8.5 14.25 8.5C12.2614 8.5 10.6336 10.049 10.5078 12.0059C9.60138 12.5826 9 13.5961 9 14.75V16.2344C8.543 16.2344 8.095 16.207 7.662 16.125C6.647 15.933 5.872 15.559 5.383 15.277C4.647 15.753 3 16.318 1.75 16.25C2.67 15.329 3.153 13.423 2.723 12.617C2.108 11.552 1.75 10.319 1.75 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M16.25 13.75H12.25C11.698 13.75 11.25 14.198 11.25 14.75V16.25C11.25 16.802 11.698 17.25 12.25 17.25H16.25C16.802 17.25 17.25 16.802 17.25 16.25V14.75C17.25 14.198 16.802 13.75 16.25 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.1951 8.2153C15.8034 4.5813 12.7383 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 10.3188 2.10801 11.552 2.72301 12.6169C3.15301 13.4228 2.67 15.3291 1.75 16.25C3 16.3179 4.647 15.7529 5.383 15.2769C5.872 15.5591 6.647 15.9331 7.662 16.125C7.8533 16.1611 8.0535 16.1675 8.25 16.186"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 13.75H12.25C11.698 13.75 11.25 14.198 11.25 14.75V16.25C11.25 16.802 11.698 17.25 12.25 17.25H16.25C16.802 17.25 17.25 16.802 17.25 16.25V14.75C17.25 14.198 16.802 13.75 16.25 13.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 13.75V12.25C12.75 11.422 13.422 10.75 14.25 10.75C15.078 10.75 15.75 11.422 15.75 12.25V13.75"
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

export default MsgLock;
