import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function People({
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
          d="M13.406 4.25C14.3725 4.25 15.156 3.4665 15.156 2.5C15.156 1.5335 14.3725 0.75 13.406 0.75C12.4395 0.75 11.656 1.5335 11.656 2.5C11.656 3.4665 12.4395 4.25 13.406 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M17.232 13.617L15.57 7.591C15.466 7.216 15.162 6.933 14.778 6.868C14.38 6.801 13.919 6.753 13.407 6.753C12.895 6.753 12.435 6.801 12.036 6.868C11.652 6.933 11.347 7.215 11.244 7.591C10.69 9.6 10.136 11.609 9.582 13.617C9.494 13.935 9.734 14.25 10.064 14.25H11.657L11.831 16.333C11.874 16.851 12.307 17.25 12.828 17.25H13.988C14.508 17.25 14.941 16.851 14.985 16.333L15.159 14.25H16.752C17.082 14.25 17.322 13.935 17.234 13.617H17.232Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.12 4.25C5.0865 4.25 5.87 3.4665 5.87 2.5C5.87 1.5335 5.0865 0.75 4.12 0.75C3.1535 0.75 2.37 1.5335 2.37 2.5C2.37 3.4665 3.1535 4.25 4.12 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.12 17.25H4.669C5.202 17.25 5.641 16.832 5.668 16.3L5.87 12.25L7.126 11.891C7.397 11.814 7.55 11.528 7.465 11.26L6.295 7.556C6.181 7.197 5.871 6.932 5.5 6.867C4.953 6.772 4.487 6.749 4.12 6.753C3.753 6.749 3.287 6.772 2.74 6.867C2.369 6.932 2.058 7.197 1.945 7.556L0.775 11.26C0.69 11.528 0.844 11.814 1.114 11.891L2.37 12.25L2.572 16.3C2.599 16.832 3.038 17.25 3.571 17.25H4.12Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.406 4.25C14.3725 4.25 15.156 3.4665 15.156 2.5C15.156 1.5335 14.3725 0.75 13.406 0.75C12.4395 0.75 11.656 1.5335 11.656 2.5C11.656 3.4665 12.4395 4.25 13.406 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.232 13.617L15.57 7.591C15.466 7.216 15.162 6.933 14.778 6.868C14.38 6.801 13.919 6.753 13.407 6.753C12.895 6.753 12.435 6.801 12.036 6.868C11.652 6.933 11.347 7.215 11.244 7.591C10.69 9.6 10.136 11.609 9.582 13.617C9.494 13.935 9.734 14.25 10.064 14.25H11.657L11.831 16.333C11.874 16.851 12.307 17.25 12.828 17.25H13.988C14.508 17.25 14.941 16.851 14.985 16.333L15.159 14.25H16.752C17.082 14.25 17.322 13.935 17.234 13.617H17.232Z"
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

export default People;
