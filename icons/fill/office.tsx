import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Office({
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
          d="M15.25 5H10.75C9.785 5 9 5.785 9 6.75V15H7.5V9.75C7.5 8.785 6.715 8 5.75 8H2.75C1.785 8 1 8.785 1 9.75V14.75C1 15.715 1.785 16.5 2.75 16.5H15.25C16.215 16.5 17 15.715 17 14.75V6.75C17 5.785 16.215 5 15.25 5ZM13.75 12.5H12.25C11.836 12.5 11.5 12.164 11.5 11.75C11.5 11.336 11.836 11 12.25 11H13.75C14.164 11 14.5 11.336 14.5 11.75C14.5 12.164 14.164 12.5 13.75 12.5ZM13.75 9.5H12.25C11.836 9.5 11.5 9.164 11.5 8.75C11.5 8.336 11.836 8 12.25 8H13.75C14.164 8 14.5 8.336 14.5 8.75C14.5 9.164 14.164 9.5 13.75 9.5Z"
          fill={fill}
        />
        <path
          d="M11.1638 2.19731C11.1637 2.19733 11.1638 2.1973 11.1638 2.19731L5.66503 4.21284C5.66493 4.21288 5.66513 4.21281 5.66503 4.21284C5.56494 4.24982 5.5 4.34374 5.5 4.44799V6.24999C5.5 6.66421 5.16421 6.99999 4.75 6.99999C4.33579 6.99999 4 6.66421 4 6.24999V4.44799C4 3.71236 4.45924 3.05825 5.14697 2.80515L10.6479 0.788819C11.7902 0.370742 13 1.21575 13 2.432V3.24999C13 3.66421 12.6642 3.99999 12.25 3.99999C11.8358 3.99999 11.5 3.66421 11.5 3.24999V2.432C11.5 2.2583 11.3275 2.13748 11.1638 2.19731Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Office;
