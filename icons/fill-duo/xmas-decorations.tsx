import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function XmasDecorations({
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
          d="M4.25 12.25C4.25 9.62667 6.3768 7.5 9 7.5C11.6232 7.5 13.75 9.62667 13.75 12.25C13.75 14.8733 11.6232 17 9 17C6.3768 17 4.25 14.8733 4.25 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 6.5C8.586 6.5 8.25 6.164 8.25 5.75V1.75C8.25 1.336 8.586 1 9 1C9.414 1 9.75 1.336 9.75 1.75V5.75C9.75 6.164 9.414 6.5 9 6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.30888 11.5C4.27013 11.7443 4.25 11.9948 4.25 12.25C4.25 12.5052 4.27013 12.7557 4.30888 13H13.6911C13.7299 12.7557 13.75 12.5052 13.75 12.25C13.75 11.9948 13.7299 11.7443 13.6911 11.5H4.30888Z"
          fill={fill}
        />
        <path
          d="M11.5 6.75V8.21041H6.5V6.75C6.5 5.785 7.285 5 8.25 5H9.75C10.715 5 11.5 5.785 11.5 6.75Z"
          fill={fill}
        />
        <path
          d="M15.25 1C15.6642 1 16 1.33579 16 1.75V4.75C16 5.16421 15.6642 5.5 15.25 5.5C14.8358 5.5 14.5 5.16421 14.5 4.75V1.75C14.5 1.33579 14.8358 1 15.25 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.25 8.75C16.4926 8.75 17.5 7.74264 17.5 6.5C17.5 5.25736 16.4926 4.25 15.25 4.25C14.0074 4.25 13 5.25736 13 6.5C13 7.74264 14.0074 8.75 15.25 8.75Z"
          fill={fill}
        />
        <path
          d="M2.75 1C3.16421 1 3.5 1.33579 3.5 1.75V4.75C3.5 5.16421 3.16421 5.5 2.75 5.5C2.33579 5.5 2 5.16421 2 4.75V1.75C2 1.33579 2.33579 1 2.75 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.75 8.75C3.99264 8.75 5 7.74264 5 6.5C5 5.25736 3.99264 4.25 2.75 4.25C1.50736 4.25 0.5 5.25736 0.5 6.5C0.5 7.74264 1.50736 8.75 2.75 8.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default XmasDecorations;
