import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function People2({
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
          d="M13.631 4.25C14.5975 4.25 15.381 3.4665 15.381 2.5C15.381 1.5335 14.5975 0.75 13.631 0.75C12.6645 0.75 11.881 1.5335 11.881 2.5C11.881 3.4665 12.6645 4.25 13.631 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.631 17.25H14.18C14.713 17.25 15.152 16.832 15.179 16.3L15.381 12.25L16.637 11.891C16.908 11.814 17.061 11.528 16.976 11.26L15.806 7.556C15.692 7.197 15.382 6.932 15.011 6.867C14.464 6.772 13.998 6.749 13.631 6.753C13.264 6.749 12.798 6.772 12.251 6.867C11.88 6.932 11.569 7.197 11.456 7.556L10.286 11.26C10.201 11.528 10.355 11.814 10.625 11.891L11.881 12.25L12.083 16.3C12.11 16.832 12.549 17.25 13.082 17.25H13.631Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.37 4.25C5.3365 4.25 6.12 3.4665 6.12 2.5C6.12 1.5335 5.3365 0.75 4.37 0.75C3.4035 0.75 2.62 1.5335 2.62 2.5C2.62 3.4665 3.4035 4.25 4.37 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.37 17.25H4.919C5.452 17.25 5.891 16.832 5.918 16.3L6.12 12.25L7.376 11.891C7.647 11.814 7.8 11.528 7.715 11.26L6.545 7.556C6.431 7.197 6.121 6.932 5.75 6.867C5.203 6.772 4.737 6.749 4.37 6.753C4.003 6.749 3.537 6.772 2.99 6.867C2.619 6.932 2.308 7.197 2.195 7.556L1.025 11.26C0.94 11.528 1.094 11.814 1.364 11.891L2.62 12.25L2.822 16.3C2.849 16.832 3.288 17.25 3.821 17.25H4.37Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.37 4.25C5.3365 4.25 6.12 3.4665 6.12 2.5C6.12 1.5335 5.3365 0.75 4.37 0.75C3.4035 0.75 2.62 1.5335 2.62 2.5C2.62 3.4665 3.4035 4.25 4.37 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.37 17.25H4.919C5.452 17.25 5.891 16.832 5.918 16.3L6.12 12.25L7.376 11.891C7.647 11.814 7.8 11.528 7.715 11.26L6.545 7.556C6.431 7.197 6.121 6.932 5.75 6.867C5.203 6.772 4.737 6.749 4.37 6.753C4.003 6.749 3.537 6.772 2.99 6.867C2.619 6.932 2.308 7.197 2.195 7.556L1.025 11.26C0.94 11.528 1.094 11.814 1.364 11.891L2.62 12.25L2.822 16.3C2.849 16.832 3.288 17.25 3.821 17.25H4.37Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.631 4.25C14.5975 4.25 15.381 3.4665 15.381 2.5C15.381 1.5335 14.5975 0.75 13.631 0.75C12.6645 0.75 11.881 1.5335 11.881 2.5C11.881 3.4665 12.6645 4.25 13.631 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.631 17.25H14.18C14.713 17.25 15.152 16.832 15.179 16.3L15.381 12.25L16.637 11.891C16.908 11.814 17.061 11.528 16.976 11.26L15.806 7.556C15.692 7.197 15.382 6.932 15.011 6.867C14.464 6.772 13.998 6.749 13.631 6.753C13.264 6.749 12.798 6.772 12.251 6.867C11.88 6.932 11.569 7.197 11.456 7.556L10.286 11.26C10.201 11.528 10.355 11.814 10.625 11.891L11.881 12.25L12.083 16.3C12.11 16.832 12.549 17.25 13.082 17.25H13.631Z"
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

export default People2;
