import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileTree({
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
          d="M14.25 3.25V6.75C14.25 7.302 13.802 7.75 13.25 7.75H10.75C10.198 7.75 9.75 7.302 9.75 6.75V2.75C9.75 2.198 10.198 1.75 10.75 1.75H12.75L14.25 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 11.75V15.25C14.25 15.802 13.802 16.25 13.25 16.25H10.75C10.198 16.25 9.75 15.802 9.75 15.25V11.25C9.75 10.698 10.198 10.25 10.75 10.25H12.75L14.25 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 3.25V6.75C14.25 7.302 13.802 7.75 13.25 7.75H10.75C10.198 7.75 9.75 7.302 9.75 6.75V2.75C9.75 2.198 10.198 1.75 10.75 1.75H12.75L14.25 3.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 1.75V3.25H14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 11.75V15.25C14.25 15.802 13.802 16.25 13.25 16.25H10.75C10.198 16.25 9.75 15.802 9.75 15.25V11.25C9.75 10.698 10.198 10.25 10.75 10.25H12.75L14.25 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 10.25V11.75H14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 5.25H5.25C4.422 5.25 3.75 4.578 3.75 3.75V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 13.25H5.25C4.422 13.25 3.75 12.578 3.75 11.75V3"
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

export default FileTree;
