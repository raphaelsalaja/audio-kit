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
          d="M7.5 8.25C7.5 7.00779 8.50779 6 9.75 6H14.75C15.9922 6 17 7.00779 17 8.25V12.25C17 13.4077 16.1247 14.3618 15 14.4863V16.25C15 16.5469 14.8249 16.8158 14.5534 16.9359C14.2819 17.056 13.9652 17.0046 13.7455 16.805L11.21 14.5H9.75C8.50779 14.5 7.5 13.4922 7.5 12.25L7.5 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 8.25C7 7.00779 8.00779 6 9.25 6H14.75C15.9922 6 17 7.00779 17 8.25V12.25C17 13.4077 16.1247 14.3618 15 14.4863V16.25C15 16.5469 14.8249 16.8158 14.5534 16.9359C14.2819 17.056 13.9652 17.0046 13.7455 16.805L11.21 14.5H9.25C8.00779 14.5 7 13.4922 7 12.25L7 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 4.25C1 2.73079 2.23079 1.5 3.75 1.5H10.2498C11.7686 1.5 12.9998 2.73122 12.9998 4.25V4.5H9.25C7.17936 4.5 5.5 6.17936 5.5 8.25V12.25C5.5 12.6113 5.55113 12.9607 5.64653 13.2913L4.30281 14.7569C4.09381 14.9848 3.7663 15.0611 3.47807 14.949C3.18984 14.8368 3 14.5593 3 14.25V11.8968C1.84586 11.5707 1 10.509 1 9.25101V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Messages;
