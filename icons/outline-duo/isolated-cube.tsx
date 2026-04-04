import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function IsolatedCube({
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
          d="M8.157 3.399L4.587 5.47C4.069 5.771 3.75 6.324 3.75 6.923V11.078C3.75 11.677 4.069 12.231 4.587 12.531L8.157 14.602C8.678 14.904 9.322 14.904 9.843 14.602L13.413 12.531C13.931 12.23 14.25 11.677 14.25 11.078V6.923C14.25 6.324 13.931 5.77 13.413 5.47L9.843 3.399C9.322 3.097 8.678 3.097 8.157 3.399Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.157 3.399L4.587 5.47C4.069 5.771 3.75 6.324 3.75 6.923V11.078C3.75 11.677 4.069 12.231 4.587 12.531L8.157 14.602C8.678 14.904 9.322 14.904 9.843 14.602L13.413 12.531C13.931 12.23 14.25 11.677 14.25 11.078V6.923C14.25 6.324 13.931 5.77 13.413 5.47L9.843 3.399C9.322 3.097 8.678 3.097 8.157 3.399Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.026 6.08501L9 9.00001L3.974 6.08501"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 14.828V9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default IsolatedCube;
