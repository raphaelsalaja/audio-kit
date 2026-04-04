import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarLeftHide({
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
          d="M12.2501 12.25C12.0577 12.25 11.8662 12.1768 11.7197 12.0303L9.21975 9.5303C8.92675 9.2373 8.92675 8.76277 9.21975 8.46987L11.7197 5.96987C12.0127 5.67687 12.4874 5.67687 12.7803 5.96987C13.0732 6.26287 13.0733 6.7374 12.7803 7.0303L10.8106 9.00002L12.7803 10.9697C13.0733 11.2627 13.0733 11.7373 12.7803 12.0302C12.6338 12.1767 12.4425 12.25 12.2501 12.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarLeftHide;
