import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextColumns({
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
          d="M7.5,11.5H2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H7.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M7.5,15H2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H7.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M7.5,8H2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H7.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M7.5,4.5H2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H7.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M15.75,11.5h-5.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.75,15h-5.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.75,8h-5.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.75,4.5h-5.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TextColumns;
