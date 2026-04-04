import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label2Plus({
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
          d="M18.333,8.528l-3.95-4.88c-.334-.412-.83-.648-1.36-.648H5.25c-1.517,0-2.75,1.233-2.75,2.75v3.888c.236-.084,.486-.138,.75-.138,1.241,0,2.25,1.009,2.25,2.25v.25h.25c1.241,0,2.25,1.009,2.25,2.25,0,.264-.054,.514-.138,.75h5.161c.53,0,1.026-.236,1.36-.649l3.95-4.879c.223-.275,.223-.668,0-.943Z"
          fill={fill}
        />
        <path
          d="M5.75,13.5h-1.75v-1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.75H.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.75v1.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.75h1.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Label2Plus;
