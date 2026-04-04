import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bus({
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
          d="M15 7.75C15 7.33579 15.3358 7 15.75 7H17C17.4142 7 17.75 7.33579 17.75 7.75C17.75 8.16421 17.4142 8.5 17 8.5H15.75C15.3358 8.5 15 8.16421 15 7.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M0.25 7.75C0.25 7.33579 0.585786 7 1 7H2.25C2.66421 7 3 7.33579 3 7.75C3 8.16421 2.66421 8.5 2.25 8.5H1C0.585786 8.5 0.25 8.16421 0.25 7.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M4.25 2C2.73119 2 1.5 3.23119 1.5 4.75V15.25C1.5 16.2165 2.28349 17 3.25 17H3.75C4.71651 17 5.5 16.2165 5.5 15.25V15H12.5V15.25C12.5 16.2165 13.2835 17 14.25 17H14.75C15.7165 17 16.5 16.2165 16.5 15.25V4.75C16.5 3.23119 15.2688 2 13.75 2H4.25ZM15 8.5V4.75C15 4.05961 14.4404 3.5 13.75 3.5H4.25C3.55961 3.5 3 4.05961 3 4.75V8.5H15ZM4.5 12.5C5.05228 12.5 5.5 12.0523 5.5 11.5C5.5 10.9477 5.05228 10.5 4.5 10.5C3.94772 10.5 3.5 10.9477 3.5 11.5C3.5 12.0523 3.94772 12.5 4.5 12.5ZM14.5 11.5C14.5 12.0523 14.0523 12.5 13.5 12.5C12.9477 12.5 12.5 12.0523 12.5 11.5C12.5 10.9477 12.9477 10.5 13.5 10.5C14.0523 10.5 14.5 10.9477 14.5 11.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Bus;
