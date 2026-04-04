import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleHashtag({
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
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.86217 5.13823C8.9385 4.73111 8.67035 4.33919 8.26323 4.26286C7.85611 4.18652 7.46419 4.45468 7.38786 4.8618L7.0807 6.5H5.75C5.33579 6.5 5 6.83579 5 7.25C5 7.66421 5.33579 8 5.75 8H6.79945L6.42445 10H5C4.58579 10 4.25 10.3358 4.25 10.75C4.25 11.1642 4.58579 11.5 5 11.5H6.1432L5.88786 12.8618C5.81152 13.2689 6.07968 13.6608 6.4868 13.7372C6.89392 13.8135 7.28583 13.5453 7.36217 13.1382L7.66933 11.5H9.3932L9.13786 12.8618C9.06152 13.2689 9.32968 13.6608 9.7368 13.7372C10.1439 13.8135 10.5358 13.5453 10.6122 13.1382L10.9193 11.5H12.25C12.6642 11.5 13 11.1642 13 10.75C13 10.3358 12.6642 10 12.25 10H11.2006L11.5756 8H13C13.4142 8 13.75 7.66421 13.75 7.25C13.75 6.83579 13.4142 6.5 13 6.5H11.8568L12.1122 5.13823C12.1885 4.73111 11.9203 4.33919 11.5132 4.26286C11.1061 4.18652 10.7142 4.45468 10.6379 4.8618L10.3307 6.5H8.60683L8.86217 5.13823ZM8.32558 8L7.95058 10H9.67445L10.0494 8H8.32558Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CircleHashtag;
