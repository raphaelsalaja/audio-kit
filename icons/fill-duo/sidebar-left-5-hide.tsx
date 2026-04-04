import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarLeft5Hide({
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
          d="M13.2501 2H4.75011C3.23132 2 2.00012 3.23122 2.00012 4.75V13.25C2.00012 14.7688 3.23132 16 4.75011 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.75012 13C5.33602 13 5.00012 12.6641 5.00012 12.25V5.75C5.00012 5.3359 5.33602 5 5.75012 5C6.16422 5 6.50012 5.3359 6.50012 5.75V12.25C6.50012 12.6641 6.16422 13 5.75012 13Z"
          fill={fill}
        />
        <path
          d="M11.5001 12C11.3077 12 11.1162 11.9268 10.9697 11.7803L8.71975 9.5303C8.42675 9.2373 8.42675 8.76277 8.71975 8.46987L10.9697 6.21987C11.2627 5.92687 11.7374 5.92687 12.0303 6.21987C12.3232 6.51287 12.3233 6.9874 12.0303 7.2803L10.3106 9.00002L12.0303 10.7197C12.3233 11.0127 12.3233 11.4873 12.0303 11.7802C11.8838 11.9267 11.6925 12 11.5001 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarLeft5Hide;
