import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColNewLeft2({
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
          d="M6.75009 8.25H5.00009V6.5C5.00009 6.0859 4.66419 5.75 4.25009 5.75C3.83599 5.75 3.50009 6.0859 3.50009 6.5V8.25H1.75009C1.33599 8.25 1.00009 8.5859 1.00009 9C1.00009 9.4141 1.33599 9.75 1.75009 9.75H3.50009V11.5C3.50009 11.9141 3.83599 12.25 4.25009 12.25C4.66419 12.25 5.00009 11.9141 5.00009 11.5V9.75H6.75009C7.16419 9.75 7.50009 9.4141 7.50009 9C7.50009 8.5859 7.16419 8.25 6.75009 8.25Z"
          fill={fill}
        />
        <path
          d="M12.7501 1H11.2501C10.0075 1 9.00009 2.00736 9.00009 3.25V14.75C9.00009 15.9926 10.0075 17 11.2501 17H12.7501C13.9927 17 15.0001 15.9926 15.0001 14.75V3.25C15.0001 2.00736 13.9927 1 12.7501 1Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TableColNewLeft2;
