import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloneXmark2({
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
          d="M13.75 5H7.75C6.23122 5 5 6.23122 5 7.75V13.75C5 15.2688 6.23122 16.5 7.75 16.5H13.75C15.2688 16.5 16.5 15.2688 16.5 13.75V7.75C16.5 6.23122 15.2688 5 13.75 5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.25 13H5V7.75C5 6.2334 6.2334 5 7.75 5H13V4.25C13 2.7334 11.7666 1.5 10.25 1.5H4.25C2.7334 1.5 1.5 2.7334 1.5 4.25V10.25C1.5 11.7666 2.7334 13 4.25 13Z"
          fill={fill}
        />
        <path
          d="M8.74996 8C8.94236 8 9.13377 8.0732 9.28027 8.2197L13.2803 12.2197C13.5733 12.5127 13.5733 12.9873 13.2803 13.2802C12.9873 13.5731 12.5126 13.5732 12.2197 13.2802L8.21975 9.28021C7.92675 8.98721 7.92675 8.5126 8.21975 8.2197C8.36625 8.0732 8.55756 8 8.74996 8Z"
          fill={fill}
        />
        <path
          d="M12.7499 8C12.9423 8 13.1337 8.0732 13.2802 8.2197C13.5732 8.5127 13.5732 8.98731 13.2802 9.28021L9.28023 13.2802C8.98723 13.5732 8.51261 13.5732 8.21971 13.2802C7.92681 12.9872 7.92671 12.5126 8.21971 12.2197L12.2197 8.2197C12.3662 8.0732 12.5575 8 12.7499 8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloneXmark2;
