import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderTree({
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
          d="M12.123 2.75H14.25C14.802 2.75 15.25 3.198 15.25 3.75V6.25C15.25 6.802 14.802 7.25 14.25 7.25H9.75C9.198 7.25 8.75 6.802 8.75 6.25V2.75C8.75 2.198 9.198 1.75 9.75 1.75H10.796C11.085 1.75 11.359 1.87501 11.549 2.09201L12.123 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.123 11.75H14.25C14.802 11.75 15.25 12.198 15.25 12.75V15.25C15.25 15.802 14.802 16.25 14.25 16.25H9.75C9.198 16.25 8.75 15.802 8.75 15.25V11.75C8.75 11.198 9.198 10.75 9.75 10.75H10.796C11.085 10.75 11.359 10.875 11.549 11.092L12.123 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 4.75H4.25C3.422 4.75 2.75 4.078 2.75 3.25V1.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 13.75H4.25C3.422 13.75 2.75 13.078 2.75 12.25V3"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default FolderTree;
