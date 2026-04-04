import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Notes({
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
          d="M14.25,4H3.75c-1.517,0-2.75,1.233-2.75,2.75v7c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V6.75c0-1.517-1.233-2.75-2.75-2.75Zm-5,8.5H5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h4.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm3.75-3H5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H13c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M14.25,2.5H3.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H14.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Notes;
