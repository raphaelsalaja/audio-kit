import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MenuBars({
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
          d="M16.25,8.25H5.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h10.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M1.75,9.75h1c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M16.25,3h-1c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M1.75,4.5H12.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={fill}
        />
        <path
          d="M16.25,13.5h-1c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M12.25,13.5H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H12.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MenuBars;
