import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareKanban({
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
          d="M12.2501 5H10.5001C10.0859 5 9.75009 5.33579 9.75009 5.75V8.25C9.75009 8.66421 10.0859 9 10.5001 9H12.2501C12.6643 9 13.0001 8.66421 13.0001 8.25V5.75C13.0001 5.33579 12.6643 5 12.2501 5Z"
          fill={fill}
        />
        <path
          d="M7.50009 5H5.75009C5.33588 5 5.00009 5.33579 5.00009 5.75V12.25C5.00009 12.6642 5.33588 13 5.75009 13H7.50009C7.91431 13 8.25009 12.6642 8.25009 12.25V5.75C8.25009 5.33579 7.91431 5 7.50009 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareKanban;
