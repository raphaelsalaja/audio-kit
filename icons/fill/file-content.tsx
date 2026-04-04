import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileContent({
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
          d="M15.487,5.427l-3.914-3.914c-.331-.331-.77-.513-1.237-.513H4.75c-1.517,0-2.75,1.233-2.75,2.75V14.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V6.664c0-.467-.182-.907-.513-1.237Zm-9.737,.573h2c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-2c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75Zm6.5,7.5H5.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h6.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm0-3H5.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h6.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm2.182-4h-2.932c-.55,0-1-.45-1-1V2.579l.013-.005,3.922,3.921-.002,.005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FileContent;
