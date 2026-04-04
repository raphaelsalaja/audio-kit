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
          d="M4.25 1.5C2.73119 1.5 1.5 2.73119 1.5 4.25V14.75C1.5 15.7165 2.28349 16.5 3.25 16.5H3.75C4.71651 16.5 5.5 15.7165 5.5 14.75V14.5H12.5V14.75C12.5 15.7165 13.2835 16.5 14.25 16.5H14.75C15.7165 16.5 16.5 15.7165 16.5 14.75V4.25C16.5 2.73119 15.2688 1.5 13.75 1.5H4.25ZM15 8V4.25C15 3.55961 14.4404 3 13.75 3H4.25C3.55961 3 3 3.55961 3 4.25V8H15Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3 8H15V4.25C15 3.55961 14.4404 3 13.75 3H4.25C3.55961 3 3 3.55961 3 4.25V8Z"
          fill={fill}
        />
        <path
          d="M5.5 12C6.05228 12 6.5 11.5523 6.5 11C6.5 10.4477 6.05228 10 5.5 10C4.94772 10 4.5 10.4477 4.5 11C4.5 11.5523 4.94772 12 5.5 12Z"
          fill={fill}
        />
        <path
          d="M12.5 12C13.0523 12 13.5 11.5523 13.5 11C13.5 10.4477 13.0523 10 12.5 10C11.9477 10 11.5 10.4477 11.5 11C11.5 11.5523 11.9477 12 12.5 12Z"
          fill={fill}
        />
        <path
          d="M16.5 8H17C17.4142 8 17.75 7.66421 17.75 7.25C17.75 6.83579 17.4142 6.5 17 6.5H16.5V8Z"
          fill={fill}
        />
        <path
          d="M1.5 6.5H1C0.585786 6.5 0.25 6.83579 0.25 7.25C0.25 7.66421 0.585786 8 1 8H1.5V6.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Bus;
