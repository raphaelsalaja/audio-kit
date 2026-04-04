import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Temperature({
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
          d="M4 4.25C4 2.45479 5.45479 1 7.25 1C9.04521 1 10.5 2.45479 10.5 4.25V10.0171C11.1212 10.7542 11.5 11.707 11.5 12.75C11.5 15.0972 9.59721 17 7.25 17C4.90279 17 3 15.0972 3 12.75C3 11.707 3.37879 10.7542 4 10.0171V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12 3.25C12 2.83579 12.3358 2.5 12.75 2.5H15.5C15.9142 2.5 16.25 2.83579 16.25 3.25C16.25 3.66421 15.9142 4 15.5 4H12.75C12.3358 4 12 3.66421 12 3.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 6.25C12 5.83579 12.3358 5.5 12.75 5.5H14C14.4142 5.5 14.75 5.83579 14.75 6.25C14.75 6.66421 14.4142 7 14 7H12.75C12.3358 7 12 6.66421 12 6.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 9.25C12 8.83579 12.3358 8.5 12.75 8.5H15.5C15.9142 8.5 16.25 8.83579 16.25 9.25C16.25 9.66421 15.9142 10 15.5 10H12.75C12.3358 10 12 9.66421 12 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.25 6C7.66421 6 8 6.33579 8 6.75V12C8 12.4142 7.66421 12.75 7.25 12.75C6.83579 12.75 6.5 12.4142 6.5 12V6.75C6.5 6.33579 6.83579 6 7.25 6Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.25 14.25C8.078 14.25 8.75 13.578 8.75 12.75C8.75 11.922 8.078 11.25 7.25 11.25C6.422 11.25 5.75 11.922 5.75 12.75C5.75 13.578 6.422 14.25 7.25 14.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Temperature;
