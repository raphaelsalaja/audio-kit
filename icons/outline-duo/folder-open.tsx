import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderOpen({
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
          d="M2.70199 7.75H15.298C16.284 7.75 17.001 8.684 16.747 9.636L15.646 13.765C15.413 14.641 14.62 15.25 13.714 15.25H4.28699C3.38099 15.25 2.58799 14.641 2.35499 13.765L1.25399 9.636C0.999992 8.684 1.71799 7.75 2.70299 7.75H2.70199Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 7.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.025 7.761 3.498L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.70199 7.75H15.298C16.284 7.75 17.001 8.684 16.747 9.636L15.646 13.765C15.413 14.641 14.62 15.25 13.714 15.25H4.28699C3.38099 15.25 2.58799 14.641 2.35499 13.765L1.25399 9.636C0.999992 8.684 1.71799 7.75 2.70299 7.75H2.70199Z"
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

export default FolderOpen;
