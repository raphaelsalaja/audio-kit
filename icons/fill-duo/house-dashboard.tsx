import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseDashboard({
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
          d="M15.3086 5.34555L10.0596 1.3555C9.4366 0.8815 8.5655 0.8815 7.9414 1.3555L2.6914 5.34445C2.2588 5.67345 2 6.1945 2 6.7385V14.25C2 15.767 3.2334 17 4.75 17H13.25C14.7666 17 16 15.767 16 14.25V6.7385C16 6.1946 15.7412 5.67355 15.3086 5.34555Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.5 12.5H8.5C8.2239 12.5 8 12.724 8 13V14C8 14.276 8.2239 14.5 8.5 14.5H9.5C9.7761 14.5 10 14.276 10 14V13C10 12.724 9.7761 12.5 9.5 12.5Z"
          fill={fill}
        />
        <path
          d="M6 12.5H5C4.7239 12.5 4.5 12.724 4.5 13V14C4.5 14.276 4.7239 14.5 5 14.5H6C6.2761 14.5 6.5 14.276 6.5 14V13C6.5 12.724 6.2761 12.5 6 12.5Z"
          fill={fill}
        />
        <path
          d="M13 12.5H12C11.7238 12.5 11.5 12.724 11.5 13V14C11.5 14.276 11.7238 14.5 12 14.5H13C13.2761 14.5 13.5 14.276 13.5 14V13C13.5 12.724 13.2761 12.5 13 12.5Z"
          fill={fill}
        />
        <path
          d="M9.5 9H8.5C8.2239 9 8 9.224 8 9.5V10.5C8 10.776 8.2239 11 8.5 11H9.5C9.7761 11 10 10.776 10 10.5V9.5C10 9.224 9.7761 9 9.5 9Z"
          fill={fill}
        />
        <path
          d="M6 9H5C4.7239 9 4.5 9.224 4.5 9.5V10.5C4.5 10.776 4.7239 11 5 11H6C6.2761 11 6.5 10.776 6.5 10.5V9.5C6.5 9.224 6.2761 9 6 9Z"
          fill={fill}
        />
        <path
          d="M13 9H12C11.7238 9 11.5 9.224 11.5 9.5V10.5C11.5 10.776 11.7238 11 12 11H13C13.2761 11 13.5 10.776 13.5 10.5V9.5C13.5 9.224 13.2761 9 13 9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseDashboard;
