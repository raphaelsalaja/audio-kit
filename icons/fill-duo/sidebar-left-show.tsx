import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarLeftShow({
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
          d="M14.2501 2H3.75012C2.23134 2 1.00012 3.23122 1.00012 4.75V13.25C1.00012 14.7688 2.23134 16 3.75012 16H14.2501C15.7689 16 17.0001 14.7688 17.0001 13.25V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.00012 2H3.75012C2.23352 2 1.00012 3.2334 1.00012 4.75V13.25C1.00012 14.7666 2.23352 16 3.75012 16H7.00012V2Z"
          fill={fill}
        />
        <path
          d="M10.2501 12.25C10.0577 12.25 9.86625 12.1768 9.71975 12.0303C9.42675 11.7373 9.42675 11.2627 9.71975 10.9698L11.6895 9.00011L9.71975 7.03038C9.42675 6.73738 9.42675 6.26273 9.71975 5.96983C10.0128 5.67693 10.4874 5.67683 10.7803 5.96983L13.2803 8.46983C13.5733 8.76283 13.5733 9.23748 13.2803 9.53038L10.7803 12.0304C10.6338 12.1769 10.4425 12.25 10.2501 12.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarLeftShow;
