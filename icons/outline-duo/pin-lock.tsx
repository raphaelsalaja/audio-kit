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
          d="M16.25 13.25H12.25C11.698 13.25 11.25 13.698 11.25 14.25V15.75C11.25 16.302 11.698 16.75 12.25 16.75H16.25C16.802 16.75 17.25 16.302 17.25 15.75V14.25C17.25 13.698 16.802 13.25 16.25 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.25 1.75C11.5637 1.75 14.25 4.438 14.25 7.75C14.25 7.83372 14.2452 7.91698 14.2422 8C12.2571 8.00405 10.6335 9.55151 10.5078 11.5059C9.60138 12.0826 9 13.0963 9 14.25V16.25C9 16.4138 8.30859 16.2315 8.25 16.25C6.6667 15.75 2.25 12.25 2.25 7.75C2.25 4.438 4.9363 1.75 8.25 1.75ZM8.25 5.75C7.1454 5.75 6.25 6.646 6.25 7.75C6.25 8.854 7.1454 9.75 8.25 9.75C9.3546 9.75 10.25 8.854 10.25 7.75C10.25 6.646 9.3546 5.75 8.25 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.25 9.75C9.3546 9.75 10.25 8.854 10.25 7.75C10.25 6.646 9.3546 5.75 8.25 5.75C7.1454 5.75 6.25 6.646 6.25 7.75C6.25 8.854 7.1454 9.75 8.25 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 13.25H12.25C11.698 13.25 11.25 13.698 11.25 14.25V15.75C11.25 16.302 11.698 16.75 12.25 16.75H16.25C16.802 16.75 17.25 16.302 17.25 15.75V14.25C17.25 13.698 16.802 13.25 16.25 13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.2298 7.26056C13.9428 3.97609 11.225 1.75 8.25 1.75C4.9363 1.75 2.25 4.438 2.25 7.75C2.25 12.25 6.6667 15.75 8.25 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 13.25V11.75C12.75 10.922 13.422 10.25 14.25 10.25C15.078 10.25 15.75 10.922 15.75 11.75V13.25"
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

export default PinLock;
