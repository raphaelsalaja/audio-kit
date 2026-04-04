import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DotsVertical({
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
          d="M9.00009 10.25C9.69045 10.25 10.2501 9.69036 10.2501 9C10.2501 8.30964 9.69045 7.75 9.00009 7.75C8.30974 7.75 7.75009 8.30964 7.75009 9C7.75009 9.69036 8.30974 10.25 9.00009 10.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00009 4.5C9.69045 4.5 10.2501 3.94036 10.2501 3.25C10.2501 2.55964 9.69045 2 9.00009 2C8.30974 2 7.75009 2.55964 7.75009 3.25C7.75009 3.94036 8.30974 4.5 9.00009 4.5Z"
          fill={fill}
        />
        <path
          d="M9.00009 16C9.69045 16 10.2501 15.4404 10.2501 14.75C10.2501 14.0596 9.69045 13.5 9.00009 13.5C8.30974 13.5 7.75009 14.0596 7.75009 14.75C7.75009 15.4404 8.30974 16 9.00009 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DotsVertical;
