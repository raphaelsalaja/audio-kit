import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mobile2({
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
          d="M12.25,1H5.75c-1.517,0-2.75,1.233-2.75,2.75V14.25c0,1.517,1.233,2.75,2.75,2.75h6.5c1.517,0,2.75-1.233,2.75-2.75V3.75c0-1.517-1.233-2.75-2.75-2.75Zm1.25,13.25c0,.689-.561,1.25-1.25,1.25H5.75c-.689,0-1.25-.561-1.25-1.25V3.75c0-.689,.561-1.25,1.25-1.25h1.25v.25c0,.414,.336,.75,.75,.75h2.5c.414,0,.75-.336,.75-.75v-.25h1.25c.689,0,1.25,.561,1.25,1.25V14.25Z"
          fill={fill}
        />
        <circle cx="9" cy="13" fill={secondaryfill} r="1" />
      </g>
    </svg>
  );
}

export default Mobile2;
