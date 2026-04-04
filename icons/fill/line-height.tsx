import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LineHeight({
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
          d="M13.269,12.979l-3.297-8.5c-.112-.289-.39-.479-.699-.479h-.546c-.31,0-.587,.19-.699,.479l-3.297,8.5c-.15,.386,.042,.82,.428,.97,.384,.149,.82-.042,.97-.428l.784-2.021h4.173l.784,2.021c.115,.297,.399,.479,.699,.479,.09,0,.182-.016,.271-.051,.386-.15,.578-.584,.428-.97Zm-5.774-2.979l1.505-3.88,1.505,3.88h-3.01Z"
          fill={fill}
        />
        <path
          d="M15.25,3H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H15.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.25,16.5H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H15.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default LineHeight;
