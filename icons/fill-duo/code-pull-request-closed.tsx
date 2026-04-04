import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodePullRequestClosed({
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
          d="M13.25 7.23489C13.6642 7.23489 14 7.57068 14 7.98489V12.25C14 12.6642 13.6642 13 13.25 13C12.8358 13 12.5 12.6642 12.5 12.25V7.98489C12.5 7.57068 12.8358 7.23489 13.25 7.23489Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.75 13C4.336 13 4 12.664 4 12.25V5.75C4 5.336 4.336 5 4.75 5C5.164 5 5.5 5.336 5.5 5.75V12.25C5.5 12.664 5.164 13 4.75 13Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.311 3.74999L15.781 2.27999C16.074 1.98699 16.074 1.51199 15.781 1.21899C15.488 0.925987 15.013 0.925987 14.72 1.21899L13.25 2.68899L11.78 1.21899C11.487 0.925987 11.012 0.925987 10.719 1.21899C10.426 1.51199 10.426 1.98699 10.719 2.27999L12.189 3.74999L10.719 5.21999C10.426 5.51299 10.426 5.98799 10.719 6.28099C10.865 6.42699 11.057 6.50099 11.249 6.50099C11.441 6.50099 11.633 6.42799 11.779 6.28099L13.249 4.81099L14.719 6.28099C14.865 6.42699 15.057 6.50099 15.249 6.50099C15.441 6.50099 15.633 6.42799 15.779 6.28099C16.072 5.98799 16.072 5.51299 15.779 5.21999L14.311 3.74999Z"
          fill={fill}
        />
        <path
          d="M4.75 6C6.13071 6 7.25 4.88071 7.25 3.5C7.25 2.11929 6.13071 1 4.75 1C3.36929 1 2.25 2.11929 2.25 3.5C2.25 4.88071 3.36929 6 4.75 6Z"
          fill={fill}
        />
        <path
          d="M4.75 17C6.13071 17 7.25 15.8807 7.25 14.5C7.25 13.1193 6.13071 12 4.75 12C3.36929 12 2.25 13.1193 2.25 14.5C2.25 15.8807 3.36929 17 4.75 17Z"
          fill={fill}
        />
        <path
          d="M13.25 17C14.6307 17 15.75 15.8807 15.75 14.5C15.75 13.1193 14.6307 12 13.25 12C11.8693 12 10.75 13.1193 10.75 14.5C10.75 15.8807 11.8693 17 13.25 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CodePullRequestClosed;
