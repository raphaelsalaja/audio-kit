import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowLock({
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
          d="M1.75 4.75C1.75 3.65 2.645 2.75 3.75 2.75H14.25C15.355 2.75 16.25 3.65 16.25 4.75V7.75H1.75V4.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 13.75H11.75C11.198 13.75 10.75 14.2 10.75 14.75V16.25C10.75 16.8 11.198 17.25 11.75 17.25H15.75C16.302 17.25 16.75 16.8 16.75 16.25V14.75C16.75 14.2 16.302 13.75 15.75 13.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 6C4.664 6 5 5.66 5 5.25C5 4.84 4.664 4.5 4.25 4.5C3.836 4.5 3.5 4.84 3.5 5.25C3.5 5.66 3.836 6 4.25 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 6C7.164 6 7.5 5.66 7.5 5.25C7.5 4.84 7.164 4.5 6.75 4.5C6.336 4.5 6 4.84 6 5.25C6 5.66 6.336 6 6.75 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 7.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 13.75H11.75C11.198 13.75 10.75 14.2 10.75 14.75V16.25C10.75 16.8 11.198 17.25 11.75 17.25H15.75C16.302 17.25 16.75 16.8 16.75 16.25V14.75C16.75 14.2 16.302 13.75 15.75 13.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 13.75V12.25C12.25 11.42 12.922 10.75 13.75 10.75C14.578 10.75 15.25 11.42 15.25 12.25V13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.75V4.75C16.25 3.65 15.355 2.75 14.25 2.75H3.75C2.645 2.75 1.75 3.65 1.75 4.75V13.25C1.75 14.35 2.645 15.25 3.75 15.25H7.75"
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

export default WindowLock;
