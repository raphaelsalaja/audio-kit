import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDotsVertical({
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
          d="M13.2501 2H4.75009C3.23131 2 2.00009 3.23122 2.00009 4.75V13.25C2.00009 14.7688 3.23131 16 4.75009 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00009 10C9.55238 10 10.0001 9.55228 10.0001 9C10.0001 8.44772 9.55238 8 9.00009 8C8.44781 8 8.00009 8.44772 8.00009 9C8.00009 9.55228 8.44781 10 9.00009 10Z"
          fill={fill}
        />
        <path
          d="M9.00009 13.5C9.55238 13.5 10.0001 13.0523 10.0001 12.5C10.0001 11.9477 9.55238 11.5 9.00009 11.5C8.44781 11.5 8.00009 11.9477 8.00009 12.5C8.00009 13.0523 8.44781 13.5 9.00009 13.5Z"
          fill={fill}
        />
        <path
          d="M9.00009 6.5C9.55238 6.5 10.0001 6.05228 10.0001 5.5C10.0001 4.94772 9.55238 4.5 9.00009 4.5C8.44781 4.5 8.00009 4.94772 8.00009 5.5C8.00009 6.05228 8.44781 6.5 9.00009 6.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareDotsVertical;
