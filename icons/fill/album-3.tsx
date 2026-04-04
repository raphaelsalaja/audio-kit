import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Album3({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m11.292,3.719c-.333-.457-.848-.719-1.414-.719H2.122c-.565,0-1.081.262-1.414.719-.333.457-.425,1.028-.252,1.566l1.607,5c.233.726.903,1.214,1.666,1.214h4.542c.763,0,1.433-.488,1.666-1.214l1.607-5c.173-.539.082-1.109-.252-1.566Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.25,1.5H2.75c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h6.5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Album3;
