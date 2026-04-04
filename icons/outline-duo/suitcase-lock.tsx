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
          d="M10.5068 11.0176C10.6279 9.05758 12.2597 7.5 14.25 7.5C14.8536 7.5 15.4233 7.64492 15.9285 7.89972C16.0388 7.95542 16.1333 7.84311 16.25 7.63141V6.75C16.25 5.645 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.645 1.75 6.75V13.25C1.75 14.355 2.645 15.25 3.75 15.25H9V13.75C9 12.6206 9.59671 11.6006 10.5068 11.0176Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 12.75H12.25C11.698 12.75 11.25 13.198 11.25 13.75V15.25C11.25 15.802 11.698 16.25 12.25 16.25H16.25C16.802 16.25 17.25 15.802 17.25 15.25V13.75C17.25 13.198 16.802 12.75 16.25 12.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 12.75H12.25C11.6977 12.75 11.25 13.198 11.25 13.75V15.25C11.25 15.802 11.6977 16.25 12.25 16.25H16.25C16.8023 16.25 17.25 15.802 17.25 15.25V13.75C17.25 13.198 16.8023 12.75 16.25 12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.24219V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 12.75V11.25C12.75 10.422 13.422 9.75 14.25 9.75C15.078 9.75 15.75 10.422 15.75 11.25V12.75"
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

export default SuitcaseLock;
