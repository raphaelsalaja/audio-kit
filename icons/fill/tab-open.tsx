import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TabOpen({
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
          d="M12.03 3.71999L9.53001 1.21999C9.23701 0.930088 8.76202 0.930088 8.46902 1.21999L5.96902 3.71999C5.67602 4.00999 5.67602 4.49007 5.96902 4.78017C6.26202 5.07007 6.73701 5.07007 7.03001 4.78017L8.25002 3.56008V7.25002C8.25002 7.66002 8.58602 8.00002 9.00002 8.00002C9.41402 8.00002 9.75002 7.66002 9.75002 7.25002V3.56008L10.97 4.78017C11.116 4.93017 11.308 5.00014 11.5 5.00014C11.692 5.00014 11.884 4.93027 12.03 4.78017C12.323 4.49017 12.323 4.01009 12.03 3.71999Z"
          fill={secondaryfill}
        />
        <path
          d="M4.25 11.5H13.75C14.007 11.5 14.256 11.53 14.5 11.58V11.25C14.5 10.01 13.491 9 12.25 9H5.75C4.509 9 3.5 10.01 3.5 11.25V11.58C3.744 11.5301 3.993 11.5 4.25 11.5Z"
          fill={fill}
        />
        <path
          d="M13.75 13H4.25C2.733 13 1.5 14.23 1.5 15.75V16.25C1.5 16.66 1.836 17 2.25 17H15.75C16.164 17 16.5 16.66 16.5 16.25V15.75C16.5 14.23 15.267 13 13.75 13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TabOpen;
