import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AutoFocus({
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
          d="M5 9C5 6.7909 6.79077 5 9 5C11.2092 5 13 6.7909 13 9C13 11.2091 11.2092 13 9 13C6.79077 13 5 11.2091 5 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.21967 2.21967C2.51256 1.92678 2.98744 1.92678 3.28033 2.21967L5.03033 3.96967C5.32322 4.26256 5.32322 4.73744 5.03033 5.03033C4.73744 5.32322 4.26256 5.32322 3.96967 5.03033L2.21967 3.28033C1.92678 2.98744 1.92678 2.51256 2.21967 2.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.7803 2.21967C16.0732 2.51256 16.0732 2.98744 15.7803 3.28033L14.0303 5.03033C13.7374 5.32322 13.2626 5.32322 12.9697 5.03033C12.6768 4.73744 12.6768 4.26256 12.9697 3.96967L14.7197 2.21967C15.0126 1.92678 15.4874 1.92678 15.7803 2.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.9697 12.9697C13.2626 12.6768 13.7374 12.6768 14.0303 12.9697L15.7803 14.7197C16.0732 15.0126 16.0732 15.4874 15.7803 15.7803C15.4874 16.0732 15.0126 16.0732 14.7197 15.7803L12.9697 14.0303C12.6768 13.7374 12.6768 13.2626 12.9697 12.9697Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.03033 12.9697C5.32322 13.2626 5.32322 13.7374 5.03033 14.0303L3.28033 15.7803C2.98744 16.0732 2.51256 16.0732 2.21967 15.7803C1.92678 15.4874 1.92678 15.0126 2.21967 14.7197L3.96967 12.9697C4.26256 12.6768 4.73744 12.6768 5.03033 12.9697Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AutoFocus;
