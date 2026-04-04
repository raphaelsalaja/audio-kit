import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Layers3({
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
          d="M15.685,4.423L9.816,1.333c-.511-.271-1.121-.27-1.631,0L2.315,4.423c-.494,.26-.801,.769-.801,1.327s.307,1.067,.801,1.327l5.869,3.09c.255,.135,.536,.203,.816,.203s.56-.067,.815-.202l5.87-3.091c.494-.26,.801-.769,.801-1.327s-.307-1.067-.801-1.327Z"
          fill={fill}
        />
        <path
          d="M15.736,8.25c-.414,0-.75,.336-.75,.75l-5.87,3.091c-.072,.038-.158,.038-.232,0l-5.87-3.091c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75c0,.559,.307,1.067,.801,1.327l5.869,3.09c.255,.135,.536,.203,.816,.203s.56-.067,.815-.202l5.87-3.091c.494-.26,.801-.769,.801-1.327,0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.736,11.5c-.414,0-.75,.336-.75,.75l-5.87,3.091c-.072,.038-.158,.038-.232,0l-5.87-3.091c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75c0,.559,.307,1.067,.801,1.327l5.869,3.09c.255,.135,.536,.203,.816,.203s.56-.067,.815-.202l5.87-3.091c.494-.26,.801-.769,.801-1.327,0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Layers3;
