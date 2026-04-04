import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlarmOff({
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
          d="M13.9498 4.05016C12.6831 2.78344 10.9331 2 9 2C5.13379 2 2 5.13379 2 9C2 10.9331 2.78344 12.6831 4.05016 13.9498L13.9498 4.05016Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.2793 5.90268L5.90265 15.2793C6.83639 15.7407 7.88788 16 8.99997 16C12.8662 16 16 12.8662 16 9C16 7.88791 15.7407 6.83642 15.2793 5.90268Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.03033 0.96967C4.32322 1.26256 4.32322 1.73744 4.03033 2.03033L2.03033 4.03033C1.73744 4.32322 1.26256 4.32322 0.96967 4.03033C0.676777 3.73744 0.676777 3.26256 0.96967 2.96967L2.96967 0.96967C3.26256 0.676777 3.73744 0.676777 4.03033 0.96967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.3912 14.4518L14.7197 15.7803C15.0126 16.0732 15.4874 16.0732 15.7803 15.7803C16.0732 15.4874 16.0732 15.0126 15.7803 14.7197L14.4518 13.3912C14.1371 13.7814 13.7814 14.1371 13.3912 14.4518Z"
          fill={fill}
        />
        <path
          d="M9 5C9.41421 5 9.75 5.33579 9.75 5.75V9C9.75 9.41421 9.41421 9.75 9 9.75C8.58579 9.75 8.25 9.41421 8.25 9V5.75C8.25 5.33579 8.58579 5 9 5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AlarmOff;
