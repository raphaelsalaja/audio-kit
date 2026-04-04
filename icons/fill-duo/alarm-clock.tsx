import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlarmClock({
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
          d="M2 9C2 5.13379 5.13379 2 9 2C12.8662 2 16 5.13379 16 9C16 12.8662 12.8662 16 9 16C5.13379 16 2 12.8662 2 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.9697 0.96967C14.2626 0.676777 14.7374 0.676777 15.0303 0.96967L17.0303 2.96967C17.3232 3.26256 17.3232 3.73744 17.0303 4.03033C16.7374 4.32322 16.2626 4.32322 15.9697 4.03033L13.9697 2.03033C13.6768 1.73744 13.6768 1.26256 13.9697 0.96967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.03033 0.96967C4.32322 1.26256 4.32322 1.73744 4.03033 2.03033L2.03033 4.03033C1.73744 4.32322 1.26256 4.32322 0.96967 4.03033C0.676777 3.73744 0.676777 3.26256 0.96967 2.96967L2.96967 0.96967C3.26256 0.676777 3.73744 0.676777 4.03033 0.96967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.54816 13.3912L2.21967 14.7197C1.92678 15.0126 1.92678 15.4874 2.21967 15.7803C2.51257 16.0732 2.98744 16.0732 3.28033 15.7803L4.60882 14.4518C4.2186 14.1371 3.86286 13.7814 3.54816 13.3912Z"
          fill={fill}
        />
        <path
          d="M13.3912 14.4518L14.7197 15.7803C15.0126 16.0732 15.4874 16.0732 15.7803 15.7803C16.0732 15.4874 16.0732 15.0126 15.7803 14.7197L14.4518 13.3912C14.1371 13.7814 13.7814 14.1371 13.3912 14.4518Z"
          fill={fill}
        />
        <path
          d="M9 5C9.41421 5 9.75 5.33579 9.75 5.75V8.58829L12.1527 10.1173C12.5021 10.3396 12.6051 10.8032 12.3827 11.1527C12.1604 11.5021 11.6968 11.6051 11.3473 11.3827L8.59734 9.63275C8.38101 9.49508 8.25 9.25643 8.25 9V5.75C8.25 5.33579 8.58579 5 9 5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AlarmClock;
