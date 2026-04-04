import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Movie({
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
          d="M14.25,2H3.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-5.75,2.5h1c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-1c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75Zm-2.75,9h-1c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm0-7.5h-1c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm3.75,7.5h-1c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm1.298-3.97l-2.375,1.386c-.409,.239-.922-.056-.922-.53v-2.771c0-.473,.514-.768,.922-.53l2.375,1.386c.406,.237,.406,.823,0,1.06Zm2.452,3.97h-1c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm0-7.5h-1c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Movie;
