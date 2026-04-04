import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Link2({
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
          d="M5.75,14H3.25c-1.517,0-2.75-1.233-2.75-2.75V6.75c0-1.517,1.233-2.75,2.75-2.75h2.5c1.517,0,2.75,1.233,2.75,2.75,0,.414-.336,.75-.75,.75s-.75-.336-.75-.75c0-.689-.561-1.25-1.25-1.25H3.25c-.689,0-1.25,.561-1.25,1.25v4.5c0,.689,.561,1.25,1.25,1.25h2.5c.689,0,1.25-.561,1.25-1.25,0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
        />
        <path
          d="M14.75,14h-2.5c-1.517,0-2.75-1.233-2.75-2.75,0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,.689,.561,1.25,1.25,1.25h2.5c.689,0,1.25-.561,1.25-1.25V6.75c0-.689-.561-1.25-1.25-1.25h-2.5c-.689,0-1.25,.561-1.25,1.25,0,.414-.336,.75-.75,.75s-.75-.336-.75-.75c0-1.517,1.233-2.75,2.75-2.75h2.5c1.517,0,2.75,1.233,2.75,2.75v4.5c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
        />
        <path
          d="M12.25,9.75H5.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h6.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Link2;
