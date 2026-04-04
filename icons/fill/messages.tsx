import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Messages({
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
          d="M14.75 5.5H9.25C8.01 5.5 7 6.509 7 7.75V12.25C7 13.491 8.01 14.5 9.25 14.5H11.21L13.745 16.805C13.887 16.933 14.067 17 14.25 17C14.353 17 14.456 16.979 14.554 16.936C14.825 16.816 15 16.547 15 16.25V14.486C16.123 14.361 17 13.406 17 12.25V7.75C17 6.509 15.99 5.5 14.75 5.5Z"
          fill={fill}
        />
        <path
          d="M1 4.25C1 2.73079 2.23079 1.5 3.75 1.5H10C11.0216 1.5 11.9012 2.06015 12.3738 2.87306C12.582 3.23117 12.4604 3.69022 12.1023 3.8984C11.7442 4.10657 11.2852 3.98504 11.077 3.62694C10.857 3.24845 10.4562 3 10 3H3.75C3.05921 3 2.5 3.55921 2.5 4.25V9.25101C2.5 9.94092 3.06019 10.5006 3.74932 10.5C3.94835 10.4998 4.13929 10.5788 4.28009 10.7194C4.42089 10.8601 4.5 11.051 4.5 11.25V12.3968C4.76956 12.2634 5.10471 12.3009 5.33967 12.5163C5.64497 12.7962 5.66553 13.2707 5.38559 13.576L4.30279 14.7569C4.09378 14.9848 3.76628 15.0611 3.47806 14.949C3.18984 14.8368 3 14.5593 3 14.25V11.8968C1.84586 11.5707 1 10.509 1 9.25101V4.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Messages;
