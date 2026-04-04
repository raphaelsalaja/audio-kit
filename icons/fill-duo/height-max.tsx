import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeightMax({
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
          d="M6.24146 16.5C7.20469 16.5 7.99146 15.7172 7.99146 14.75L7.99146 3.25C7.99146 2.28281 7.20469 1.5 6.24145 1.5L3.75002 1.5C2.78678 1.5 2.00002 2.28281 2.00002 3.25L2.00002 14.75C2.00002 15.7172 2.78678 16.5 3.75002 16.5L6.24146 16.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.5 4.75C5.5 4.33579 5.16421 4 4.75 4L2 4L2 5.5L4.75 5.5C5.16421 5.5 5.5 5.16421 5.5 4.75Z"
          fill={fill}
        />
        <path
          d="M2 13L3.75 13C4.16421 13 4.5 13.3358 4.5 13.75C4.5 14.1642 4.16421 14.5 3.75 14.5L2 14.5L2 13Z"
          fill={fill}
        />
        <path
          d="M2 10L4.75 10C5.16421 10 5.5 10.3358 5.5 10.75C5.5 11.1642 5.16421 11.5 4.75 11.5L2 11.5L2 10Z"
          fill={fill}
        />
        <path
          d="M2 7L3.75 7C4.16421 7 4.5 7.33579 4.5 7.75C4.5 8.16421 4.16421 8.5 3.75 8.5L2 8.5L2 7Z"
          fill={fill}
        />
        <path
          d="M9.75 15.75C9.75 15.3358 10.0858 15 10.5 15H15.75C16.1642 15 16.5 15.3358 16.5 15.75C16.5 16.1642 16.1642 16.5 15.75 16.5H10.5C10.0858 16.5 9.75 16.1642 9.75 15.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.75 2.25C9.75 1.83579 10.0858 1.5 10.5 1.5H15.75C16.1642 1.5 16.5 1.83579 16.5 2.25C16.5 2.66421 16.1642 3 15.75 3H10.5C10.0858 3 9.75 2.66421 9.75 2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.7803 4.71967C13.4874 4.42678 13.0126 4.42678 12.7197 4.71967L10.7197 6.71967C10.4268 7.01256 10.4268 7.48744 10.7197 7.78033C11.0126 8.07322 11.4874 8.07322 11.7803 7.78033L12.5 7.06066V12.75C12.5 13.1642 12.8358 13.5 13.25 13.5C13.6642 13.5 14 13.1642 14 12.75V7.06066L14.7197 7.78033C15.0126 8.07322 15.4874 8.07322 15.7803 7.78033C16.0732 7.48744 16.0732 7.01256 15.7803 6.71967L13.7803 4.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HeightMax;
