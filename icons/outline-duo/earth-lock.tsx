import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EarthLock({
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
          d="M16.25 13.75H12.25C11.6977 13.75 11.25 14.1977 11.25 14.75V16.25C11.25 16.8023 11.6977 17.25 12.25 17.25H16.25C16.8023 17.25 17.25 16.8023 17.25 16.25V14.75C17.25 14.1977 16.8023 13.75 16.25 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.85468 2.04793C4.5588 2.61682 3.05362 4.72304 2.58801 5.70505C2.85045 6.71247 3.86294 8.96093 5.81342 9.89552C4.94992 8.70187 5.18698 7.2491 6.27056 6.41618C7.71182 5.30831 9.14574 7.13997 9.80071 6.61935C10.0648 6.37554 9.77531 4.79077 9.97849 3.85109C10.1563 3.37702 11.0248 2.54063 13.0769 2.9876C12.1372 2.17491 9.72452 1.33681 6.85468 2.04793Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 13.75H12.25C11.6977 13.75 11.25 14.1977 11.25 14.75V16.25C11.25 16.8023 11.6977 17.25 12.25 17.25H16.25C16.8023 17.25 17.25 16.8023 17.25 16.25V14.75C17.25 14.1977 16.8023 13.75 16.25 13.75Z"
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
        <path
          d="M13.0008 2.98069L11.4893 2.9094C10.4948 2.8625 9.73548 3.7861 9.97368 4.7527L10.2457 5.8562C10.3051 6.0973 10.2086 6.3499 10.0036 6.4899C9.83799 6.603 9.62658 6.6251 9.44118 6.5487L8.51409 6.1666C7.78919 5.8678 6.96158 5.9623 6.32268 6.4169C5.75688 6.8194 5.40528 7.4578 5.36748 8.1511L5.29648 9.4532"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.59171 5.7457C3.02031 6.8697 3.9703 8.6883 5.4966 9.6832C5.9225 9.9178 6.90031 10.6811 6.83231 11.8894C6.73911 13.5437 6.9522 13.4437 7.7509 14.0381C8.1609 14.3433 8.28499 15.465 8.22509 16.2051"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75421 9.84739C6.90811 9.60409 8.33631 9.14719 9.99171 10.7675"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.1946 8.0994C15.7511 4.5203 12.6991 1.75 9 1.75C4.9959 1.75 1.75 4.9959 1.75 9C1.75 12.7428 4.5862 15.8232 8.2267 16.2092"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default EarthLock;
