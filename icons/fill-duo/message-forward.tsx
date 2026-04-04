import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageForward({
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
          d="M3.75 1.5C2.23054 1.5 1 2.73203 1 4.25V11.25C1 12.768 2.23054 14 3.75 14H5V16.25C5 16.5383 5.16526 16.8011 5.42511 16.926C5.68496 17.0509 5.99339 17.0158 6.21852 16.8357L9.76309 14H14.25C15.7695 14 17 12.768 17 11.25V4.25C17 2.73203 15.7695 1.5 14.25 1.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.53033 4.46967C8.23744 4.17678 7.76256 4.17678 7.46967 4.46967C7.17678 4.76256 7.17678 5.23744 7.46967 5.53033L8.93934 7H3.21259C2.79837 7 2.46259 7.33579 2.46259 7.75C2.46259 8.16421 2.79837 8.5 3.21259 8.5H8.93934L7.46967 9.96967C7.17678 10.2626 7.17678 10.7374 7.46967 11.0303C7.76256 11.3232 8.23744 11.3232 8.53033 11.0303L11.2803 8.28033C11.5732 7.98744 11.5732 7.51256 11.2803 7.21967L8.53033 4.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MessageForward;
